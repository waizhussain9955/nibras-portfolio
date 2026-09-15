const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const PORT = process.env.PORT || 8000;
const ROOT_DIR = __dirname;
const DATA_FILE = path.join(ROOT_DIR, 'data.json');
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_c4Xbr2UyZnPE@ep-morning-king-b4ge91k2-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';

let sql = null;
try {
    sql = neon(DATABASE_URL);
    console.log('[Neon] Database driver initialized.');
} catch (e) {
    console.error('[Neon] Failed to initialize driver:', e);
}

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8'
};

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str
        .trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const readDataJson = () => {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const raw = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(raw);
        }
    } catch (e) {
        console.error("Error reading data.json:", e);
    }
    return null;
};

const writeDataJson = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (e) {
        console.error("Error writing data.json:", e);
        return false;
    }
};

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', reject);
    });
};

const server = http.createServer(async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = decodeURIComponent(parsedUrl.pathname);

    // -------------------------------------------------------------
    // API ROUTES (Backed by Neon PostgreSQL + Local Fallback)
    // -------------------------------------------------------------
    if (pathname === '/api/data' && req.method === 'GET') {
        if (sql) {
            try {
                const rows = await sql`SELECT content_json FROM portfolio_content WHERE section_key = 'main_portfolio'`;
                if (rows.length > 0 && rows[0].content_json) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
                    return res.end(JSON.stringify(rows[0].content_json));
                }
            } catch (err) {
                console.warn('[Neon API /data] Falling back to data.json due to error:', err.message);
            }
        }
        const data = readDataJson();
        if (data) {
            res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read data.json' }));
        }
        return;
    }

    if (pathname === '/api/save-data' && req.method === 'POST') {
        try {
            const body = await parseBody(req);
            if (!body || typeof body !== 'object') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Invalid payload' }));
            }

            const cleanBody = JSON.parse(JSON.stringify(body));
            if (cleanBody.githubConfig) {
                cleanBody.githubConfig.token = "";
            }

            // Save to Neon DB
            if (sql) {
                try {
                    await sql`
                        INSERT INTO portfolio_content (section_key, content_json, updated_at)
                        VALUES ('main_portfolio', ${JSON.stringify(cleanBody)}, CURRENT_TIMESTAMP)
                        ON CONFLICT (section_key)
                        DO UPDATE SET content_json = EXCLUDED.content_json, updated_at = CURRENT_TIMESTAMP
                    `;
                    console.log('[Neon] Content saved to cloud database.');
                } catch (dbErr) {
                    console.error('[Neon Save Error]:', dbErr);
                }
            }

            // Backup to local file
            writeDataJson(cleanBody);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: 'Saved to Neon Database & local backup!' }));
        } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Malformed JSON' }));
        }
        return;
    }

    // LEADS API (GET, POST, DELETE)
    if (pathname === '/api/leads') {
        if (req.method === 'GET') {
            if (sql) {
                try {
                    const rows = await sql`
                        SELECT id, name, email, project_domain AS project, message, created_at
                        FROM leads
                        ORDER BY created_at DESC
                    `;
                    const formatted = rows.map(r => ({
                        id: r.id,
                        name: r.name,
                        email: r.email,
                        project: r.project || 'General',
                        message: r.message,
                        date: new Date(r.created_at).toLocaleString()
                    }));
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
                    return res.end(JSON.stringify({ success: true, count: formatted.length, leads: formatted }));
                } catch (err) {
                    console.error('[Neon GET Leads Error]:', err);
                }
            }
            const data = readDataJson() || {};
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, count: (data.leads || []).length, leads: data.leads || [] }));
        }

        if (req.method === 'POST') {
            try {
                const body = await parseBody(req);
                const { name, email, project, message, hp } = body || {};

                // Anti-spam honeypot
                if (hp) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ success: true, message: 'Transmitted' }));
                }

                const cleanName = sanitizeInput(name);
                const cleanEmail = (email || '').trim().toLowerCase();
                const cleanProject = sanitizeInput(project || 'General');
                const cleanMessage = sanitizeInput(message);

                const errors = [];
                if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
                    errors.push('Name is required (between 2 and 100 characters).');
                }
                if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
                    errors.push('A valid email address is required.');
                }
                if (!cleanMessage || cleanMessage.length < 5 || cleanMessage.length > 5000) {
                    errors.push('Project scope/message is required (between 5 and 5000 characters).');
                }

                if (errors.length > 0) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ success: false, error: 'Validation failed', messages: errors }));
                }

                let savedLead = null;
                if (sql) {
                    try {
                        const inserted = await sql`
                            INSERT INTO leads (name, email, project_domain, message)
                            VALUES (${cleanName}, ${cleanEmail}, ${cleanProject}, ${cleanMessage})
                            RETURNING id, name, email, project_domain, message, created_at
                        `;
                        savedLead = inserted[0];
                        console.log(`[Neon] New client lead saved: ${cleanName} (${cleanEmail})`);
                    } catch (dbErr) {
                        console.error('[Neon Insert Lead Error]:', dbErr);
                    }
                }

                // Backup to data.json
                const fileData = readDataJson() || {};
                if (!Array.isArray(fileData.leads)) fileData.leads = [];
                fileData.leads.unshift({
                    name: cleanName,
                    email: cleanEmail,
                    project: cleanProject,
                    message: cleanMessage,
                    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                });
                writeDataJson(fileData);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({
                    success: true,
                    message: 'Inquiry received and saved to Neon Database!',
                    lead: savedLead
                }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Failed to record lead', details: err.message }));
            }
        }

        if (req.method === 'DELETE') {
            const leadId = parsedUrl.query.id;
            if (sql && leadId) {
                try {
                    await sql`DELETE FROM leads WHERE id = ${leadId}`;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ success: true, message: `Lead ${leadId} deleted.` }));
                } catch (dbErr) {
                    console.error('[Neon Delete Lead Error]:', dbErr);
                }
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true }));
        }
    }

    // -------------------------------------------------------------
    // STATIC FILE SERVER
    // -------------------------------------------------------------
    let filePath = path.join(ROOT_DIR, pathname);

    try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }
    } catch (e) {}

    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                const notFoundPath = path.join(ROOT_DIR, 'index.html');
                fs.readFile(notFoundPath, (e2, fallbackContent) => {
                    if (e2) {
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('404 Not Found');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(fallbackContent);
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`⚡ Nibras Portfolio CMS Server running at http://localhost:${PORT}`);
    console.log(`📁 Connected with Neon PostgreSQL Cloud Database`);
});
