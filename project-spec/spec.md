# 📐 PROJECT SPECKIT & TECHNICAL SPECIFICATIONS
## Nibras Portfolio & Cyber CMS Architecture

---

## 1. Project Overview
- **Project Name:** Nibras Ansari — Creative Graphic Designer Portfolio & Cyber CMS
- **Domain / Target Audience:** Esports Gaming Teams, Sports Franchises, Brands, and Clients seeking custom Mascot Logos, Vector Illustrations, and 2D Character Art.
- **Author / Designer:** Nibras Ansari
- **Maintainer:** Waiz Hussain (`waizhussain9955`)
- **Live Deployment (Primary):** Vercel (`https://nibras-ansari-portfolio.vercel.app/`)
- **Live Deployment (Mirror):** GitHub Pages (`https://waizhussain9955.github.io/nibras-portfolio/`)
- **Local Dev Server:** Node.js standalone HTTP Server (`http://localhost:8000`)

---

## 2. Technical Stack & Dependencies
- **Frontend Core:** Vanilla HTML5, Vanilla JavaScript (ES6+ Modules & Async/Await), Vanilla CSS3 (Custom CSS Variables & Modern Flex/Grid Layouts).
- **Audio Engine:** Web Audio API (Synthesized oscillators with zero external MP3 assets for ultra-lightweight instantaneous sound effects).
- **Cloud Database:** Neon Serverless PostgreSQL (`@neondatabase/serverless`) for persistent global client leads (`leads` table) and CMS backups (`portfolio_content` table).
- **Serverless Compute:** Vercel Serverless Functions (`/api/leads.js`, `/api/data.js`) with honeypot spam protection and RFC 5322 validation.
- **Data Persistence Architecture:**
  1. Neon PostgreSQL Database: Real-time global database persistence.
  2. `data.json`: Centralized single source of truth database.
  3. `localStorage`: In-browser client-side caching & instant hydration.
  4. Node.js REST API (`server.js`): Local disk synchronization via `fs.writeFileSync`.
  5. GitHub REST API (`v3`): Direct Git Commit & Push from static browser via Personal Access Token (`data.json` base64 PUT endpoint).

---

## 3. Cyber Theme Specification (Dark & Light)

### 3.1 CSS Variables Design Tokens

```css
:root {
  /* Brand Accents */
  --brand-purple: #9333ea;
  --brand-purple-light: #c084fc;
  --brand-pink: #d946ef;
  --brand-cyan: #06b6d4;
  --brand-glow: rgba(147, 51, 234, 0.4);
}

/* Dark Theme (Default) */
[data-theme="dark"] {
  --bg-primary: #06020c;
  --bg-secondary: #0e051a;
  --bg-card: rgba(22, 9, 38, 0.7);
  --text-main: #f3f0f9;
  --text-muted: #9f91b8;
  --border-subtle: rgba(168, 85, 247, 0.18);
}

/* Light Theme */
[data-theme="light"] {
  --bg-primary: #f8f6fc;
  --bg-secondary: #ece7f7;
  --bg-card: rgba(255, 255, 255, 0.85);
  --text-main: #140826;
  --text-muted: #64557c;
  --border-subtle: rgba(147, 51, 234, 0.22);
}
```

### 3.2 Visual & Micro-Interaction Components
- **Custom Cursor:** Trailing glowing ring with `requestAnimationFrame` lerping (Desktop fine pointers only).
- **Holographic Cards:** 3D perspective tilt calculation (`perspective: 1000px; rotateX/rotateY`) on pointer movement.
- **Laser Scan Line:** Animated CSS scan beam traversing cards on hover.
- **Dynamic Typewriter:** Smooth subtitle role deletion and re-typing loop.
- **Particle Network Canvas:** 30 floating nodes with dynamic distance connecting lines.

---

## 4. Cyber CMS Admin Panel Specifications

### 4.1 Routes & Access Control
- **Portal URL:** `/admin-nibras2026.html`
- **Session Key:** `sessionStorage.getItem('nibras_cms_auth')`
- **Default Login Email:** `nibrasansari002@gmail.com`
- **Default Password:** `nibras2026`

### 4.2 Data Models in `data.json`
- `auth`: Admin credentials.
- `hero`: Header badges, dual title lines, animated roles array, stats pills, featured image, and marquee text array.
- `about`: High-impact title, designer quote, bio body, education history, and spoken languages.
- `expertise`: Array of service cards with title, description, and SVG category icons.
- `portfolio`: Array of project objects (`id`, `title`, `category`, `categoryLabel`, `desc`, `image`).
- `gallery`: Media repository array with image URLs for instant one-click copy & paste.
- `experience`: Career history cards with company name, date badge, job summary, and bulleted achievements.
- `software`: Adobe / Corel software proficiency items with percentage metrics and master skill tags.
- `navLinks`: Dynamic navigation bar links and anchor jump targets.
- `contact`: Email, phone, Behance URL, location, and footer copyright credits.
- `githubConfig`: Repository owner, repo name, branch, and GitHub Personal Access Token.
- `leads`: Client inquiries captured from the portfolio contact form.

---

## 5. Deployment & Cloud Sync Protocol

### 5.1 Local Server Mode
1. User starts `node server.js`.
2. Admin actions invoke `fetch('/api/save-data', { method: 'POST', body: JSON.stringify(appData) })`.
3. `server.js` saves payload directly to `d:\Nibras-portfolio\data.json`.
4. Browser reloads and updates all pages instantly.

### 5.2 GitHub Pages Static Mode (Browser Direct Sync)
1. When running on `https://waizhussain9955.github.io/nibras-portfolio/`:
2. `isLocalhost` is `false`.
3. Admin save actions retrieve the GitHub Personal Access Token (`githubConfig.token`).
4. `pushToGithubDirectly()` fetches the file SHA via:
   `GET https://api.github.com/repos/waizhussain9955/nibras-portfolio/contents/data.json?ref=main`
5. Converts the updated `data.json` payload to UTF-8 safe Base64.
6. Commits directly to GitHub via:
   `PUT https://api.github.com/repos/waizhussain9955/nibras-portfolio/contents/data.json`
7. GitHub Pages automatically serves the updated content globally without manual terminal intervention.

---

## 6. Maintenance & Troubleshooting

| Issue | Resolution |
|---|---|
| Changes not showing on other browsers on GitHub Pages | Ensure your GitHub Token is saved in Admin Panel -> **Cloud Sync** tab. When you click **Save**, it will automatically commit to GitHub Repo. |
| Port 8000 already in use locally | Set environment variable `PORT=3000 node server.js` or kill existing node process. |
| Theme not persisting | Verify browser allows `localStorage` access for `nibras_portfolio_theme`. |
| Audio not playing | Click anywhere on the webpage to grant browser Web Audio context permission. |
