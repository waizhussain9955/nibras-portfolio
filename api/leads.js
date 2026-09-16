const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_c4Xbr2UyZnPE@ep-morning-king-b4ge91k2-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';
const sql = neon(DATABASE_URL);

// Strict Email Validator regex (RFC 5322 standard compliant)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Input Sanitizer to prevent XSS/Script Injection
function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str
        .trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // 1. GET ALL LEADS (for Admin Panel)
        if (req.method === 'GET') {
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
            return res.status(200).json({ success: true, count: formatted.length, leads: formatted });
        }

        // 2. SUBMIT NEW LEAD (Contact Form)
        if (req.method === 'POST') {
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
            const { name, email, project, message, hp } = body || {};

            // Honeypot anti-spam check
            if (hp) {
                return res.status(200).json({ success: true, message: 'Message transmitted' });
            }

            // Validations
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
                return res.status(400).json({
                    success: false,
                    error: 'Validation failed',
                    messages: errors
                });
            }

            // Insert into Neon Database
            const inserted = await sql`
                INSERT INTO leads (name, email, project_domain, message)
                VALUES (${cleanName}, ${cleanEmail}, ${cleanProject}, ${cleanMessage})
                RETURNING id, name, email, project_domain, message, created_at
            `;

            return res.status(201).json({
                success: true,
                message: 'Inquiry saved successfully to Neon Database!',
                lead: inserted[0]
            });
        }

        // 3. DELETE LEAD (for Admin Panel)
        if (req.method === 'DELETE') {
            const leadId = req.query.id || (req.body && req.body.id);
            if (!leadId) {
                return res.status(400).json({ success: false, error: 'Lead ID is required' });
            }
            await sql`DELETE FROM leads WHERE id = ${leadId}`;
            return res.status(200).json({ success: true, message: `Lead ${leadId} deleted successfully` });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (err) {
        console.error('[API Leads Error]:', err);
        return res.status(500).json({
            success: false,
            error: 'Database operation failed',
            details: err.message
        });
    }
};
