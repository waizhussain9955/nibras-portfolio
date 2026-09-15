const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_c4Xbr2UyZnPE@ep-morning-king-b4ge91k2-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';
const sql = neon(DATABASE_URL);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        await sql`
            CREATE TABLE IF NOT EXISTS portfolio_content (
                section_key VARCHAR(100) PRIMARY KEY,
                content_json JSONB NOT NULL,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        if (req.method === 'GET') {
            // Check if Neon has data
            const rows = await sql`SELECT section_key, content_json FROM portfolio_content WHERE section_key = 'main_portfolio'`;
            if (rows.length > 0) {
                return res.status(200).json(rows[0].content_json);
            }

            // Fallback to local data.json
            const dataPath = path.join(process.cwd(), 'data.json');
            if (fs.existsSync(dataPath)) {
                const raw = fs.readFileSync(dataPath, 'utf8');
                return res.status(200).json(JSON.parse(raw));
            }

            return res.status(404).json({ error: 'No data found' });
        }

        if (req.method === 'POST') {
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
            if (!body || typeof body !== 'object') {
                return res.status(400).json({ error: 'Invalid payload' });
            }

            // Store cleanly in Neon DB (never include secret tokens in content_json)
            const cleanBody = JSON.parse(JSON.stringify(body));
            if (cleanBody.githubConfig) {
                cleanBody.githubConfig.token = "";
            }

            await sql`
                INSERT INTO portfolio_content (section_key, content_json, updated_at)
                VALUES ('main_portfolio', ${JSON.stringify(cleanBody)}, CURRENT_TIMESTAMP)
                ON CONFLICT (section_key)
                DO UPDATE SET
                    content_json = EXCLUDED.content_json,
                    updated_at = CURRENT_TIMESTAMP
            `;

            return res.status(200).json({
                success: true,
                message: 'Portfolio data synchronized with Neon Database!'
            });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (err) {
        console.error('[API Data Error]:', err);
        return res.status(500).json({ error: 'Failed to access database', details: err.message });
    }
};
