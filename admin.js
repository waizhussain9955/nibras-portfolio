// Cyber CMS Engine for Nibras Portfolio (Full Responsive CRUD, Gallery, Backup, Cloud Sync & Leads)
document.addEventListener('DOMContentLoaded', () => {

    // Default Initial Master State
    const defaultData = {
        auth: {
            email: "nibrasansari002@gmail.com",
            password: "nibras2026"
        },
        hero: {
            badgeText: "AVAILABLE FOR NEW PROJECTS",
            badgeCode: "2026",
            titleLine1: "NIBRAS",
            titleLine2: "ANSARI.",
            typewriterRoles: [
                "CREATIVE GRAPHIC DESIGNER",
                "MASCOT LOGO ARTIST",
                "ESPORTS BRANDING EXPERT",
                "2D CHARACTER ILLUSTRATOR",
                "SPORTS ICONOGRAPHY DESIGNER"
            ],
            introText: "Specializing in bold branding, custom mascot logos, high-energy esports design, clean sports iconography, and personality-driven 2D character design. I craft impactful visuals that command attention.",
            stat1: { num: "50+", lbl: "Mascots Created" },
            stat2: { num: "100%", lbl: "Vector Precision" },
            stat3: { num: "2+ YRS", lbl: "Industry XP" },
            featuredImage: "assets/portfolio_esports_1.png",
            marqueeItems: [
                "MASCOT LOGOS",
                "ESPORTS BRANDING",
                "2D CHARACTER DESIGN",
                "SPORTS ICONOGRAPHY",
                "CUSTOM VECTOR ASSETS",
                "BRAND IDENTITY SYSTEMS"
            ]
        },
        about: {
            title: "FOCUSED ON<br>DELIVERING BOLD,<br>IMPACTFUL<br><span class=\"animated-gradient-heading glow-text\">VISUALS.</span>",
            quote: "\"A brand identity isn't just about graphics—it's about making a lasting impression that sets you apart from the noise.\"",
            body: "With an education in Communication Design from <strong>Arena Multimedia Karachi</strong>, I combine strategic conceptual thinking with top-tier digital illustration. Whether structuring character guidelines, developing custom vector assets, or establishing full esports branding architectures, I deliver professional design.",
            education: {
                title: "Arena Multimedia Karachi",
                sub: "Communication Design (2021)"
            },
            languages: {
                title: "English & Urdu",
                sub: "Fluent Global Communication"
            }
        },
        expertise: [
            {
                id: "exp_1",
                title: "MASCOT LOGOS",
                desc: "High-impact mascots designed for esports teams, sports franchises, and modern businesses looking to establish a memorable character brand representation.",
                icon: "mascot"
            },
            {
                id: "exp_2",
                title: "ESPORTS BRANDING",
                desc: "Striking and aggressive gaming designs featuring high-energy vector mascots, custom logotypes, jersey mocks, and full streaming overlay packages.",
                icon: "esports"
            },
            {
                id: "exp_3",
                title: "SPORTS ILLUSTRATION",
                desc: "Bold and dynamic sports logos featuring strong typography, clean outlines, and energetic compositions designed to stand out on uniforms and digital platforms.",
                icon: "sports"
            },
            {
                id: "exp_4",
                title: "2D CHARACTER DESIGN",
                desc: "Expressive and personality-driven character designs optimized for digital media, focusing on strong silhouettes, clean vector geometry, and print scalability.",
                icon: "character"
            },
            {
                id: "exp_5",
                title: "TYPOGRAPHY DESIGN",
                desc: "Custom lettering structures and typography overlays. Creating bespoke layout hierarchy systems that complement primary illustration works.",
                icon: "typography"
            },
            {
                id: "exp_6",
                title: "BRAND IDENTITIES",
                desc: "Holistic brand guidelines and social media templates. Designing unified collateral assets (banners, avatars, posts) that ensure a consistent visual message.",
                icon: "branding"
            }
        ],
        portfolio: [
            {
                id: "proj_1",
                category: "esports",
                categoryLabel: "ESPORTS LOGO",
                title: "Cyber Fangs Mascot",
                desc: "Futuristic cybernetic wolf vector logo designed for a professional esports gaming team, featuring custom neon lighting highlights.",
                image: "assets/portfolio_esports_1.png"
            },
            {
                id: "proj_2",
                category: "mascot",
                categoryLabel: "MASCOT DESIGN",
                title: "Samurai Red Panda",
                desc: "Personality-driven red panda samurai character mascot, designed with detailed armor gradients and bold vector shapes.",
                image: "assets/portfolio_mascot_1.png"
            },
            {
                id: "proj_3",
                category: "sports",
                categoryLabel: "SPORTS LOGO",
                title: "Chicago Bulls Concept",
                desc: "Fierce charging bull mascot logo for sports organizations, showcasing clean dynamic vectors and custom typography layouts.",
                image: "assets/portfolio_sports_1.png"
            },
            {
                id: "proj_4",
                category: "character",
                categoryLabel: "2D CHARACTER DESIGN",
                title: "Cyber Racer Character",
                desc: "Detailed 2D character design of a cyberpunk racer holding key assets, emphasizing clean line execution and strong color highlights.",
                image: "assets/portfolio_character_1.png"
            },
            {
                id: "proj_5",
                category: "mascot",
                categoryLabel: "WORK COLLAGE",
                title: "Branding Highlights Collage",
                desc: "Collage showcasing vector Mascot, Sports and Esports logos designed at Digital Cuberoot (2023 - 2025).",
                image: "assets/portfolio_page_1.png"
            }
        ],
        gallery: [
            { id: "gal_1", title: "Esports Cyber Wolf", url: "assets/portfolio_esports_1.png" },
            { id: "gal_2", title: "Samurai Red Panda Mascot", url: "assets/portfolio_mascot_1.png" },
            { id: "gal_3", title: "Chicago Bulls Athletics", url: "assets/portfolio_sports_1.png" },
            { id: "gal_4", title: "Cyberpunk Street Racer", url: "assets/portfolio_character_1.png" },
            { id: "gal_5", title: "Work Highlights Collage", url: "assets/portfolio_page_1.png" }
        ],
        experience: [
            {
                id: "exp_job_1",
                badge: "2023 - 2025",
                title: "GRAPHIC ILLUSTRATOR & DESIGNER",
                company: "Digital Cuberoot",
                desc: "Serving as lead vector designer specializing in character mascot creation, esports team branding, and customized merchandise line design.",
                tasks: [
                    "Designed high-impact brand characters and esport mascot logo structures with dynamic shadow details.",
                    "Maintained clean vector coordinates across digital and print assets, supporting scalability.",
                    "Engineered dynamic letterforms that integrate seamlessly with primary mascot frames."
                ]
            }
        ],
        software: [
            { id: "soft_1", name: "Adobe Photoshop", code: "Ps", brandClass: "ps-brand", badge: "PRO MASTER", percent: 95 },
            { id: "soft_2", name: "Adobe Illustrator", code: "Ai", brandClass: "ai-brand", badge: "VECTOR EXPERT", percent: 98, isExpert: true },
            { id: "soft_3", name: "Adobe Lightroom", code: "Lr", brandClass: "lr-brand", badge: "COLOR GRADE", percent: 85 },
            { id: "soft_4", name: "Adobe InDesign", code: "Id", brandClass: "id-brand", badge: "LAYOUT EDIT", percent: 80 },
            { id: "soft_5", name: "CorelDraw", code: "Cd", brandClass: "cd-brand", badge: "PRINT VECTOR", percent: 90, isExpert: true }
        ],
        navLinks: [
            { id: "nav_1", num: "01.", label: "About", href: "#about" },
            { id: "nav_2", num: "02.", label: "Expertise", href: "#expertise" },
            { id: "nav_3", num: "03.", label: "Portfolio", href: "#portfolio" },
            { id: "nav_4", num: "04.", label: "Experience", href: "#experience" },
            { id: "nav_5", num: "05.", label: "Stack", href: "#softwares" },
            { id: "nav_6", num: "06.", label: "Contact", href: "#contact" }
        ],
        contact: {
            email: "nibrasansari002@gmail.com",
            phone: "+92 316 1183289",
            location: "Karachi, Pakistan (Available for Global Remote Projects)",
            behance: "https://behance.net/nibrasansari2",
            copyright: "© 2026 Nibras Ansari. All rights reserved.",
            credit: "Handcrafted with Cyber Neon & Interactive Code"
        },
        githubConfig: {
            repoOwner: "waizhussain9955",
            repoName: "nibras-portfolio",
            branch: "main",
            token: ""
        },
        leads: []
    };

    // Load from LocalStorage or initialize
    const loadData = () => {
        const stored = localStorage.getItem('nibras_portfolio_data');
        if (!stored) {
            localStorage.setItem('nibras_portfolio_data', JSON.stringify(defaultData));
            return JSON.parse(JSON.stringify(defaultData));
        }
        try {
            const parsed = JSON.parse(stored);
            if (!parsed.gallery) parsed.gallery = defaultData.gallery;
            if (!parsed.githubConfig) parsed.githubConfig = defaultData.githubConfig;
            return parsed;
        } catch (e) {
            return JSON.parse(JSON.stringify(defaultData));
        }
    };

    const saveData = (data) => {
        localStorage.setItem('nibras_portfolio_data', JSON.stringify(data));
        showToast("Changes saved successfully to live website!", "success");
    };

    let appData = loadData();

    // Toast System
    const showToast = (message, type = "success") => {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    };

    // Authentication Checks
    const loginScreen = document.getElementById('loginScreen');
    const dashboardScreen = document.getElementById('dashboardScreen');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    const checkAuthSession = () => {
        const isAuth = sessionStorage.getItem('nibras_cms_auth');
        if (isAuth === 'true') {
            loginScreen.style.display = 'none';
            dashboardScreen.style.display = 'flex';
            populateAllForms();
        } else {
            loginScreen.style.display = 'flex';
            dashboardScreen.style.display = 'none';
        }
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail').value.trim();
            const passInput = document.getElementById('loginPassword').value.trim();

            if (emailInput === appData.auth.email && passInput === appData.auth.password) {
                sessionStorage.setItem('nibras_cms_auth', 'true');
                showToast("Access Granted. Welcome Nibras!", "success");
                checkAuthSession();
            } else {
                showToast("Invalid credentials. Please verify email and password.", "error");
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('nibras_cms_auth');
            showToast("Logged out successfully.", "success");
            checkAuthSession();
        });
    }

    // Sidebar Mobile Responsive Drawer Controls
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const currentSectionTitle = document.getElementById('currentSectionTitle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const adminSidebar = document.getElementById('adminSidebar');

    const openSidebar = () => {
        adminSidebar.classList.add('open');
        sidebarBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        adminSidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            navTabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(target);
            if (targetPane) targetPane.classList.add('active');

            currentSectionTitle.textContent = tab.querySelector('.tab-label').textContent.toUpperCase();
            
            // Auto close drawer on mobile tap
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // -------------------------------------------------------------
    // DATA POPULATION & FORM SYNC
    // -------------------------------------------------------------
    const populateAllForms = () => {
        appData = loadData();

        // 1. Overview counts
        document.getElementById('countProjects').textContent = appData.portfolio.length;
        document.getElementById('countGallery').textContent = (appData.gallery || []).length;
        document.getElementById('countSoftwares').textContent = appData.software.length;
        document.getElementById('countLeads').textContent = (appData.leads || []).length;
        renderLeadsTable();

        // 2. Hero
        document.getElementById('heroBadgeText').value = appData.hero.badgeText || '';
        document.getElementById('heroBadgeCode').value = appData.hero.badgeCode || '';
        document.getElementById('heroTitleLine1').value = appData.hero.titleLine1 || '';
        document.getElementById('heroTitleLine2').value = appData.hero.titleLine2 || '';
        document.getElementById('heroTypewriterRoles').value = (appData.hero.typewriterRoles || []).join(', ');
        document.getElementById('heroIntroText').value = appData.hero.introText || '';
        document.getElementById('heroStat1Num').value = appData.hero.stat1.num || '';
        document.getElementById('heroStat1Lbl').value = appData.hero.stat1.lbl || '';
        document.getElementById('heroStat2Num').value = appData.hero.stat2.num || '';
        document.getElementById('heroStat2Lbl').value = appData.hero.stat2.lbl || '';
        document.getElementById('heroStat3Num').value = appData.hero.stat3.num || '';
        document.getElementById('heroStat3Lbl').value = appData.hero.stat3.lbl || '';
        document.getElementById('heroImage').value = appData.hero.featuredImage || '';
        document.getElementById('marqueeText').value = (appData.hero.marqueeItems || []).join(', ');

        // 3. About
        document.getElementById('aboutTitle').value = appData.about.title || '';
        document.getElementById('aboutQuote').value = appData.about.quote || '';
        document.getElementById('aboutBody').value = appData.about.body || '';
        document.getElementById('aboutEduTitle').value = appData.about.education.title || '';
        document.getElementById('aboutEduSub').value = appData.about.education.sub || '';
        document.getElementById('aboutLangTitle').value = appData.about.languages.title || '';
        document.getElementById('aboutLangSub').value = appData.about.languages.sub || '';

        // 4. Contact & Footer
        document.getElementById('contactEmail').value = appData.contact.email || '';
        document.getElementById('contactPhone').value = appData.contact.phone || '';
        document.getElementById('contactLocation').value = appData.contact.location || '';
        document.getElementById('contactBehance').value = appData.contact.behance || '';
        document.getElementById('footerCopyright').value = appData.contact.copyright || '';
        document.getElementById('footerCredit').value = appData.contact.credit || '';

        // 5. GitHub Cloud Config
        if (appData.githubConfig) {
            document.getElementById('ghRepo').value = `${appData.githubConfig.repoOwner}/${appData.githubConfig.repoName}`;
            document.getElementById('ghBranch').value = appData.githubConfig.branch || 'main';
            document.getElementById('ghToken').value = appData.githubConfig.token || '';
        }

        // 6. Security email
        document.getElementById('adminEmailInput').value = appData.auth.email || '';

        // Dynamic Lists
        renderGalleryGrid();
        renderProjectsList();
        renderExpertiseList();
        renderExperienceList();
        renderSoftwareList();
        renderNavLinksList();
    };

    // Render Leads Table
    const renderLeadsTable = () => {
        const tbody = document.getElementById('leadsTableBody');
        const leads = appData.leads || [];
        if (leads.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No client inquiries received yet. When clients submit the contact form, submissions appear here.</td></tr>`;
            return;
        }

        tbody.innerHTML = leads.map((lead, index) => `
            <tr>
                <td>${lead.date || 'Just now'}</td>
                <td><strong>${lead.name}</strong></td>
                <td><a href="mailto:${lead.email}" style="color:var(--brand-purple-light)">${lead.email}</a></td>
                <td><span class="admin-item-tag">${(lead.project || 'General').toUpperCase()}</span></td>
                <td style="max-width:300px;">${lead.message}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteLead(${index})">Delete</button>
                </td>
            </tr>
        `).join('');
    };

    window.deleteLead = (index) => {
        if (confirm("Delete this client inquiry?")) {
            appData.leads.splice(index, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    document.getElementById('clearLeadsBtn').addEventListener('click', () => {
        if (confirm("Clear all client inquiries?")) {
            appData.leads = [];
            saveData(appData);
            populateAllForms();
        }
    });

    // -------------------------------------------------------------
    // MEDIA GALLERY MANAGER (Upload, Preview, Copy URL, Delete)
    // -------------------------------------------------------------
    const renderGalleryGrid = () => {
        const container = document.getElementById('galleryAdminGrid');
        const gallery = appData.gallery || [];

        if (gallery.length === 0) {
            container.innerHTML = `<div class="text-muted" style="grid-column:1/-1;">No gallery images uploaded yet. Click "+ Upload New Image" above.</div>`;
            return;
        }

        container.innerHTML = gallery.map((item, idx) => `
            <div class="admin-gallery-card">
                <div class="admin-gallery-thumb">
                    <img src="${item.url}" alt="${item.title}">
                </div>
                <div class="admin-gallery-meta">
                    <div class="gallery-asset-title">${item.title}</div>
                    <div class="gallery-action-row">
                        <button class="btn-copy-url" onclick="copyImageUrl('${item.url}')">
                            <span>📋 Copy URL</span>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteGalleryItem(${idx})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    };

    window.copyImageUrl = (url) => {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Asset URL copied to clipboard! Paste it into your project or hero image.", "success");
        }).catch(() => {
            showToast("Failed to copy URL automatically. Please copy manually.", "error");
        });
    };

    window.deleteGalleryItem = (idx) => {
        if (confirm(`Delete "${appData.gallery[idx].title}" from media gallery?`)) {
            appData.gallery.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    const galleryUploadInput = document.getElementById('galleryUploadInput');
    if (galleryUploadInput) {
        galleryUploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (re) => {
                    if (!appData.gallery) appData.gallery = [];
                    const fileName = file.name.replace(/\.[^/.]+$/, "");
                    appData.gallery.unshift({
                        id: "gal_" + Date.now(),
                        title: fileName,
                        url: re.target.result
                    });
                    saveData(appData);
                    populateAllForms();
                    showToast(`"${file.name}" uploaded to gallery! You can now copy its URL.`, "success");
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // -------------------------------------------------------------
    // RENDER LISTS & CARDS
    // -------------------------------------------------------------

    // Portfolio Projects
    const renderProjectsList = () => {
        const container = document.getElementById('projectsAdminList');
        container.innerHTML = appData.portfolio.map((item, idx) => `
            <div class="admin-project-item">
                <div class="admin-project-thumb">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="admin-project-meta">
                    <span class="admin-item-tag">${item.categoryLabel || item.category.toUpperCase()}</span>
                    <h4 class="admin-item-title">${item.title}</h4>
                    <p class="admin-item-desc">${item.desc}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn-outline btn-sm" onclick="editProject(${idx})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProject(${idx})">Delete</button>
                </div>
            </div>
        `).join('');
    };

    // Expertise Cards
    const renderExpertiseList = () => {
        const container = document.getElementById('expertiseAdminList');
        container.innerHTML = appData.expertise.map((item, idx) => `
            <div class="admin-service-card">
                <div class="admin-card-header">
                    <h4 class="admin-item-title">${item.title}</h4>
                    <div>
                        <button class="btn btn-outline btn-sm" onclick="editExpertise(${idx})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteExpertise(${idx})">Delete</button>
                    </div>
                </div>
                <p class="admin-item-desc">${item.desc}</p>
            </div>
        `).join('');
    };

    // Experience List
    const renderExperienceList = () => {
        const container = document.getElementById('experienceAdminList');
        container.innerHTML = appData.experience.map((item, idx) => `
            <div class="admin-list-item">
                <div class="item-info-col">
                    <span class="admin-item-tag">${item.badge}</span>
                    <h4 class="admin-item-title">${item.title} — <span style="color:var(--brand-purple-light)">${item.company}</span></h4>
                    <p class="admin-item-desc">${item.desc}</p>
                    <small class="text-muted">${(item.tasks || []).length} structured task bullet points</small>
                </div>
                <div>
                    <button class="btn btn-outline btn-sm" onclick="editExperience(${idx})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteExperience(${idx})">Delete</button>
                </div>
            </div>
        `).join('');
    };

    // Software List
    const renderSoftwareList = () => {
        const container = document.getElementById('softwareAdminList');
        container.innerHTML = appData.software.map((item, idx) => `
            <div class="admin-service-card">
                <div class="admin-card-header">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <span class="admin-item-tag" style="font-size:1.1rem; background:rgba(115,7,148,0.3); padding:4px 8px;">${item.code}</span>
                        <h4 class="admin-item-title">${item.name}</h4>
                    </div>
                    <span class="admin-item-tag">${item.badge} (${item.percent}%)</span>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                    <button class="btn btn-outline btn-sm" onclick="editSoftware(${idx})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteSoftware(${idx})">Delete</button>
                </div>
            </div>
        `).join('');
    };

    // Nav Links List
    const renderNavLinksList = () => {
        const container = document.getElementById('navLinksAdminList');
        container.innerHTML = appData.navLinks.map((item, idx) => `
            <div class="admin-list-item">
                <div class="item-info-col">
                    <h4 class="admin-item-title">${item.num} ${item.label}</h4>
                    <small class="text-muted">Target anchor or page link: <code>${item.href}</code></small>
                </div>
                <div>
                    <button class="btn btn-outline btn-sm" onclick="editNavLink(${idx})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteNavLink(${idx})">Delete</button>
                </div>
            </div>
        `).join('');
    };

    // -------------------------------------------------------------
    // MODAL DIALOG ENGINE FOR CRUD OPERATIONS
    // -------------------------------------------------------------
    const adminModal = document.getElementById('adminModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalSaveBtn = document.getElementById('modalSaveBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');

    let currentModalAction = null;

    const openModal = (title, formHtml, onSave) => {
        modalTitle.textContent = title;
        modalBody.innerHTML = formHtml;
        currentModalAction = onSave;
        adminModal.style.display = 'flex';
    };

    const closeModal = () => {
        adminModal.style.display = 'none';
        modalBody.innerHTML = '';
        currentModalAction = null;
    };

    modalCloseBtn.addEventListener('click', closeModal);
    modalCancelBtn.addEventListener('click', closeModal);
    modalSaveBtn.addEventListener('click', () => {
        if (typeof currentModalAction === 'function') {
            currentModalAction();
        }
    });

    // --- 1. Portfolio CRUD ---
    window.editProject = (idx) => {
        const item = appData.portfolio[idx];
        openModal("EDIT PORTFOLIO PROJECT", `
            <div class="form-group">
                <label>PROJECT TITLE</label>
                <input type="text" id="m_proj_title" value="${item.title}" class="admin-input">
            </div>
            <div class="form-group">
                <label>CATEGORY FILTER</label>
                <select id="m_proj_cat" class="admin-input">
                    <option value="esports" ${item.category === 'esports' ? 'selected' : ''}>Esports</option>
                    <option value="mascot" ${item.category === 'mascot' ? 'selected' : ''}>Mascots</option>
                    <option value="sports" ${item.category === 'sports' ? 'selected' : ''}>Sports</option>
                    <option value="character" ${item.category === 'character' ? 'selected' : ''}>2D Characters</option>
                </select>
            </div>
            <div class="form-group">
                <label>CATEGORY BADGE LABEL</label>
                <input type="text" id="m_proj_cat_lbl" value="${item.categoryLabel || ''}" class="admin-input" placeholder="ESPORTS LOGO">
            </div>
            <div class="form-group">
                <label>PROJECT SCOPE / DESCRIPTION</label>
                <textarea id="m_proj_desc" class="admin-textarea" rows="3">${item.desc}</textarea>
            </div>
            <div class="form-group">
                <label>IMAGE URL (Paste Gallery URL or upload file)</label>
                <input type="text" id="m_proj_img" value="${item.image}" class="admin-input">
                <input type="file" id="m_proj_img_file" accept="image/*" class="mt-2">
            </div>
        `, () => {
            const title = document.getElementById('m_proj_title').value.trim();
            const cat = document.getElementById('m_proj_cat').value;
            const catLbl = document.getElementById('m_proj_cat_lbl').value.trim() || cat.toUpperCase();
            const desc = document.getElementById('m_proj_desc').value.trim();
            const img = document.getElementById('m_proj_img').value.trim();

            if (!title) return alert("Title required");
            appData.portfolio[idx] = { ...item, title, category: cat, categoryLabel: catLbl, desc, image: img };
            saveData(appData);
            populateAllForms();
            closeModal();
        });

        setTimeout(() => {
            const fileInput = document.getElementById('m_proj_img_file');
            if (fileInput) {
                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (re) => {
                            document.getElementById('m_proj_img').value = re.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }
        }, 100);
    };

    document.getElementById('addProjectBtn').addEventListener('click', () => {
        openModal("ADD NEW PORTFOLIO PROJECT", `
            <div class="form-group">
                <label>PROJECT TITLE</label>
                <input type="text" id="m_proj_title" placeholder="e.g. Phoenix Mascot Logo" class="admin-input">
            </div>
            <div class="form-group">
                <label>CATEGORY FILTER</label>
                <select id="m_proj_cat" class="admin-input">
                    <option value="esports">Esports</option>
                    <option value="mascot" selected>Mascots</option>
                    <option value="sports">Sports</option>
                    <option value="character">2D Characters</option>
                </select>
            </div>
            <div class="form-group">
                <label>CATEGORY BADGE LABEL</label>
                <input type="text" id="m_proj_cat_lbl" placeholder="MASCOT DESIGN" class="admin-input">
            </div>
            <div class="form-group">
                <label>PROJECT SCOPE / DESCRIPTION</label>
                <textarea id="m_proj_desc" placeholder="Describe the design concept, style, vectors..." class="admin-textarea" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label>IMAGE URL (Paste Gallery URL or upload file)</label>
                <input type="text" id="m_proj_img" placeholder="assets/portfolio_mascot_1.png" class="admin-input">
                <input type="file" id="m_proj_img_file" accept="image/*" class="mt-2">
            </div>
        `, () => {
            const title = document.getElementById('m_proj_title').value.trim();
            const cat = document.getElementById('m_proj_cat').value;
            const catLbl = document.getElementById('m_proj_cat_lbl').value.trim() || cat.toUpperCase();
            const desc = document.getElementById('m_proj_desc').value.trim();
            const img = document.getElementById('m_proj_img').value.trim() || 'assets/portfolio_mascot_1.png';

            if (!title) return alert("Title required");
            appData.portfolio.unshift({
                id: "proj_" + Date.now(),
                title,
                category: cat,
                categoryLabel: catLbl,
                desc,
                image: img
            });
            saveData(appData);
            populateAllForms();
            closeModal();
        });

        setTimeout(() => {
            const fileInput = document.getElementById('m_proj_img_file');
            if (fileInput) {
                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (re) => {
                            document.getElementById('m_proj_img').value = re.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }
        }, 100);
    });

    window.deleteProject = (idx) => {
        if (confirm(`Delete project "${appData.portfolio[idx].title}"?`)) {
            appData.portfolio.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    // --- 2. Expertise CRUD ---
    window.editExpertise = (idx) => {
        const item = appData.expertise[idx];
        openModal("EDIT EXPERTISE DOMAIN", `
            <div class="form-group">
                <label>SERVICE TITLE</label>
                <input type="text" id="m_exp_title" value="${item.title}" class="admin-input">
            </div>
            <div class="form-group">
                <label>DESCRIPTION</label>
                <textarea id="m_exp_desc" class="admin-textarea" rows="3">${item.desc}</textarea>
            </div>
        `, () => {
            const title = document.getElementById('m_exp_title').value.trim();
            const desc = document.getElementById('m_exp_desc').value.trim();
            if (!title) return alert("Title required");
            appData.expertise[idx] = { ...item, title, desc };
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    };

    document.getElementById('addExpertiseBtn').addEventListener('click', () => {
        openModal("ADD NEW EXPERTISE DOMAIN", `
            <div class="form-group">
                <label>SERVICE TITLE</label>
                <input type="text" id="m_exp_title" placeholder="e.g. 3D VECTOR MODELING" class="admin-input">
            </div>
            <div class="form-group">
                <label>DESCRIPTION</label>
                <textarea id="m_exp_desc" placeholder="Describe the specialized service..." class="admin-textarea" rows="3"></textarea>
            </div>
        `, () => {
            const title = document.getElementById('m_exp_title').value.trim();
            const desc = document.getElementById('m_exp_desc').value.trim();
            if (!title) return alert("Title required");
            appData.expertise.push({ id: "exp_" + Date.now(), title, desc });
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    });

    window.deleteExpertise = (idx) => {
        if (confirm(`Delete expertise card "${appData.expertise[idx].title}"?`)) {
            appData.expertise.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    // --- 3. Experience CRUD ---
    window.editExperience = (idx) => {
        const item = appData.experience[idx];
        openModal("EDIT WORK EXPERIENCE", `
            <div class="form-group">
                <label>DATE RANGE / BADGE</label>
                <input type="text" id="m_job_badge" value="${item.badge}" class="admin-input">
            </div>
            <div class="form-group">
                <label>JOB TITLE</label>
                <input type="text" id="m_job_title" value="${item.title}" class="admin-input">
            </div>
            <div class="form-group">
                <label>COMPANY</label>
                <input type="text" id="m_job_comp" value="${item.company}" class="admin-input">
            </div>
            <div class="form-group">
                <label>SUMMARY OVERVIEW</label>
                <textarea id="m_job_desc" class="admin-textarea" rows="2">${item.desc}</textarea>
            </div>
            <div class="form-group">
                <label>TASK BULLETS (One per line)</label>
                <textarea id="m_job_tasks" class="admin-textarea" rows="4">${(item.tasks || []).join('\n')}</textarea>
            </div>
        `, () => {
            const badge = document.getElementById('m_job_badge').value.trim();
            const title = document.getElementById('m_job_title').value.trim();
            const company = document.getElementById('m_job_comp').value.trim();
            const desc = document.getElementById('m_job_desc').value.trim();
            const tasks = document.getElementById('m_job_tasks').value.split('\n').map(t => t.trim()).filter(Boolean);

            if (!title) return alert("Title required");
            appData.experience[idx] = { ...item, badge, title, company, desc, tasks };
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    };

    document.getElementById('addExperienceBtn').addEventListener('click', () => {
        openModal("ADD WORK EXPERIENCE TIMELINE", `
            <div class="form-group">
                <label>DATE RANGE / BADGE</label>
                <input type="text" id="m_job_badge" placeholder="2025 - PRESENT" class="admin-input">
            </div>
            <div class="form-group">
                <label>JOB TITLE</label>
                <input type="text" id="m_job_title" placeholder="SENIOR BRANDING DESIGNER" class="admin-input">
            </div>
            <div class="form-group">
                <label>COMPANY</label>
                <input type="text" id="m_job_comp" placeholder="Studio Agency" class="admin-input">
            </div>
            <div class="form-group">
                <label>SUMMARY OVERVIEW</label>
                <textarea id="m_job_desc" placeholder="Leading mascot illustrations and merchandise..." class="admin-textarea" rows="2"></textarea>
            </div>
            <div class="form-group">
                <label>TASK BULLETS (One per line)</label>
                <textarea id="m_job_tasks" placeholder="Task item 1&#10;Task item 2" class="admin-textarea" rows="4"></textarea>
            </div>
        `, () => {
            const badge = document.getElementById('m_job_badge').value.trim() || '2026';
            const title = document.getElementById('m_job_title').value.trim();
            const company = document.getElementById('m_job_comp').value.trim();
            const desc = document.getElementById('m_job_desc').value.trim();
            const tasks = document.getElementById('m_job_tasks').value.split('\n').map(t => t.trim()).filter(Boolean);

            if (!title) return alert("Title required");
            appData.experience.unshift({ id: "job_" + Date.now(), badge, title, company, desc, tasks });
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    });

    window.deleteExperience = (idx) => {
        if (confirm(`Delete timeline item "${appData.experience[idx].title}"?`)) {
            appData.experience.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    // --- 4. Software Stack CRUD ---
    window.editSoftware = (idx) => {
        const item = appData.software[idx];
        openModal("EDIT SOFTWARE TOOL", `
            <div class="form-group">
                <label>SOFTWARE NAME</label>
                <input type="text" id="m_soft_name" value="${item.name}" class="admin-input">
            </div>
            <div class="form-group">
                <label>SHORT CODE (2-3 Chars)</label>
                <input type="text" id="m_soft_code" value="${item.code}" class="admin-input">
            </div>
            <div class="form-group">
                <label>SKILL LEVEL BADGE</label>
                <input type="text" id="m_soft_badge" value="${item.badge}" class="admin-input">
            </div>
            <div class="form-group">
                <label>PROFICIENCY PERCENTAGE (0-100)</label>
                <input type="number" id="m_soft_pct" value="${item.percent}" min="0" max="100" class="admin-input">
            </div>
        `, () => {
            const name = document.getElementById('m_soft_name').value.trim();
            const code = document.getElementById('m_soft_code').value.trim();
            const badge = document.getElementById('m_soft_badge').value.trim();
            const percent = parseInt(document.getElementById('m_soft_pct').value) || 90;

            if (!name) return alert("Name required");
            appData.software[idx] = { ...item, name, code, badge, percent };
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    };

    document.getElementById('addSoftwareBtn').addEventListener('click', () => {
        openModal("ADD SOFTWARE TOOL", `
            <div class="form-group">
                <label>SOFTWARE NAME</label>
                <input type="text" id="m_soft_name" placeholder="e.g. Figma" class="admin-input">
            </div>
            <div class="form-group">
                <label>SHORT CODE</label>
                <input type="text" id="m_soft_code" placeholder="Fg" class="admin-input">
            </div>
            <div class="form-group">
                <label>SKILL LEVEL BADGE</label>
                <input type="text" id="m_soft_badge" placeholder="UI SYSTEM" class="admin-input">
            </div>
            <div class="form-group">
                <label>PROFICIENCY PERCENTAGE (0-100)</label>
                <input type="number" id="m_soft_pct" value="90" min="0" max="100" class="admin-input">
            </div>
        `, () => {
            const name = document.getElementById('m_soft_name').value.trim();
            const code = document.getElementById('m_soft_code').value.trim() || 'App';
            const badge = document.getElementById('m_soft_badge').value.trim() || 'PRO';
            const percent = parseInt(document.getElementById('m_soft_pct').value) || 90;

            if (!name) return alert("Name required");
            appData.software.push({
                id: "soft_" + Date.now(),
                name,
                code,
                brandClass: "ps-brand",
                badge,
                percent
            });
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    });

    window.deleteSoftware = (idx) => {
        if (confirm(`Delete software "${appData.software[idx].name}"?`)) {
            appData.software.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    // --- 5. Nav Links CRUD ---
    window.editNavLink = (idx) => {
        const item = appData.navLinks[idx];
        openModal("EDIT NAVIGATION LINK", `
            <div class="form-group">
                <label>LINK LABEL</label>
                <input type="text" id="m_nav_lbl" value="${item.label}" class="admin-input">
            </div>
            <div class="form-group">
                <label>NUMBER PREFIX</label>
                <input type="text" id="m_nav_num" value="${item.num}" class="admin-input">
            </div>
            <div class="form-group">
                <label>TARGET URL / ANCHOR</label>
                <input type="text" id="m_nav_href" value="${item.href}" class="admin-input">
            </div>
        `, () => {
            const label = document.getElementById('m_nav_lbl').value.trim();
            const num = document.getElementById('m_nav_num').value.trim();
            const href = document.getElementById('m_nav_href').value.trim();

            if (!label) return alert("Label required");
            appData.navLinks[idx] = { ...item, label, num, href };
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    };

    document.getElementById('addNavLinkBtn').addEventListener('click', () => {
        openModal("ADD NAVIGATION LINK / PAGE", `
            <div class="form-group">
                <label>LINK LABEL</label>
                <input type="text" id="m_nav_lbl" placeholder="Services" class="admin-input">
            </div>
            <div class="form-group">
                <label>NUMBER PREFIX</label>
                <input type="text" id="m_nav_num" placeholder="07." class="admin-input">
            </div>
            <div class="form-group">
                <label>TARGET URL / ANCHOR</label>
                <input type="text" id="m_nav_href" placeholder="#services" class="admin-input">
            </div>
        `, () => {
            const label = document.getElementById('m_nav_lbl').value.trim();
            const num = document.getElementById('m_nav_num').value.trim() || '0' + (appData.navLinks.length + 1) + '.';
            const href = document.getElementById('m_nav_href').value.trim() || '#';

            if (!label) return alert("Label required");
            appData.navLinks.push({ id: "nav_" + Date.now(), label, num, href });
            saveData(appData);
            populateAllForms();
            closeModal();
        });
    });

    window.deleteNavLink = (idx) => {
        if (confirm(`Delete nav link "${appData.navLinks[idx].label}"?`)) {
            appData.navLinks.splice(idx, 1);
            saveData(appData);
            populateAllForms();
        }
    };

    // Hero image file upload helper
    const heroImageFile = document.getElementById('heroImageFile');
    if (heroImageFile) {
        heroImageFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (re) => {
                    document.getElementById('heroImage').value = re.target.result;
                    showToast("Hero image converted. Click Save to apply.", "success");
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // -------------------------------------------------------------
    // BACKUP & RESTORE & GITHUB CLOUD SYNC ENGINE
    // -------------------------------------------------------------

    // 1. Download Backup as data.json
    const downloadBackupBtn = document.getElementById('downloadBackupBtn');
    if (downloadBackupBtn) {
        downloadBackupBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `nibras_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast("Complete backup file downloaded to your device!", "success");
        });
    }

    // 2. Restore Backup from File
    const restoreBackupInput = document.getElementById('restoreBackupInput');
    if (restoreBackupInput) {
        restoreBackupInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (re) => {
                    try {
                        const parsed = JSON.parse(re.target.result);
                        if (parsed.hero && parsed.about && parsed.portfolio) {
                            appData = parsed;
                            saveData(appData);
                            populateAllForms();
                            showToast("Backup restored successfully into live portfolio!", "success");
                        } else {
                            showToast("Invalid backup file format.", "error");
                        }
                    } catch (err) {
                        showToast("Error parsing backup JSON file.", "error");
                    }
                };
                reader.readAsText(file);
            }
        });
    }

    // 3. Direct GitHub Repository Push Engine (via GitHub REST API)
    const syncToGithubBtn = document.getElementById('syncToGithubBtn');
    if (syncToGithubBtn) {
        syncToGithubBtn.addEventListener('click', async () => {
            const token = document.getElementById('ghToken').value.trim();
            if (!token) {
                return showToast("Please enter your GitHub Personal Access Token to push directly.", "error");
            }

            syncToGithubBtn.disabled = true;
            syncToGithubBtn.querySelector('span').textContent = "CONNECTING TO GITHUB...";

            try {
                const owner = "waizhussain9955";
                const repo = "nibras-portfolio";
                const path = "data.json";
                const branch = "main";

                // Save token to config
                appData.githubConfig = {
                    repoOwner: owner,
                    repoName: repo,
                    branch: branch,
                    token: token
                };
                localStorage.setItem('nibras_portfolio_data', JSON.stringify(appData));

                // 1. Get current file SHA from GitHub
                const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
                const getRes = await fetch(getFileUrl, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/vnd.github.v3+json"
                    }
                });

                let sha = null;
                if (getRes.ok) {
                    const fileData = await getRes.json();
                    sha = fileData.sha;
                }

                // 2. Encode updated data.json to Base64 (Unicode safe)
                const jsonContent = JSON.stringify(appData, null, 2);
                const encodedContent = btoa(unescape(encodeURIComponent(jsonContent)));

                // 3. Commit and push directly to GitHub
                const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
                const putBody = {
                    message: `CMS Live Update: ${new Date().toLocaleString()}`,
                    content: encodedContent,
                    branch: branch
                };
                if (sha) putBody.sha = sha;

                const putRes = await fetch(putUrl, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/vnd.github.v3+json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(putBody)
                });

                if (putRes.ok) {
                    showToast("🚀 Pushed live directly to your GitHub repo!", "success");
                } else {
                    const errJson = await putRes.json();
                    showToast(`GitHub error: ${errJson.message || 'Check token permissions (repo scope required)'}`, "error");
                }
            } catch (err) {
                showToast(`Sync error: ${err.message}`, "error");
            } finally {
                syncToGithubBtn.disabled = false;
                syncToGithubBtn.querySelector('span').textContent = "🚀 PUSH LIVE TO GITHUB REPO";
            }
        });
    }

    // -------------------------------------------------------------
    // MASTER SAVE ALL & RESET HANDLERS
    // -------------------------------------------------------------
    document.getElementById('saveAllBtn').addEventListener('click', () => {
        // Collect Hero
        appData.hero.badgeText = document.getElementById('heroBadgeText').value.trim();
        appData.hero.badgeCode = document.getElementById('heroBadgeCode').value.trim();
        appData.hero.titleLine1 = document.getElementById('heroTitleLine1').value.trim();
        appData.hero.titleLine2 = document.getElementById('heroTitleLine2').value.trim();
        appData.hero.typewriterRoles = document.getElementById('heroTypewriterRoles').value.split(',').map(s => s.trim()).filter(Boolean);
        appData.hero.introText = document.getElementById('heroIntroText').value.trim();
        appData.hero.stat1 = { num: document.getElementById('heroStat1Num').value.trim(), lbl: document.getElementById('heroStat1Lbl').value.trim() };
        appData.hero.stat2 = { num: document.getElementById('heroStat2Num').value.trim(), lbl: document.getElementById('heroStat2Lbl').value.trim() };
        appData.hero.stat3 = { num: document.getElementById('heroStat3Num').value.trim(), lbl: document.getElementById('heroStat3Lbl').value.trim() };
        appData.hero.featuredImage = document.getElementById('heroImage').value.trim();
        appData.hero.marqueeItems = document.getElementById('marqueeText').value.split(',').map(s => s.trim()).filter(Boolean);

        // Collect About
        appData.about.title = document.getElementById('aboutTitle').value.trim();
        appData.about.quote = document.getElementById('aboutQuote').value.trim();
        appData.about.body = document.getElementById('aboutBody').value.trim();
        appData.about.education = {
            title: document.getElementById('aboutEduTitle').value.trim(),
            sub: document.getElementById('aboutEduSub').value.trim()
        };
        appData.about.languages = {
            title: document.getElementById('aboutLangTitle').value.trim(),
            sub: document.getElementById('aboutLangSub').value.trim()
        };

        // Collect Contact & Footer
        appData.contact.email = document.getElementById('contactEmail').value.trim();
        appData.contact.phone = document.getElementById('contactPhone').value.trim();
        appData.contact.location = document.getElementById('contactLocation').value.trim();
        appData.contact.behance = document.getElementById('contactBehance').value.trim();
        appData.contact.copyright = document.getElementById('footerCopyright').value.trim();
        appData.contact.credit = document.getElementById('footerCredit').value.trim();

        // Collect GitHub token if provided
        const ghTokenVal = document.getElementById('ghToken').value.trim();
        if (!appData.githubConfig) appData.githubConfig = defaultData.githubConfig;
        appData.githubConfig.token = ghTokenVal;

        saveData(appData);
        populateAllForms();
    });

    document.getElementById('resetDefaultsBtn').addEventListener('click', () => {
        if (confirm("Reset ALL data back to default template content?")) {
            localStorage.setItem('nibras_portfolio_data', JSON.stringify(defaultData));
            appData = JSON.parse(JSON.stringify(defaultData));
            populateAllForms();
            showToast("Portfolio reset to default successfully.", "success");
        }
    });

    // Change Password & Security
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newEmail = document.getElementById('adminEmailInput').value.trim();
            const currPass = document.getElementById('adminCurrentPass').value.trim();
            const newPass = document.getElementById('adminNewPass').value.trim();
            const confirmPass = document.getElementById('adminConfirmPass').value.trim();

            if (currPass !== appData.auth.password) {
                return showToast("Current password does not match.", "error");
            }
            if (newPass !== confirmPass) {
                return showToast("New passwords do not match.", "error");
            }
            if (newPass.length < 6) {
                return showToast("Password must be at least 6 characters.", "error");
            }

            appData.auth.email = newEmail;
            appData.auth.password = newPass;
            saveData(appData);

            document.getElementById('adminCurrentPass').value = '';
            document.getElementById('adminNewPass').value = '';
            document.getElementById('adminConfirmPass').value = '';

            showToast("Admin credentials updated successfully!", "success");
        });
    }

    // Initial check
    checkAuthSession();
});
