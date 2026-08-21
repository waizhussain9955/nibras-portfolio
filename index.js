document.addEventListener('DOMContentLoaded', async () => {
    
    // Default Initial Master State
    const defaultData = {
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
                categoryLabel: "MASCOT BADGE",
                title: "Ninja Tiger Esports",
                desc: "Aggressive martial arts tiger mascot logo badge crafted for competitive gaming organizations and merchandise.",
                image: "assets/mascot_badge.png"
            },
            {
                id: "proj_6",
                category: "esports",
                categoryLabel: "WORK COLLAGE",
                title: "Branding Highlights Collage",
                desc: "Collage showcasing vector Mascot, Sports and Esports logos designed at Digital Cuberoot (2023 - 2025).",
                image: "assets/portfolio_page_1.png"
            }
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
            { id: "nav_1", num: "01.", label: "About", href: "index.html#about" },
            { id: "nav_2", num: "02.", label: "Expertise", href: "index.html#expertise" },
            { id: "nav_3", num: "03.", label: "Portfolio", href: "projects.html" },
            { id: "nav_4", num: "04.", label: "Experience", href: "index.html#experience" },
            { id: "nav_5", num: "05.", label: "Stack", href: "index.html#softwares" },
            { id: "nav_6", num: "06.", label: "Contact", href: "index.html#contact" }
        ],
        contact: {
            email: "nibrasansari002@gmail.com",
            phone: "+92 316 1183289",
            location: "Karachi, Pakistan (Available for Global Remote Projects)",
            behance: "https://behance.net/nibrasansari2",
            copyright: "© 2026 Nibras Ansari. All rights reserved.",
            credit: "Handcrafted with Cyber Neon & Interactive Code"
        },
        leads: []
    };

    // Load dynamic data from localStorage or fetch data.json fallback
    const getLiveData = async () => {
        const stored = localStorage.getItem('nibras_portfolio_data');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                // fallback
            }
        }
        try {
            const res = await fetch('data.json?v=' + Date.now());
            if (res.ok) {
                const fetchedData = await res.json();
                localStorage.setItem('nibras_portfolio_data', JSON.stringify(fetchedData));
                return fetchedData;
            }
        } catch (e) {
            // offline fallback
        }
        return defaultData;
    };

    let liveData = await getLiveData();

    // Helper to generate Portfolio Item Card HTML
    const createProjectCardHtml = (item) => `
        <div class="portfolio-item show tilt-card" data-tilt data-category="${item.category}" data-image="${item.image}" data-title="${item.title}" data-desc="${item.desc}">
            <div class="item-inner spotlight-card">
                <div class="holographic-shimmer"></div>
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="item-overlay">
                    <span class="item-category">${item.categoryLabel || item.category.toUpperCase()}</span>
                    <h4 class="item-title">${item.title}</h4>
                    <span class="item-action-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    `;

    // Hydrate Dynamic Portfolio Content from CMS
    const hydrateDynamicDOM = () => {
        // 1. Navigation Links
        const navMenu = document.getElementById('navMenu');
        if (navMenu && liveData.navLinks && liveData.navLinks.length > 0) {
            const isProjectsPage = window.location.pathname.includes('projects.html');
            navMenu.innerHTML = liveData.navLinks.map(n => {
                let targetHref = n.href;
                if (!isProjectsPage && targetHref.startsWith('index.html#')) {
                    targetHref = targetHref.replace('index.html', '');
                }
                const isActive = (isProjectsPage && n.label.toLowerCase() === 'portfolio') ? 'active' : '';
                return `<a href="${targetHref}" class="nav-link ${isActive}"><span class="nav-num">${n.num}</span> ${n.label}</a>`;
            }).join('');
        }

        // 2. Hero Section (Home page)
        if (liveData.hero) {
            const badgeEl = document.querySelector('.hero-badge-tag');
            if (badgeEl) {
                badgeEl.innerHTML = `
                    <span class="live-blink-dot"></span>
                    <span class="badge-text">${liveData.hero.badgeText}</span>
                    <span class="badge-cyber-code">${liveData.hero.badgeCode}</span>
                `;
            }

            const heroTitleEl = document.querySelector('.hero-title');
            if (heroTitleEl) {
                heroTitleEl.innerHTML = `<span>${liveData.hero.titleLine1}</span><br><span>${liveData.hero.titleLine2}</span>`;
            }

            const introEl = document.getElementById('animatedIntro');
            if (introEl) {
                introEl.textContent = liveData.hero.introText;
            }

            const heroImg = document.querySelector('.hero-img');
            if (heroImg && liveData.hero.featuredImage) {
                heroImg.src = liveData.hero.featuredImage;
            }

            // Stats
            const statsBar = document.querySelector('.hero-stats-bar');
            if (statsBar && liveData.hero.stat1) {
                statsBar.innerHTML = `
                    <div class="stat-pill">
                        <span class="stat-num counter" data-target="${parseInt(liveData.hero.stat1.num) || 50}">${liveData.hero.stat1.num}</span>
                        <span class="stat-lbl">${liveData.hero.stat1.lbl}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-pill">
                        <span class="stat-num">${liveData.hero.stat2.num}</span>
                        <span class="stat-lbl">${liveData.hero.stat2.lbl}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-pill">
                        <span class="stat-num">${liveData.hero.stat3.num}</span>
                        <span class="stat-lbl">${liveData.hero.stat3.lbl}</span>
                    </div>
                `;
            }

            // Marquee
            const marqueeTracks = document.querySelectorAll('.marquee-content');
            if (marqueeTracks.length > 0 && liveData.hero.marqueeItems) {
                const marqueeHtml = liveData.hero.marqueeItems.map(m => `<span>${m}</span><span class="marquee-star">✦</span>`).join('');
                marqueeTracks.forEach(track => track.innerHTML = marqueeHtml);
            }
        }

        // 3. About Section
        if (liveData.about) {
            const aboutTitleEl = document.querySelector('.about-title-large');
            if (aboutTitleEl) aboutTitleEl.innerHTML = liveData.about.title;

            const aboutQuoteEl = document.querySelector('.about-lead');
            if (aboutQuoteEl) aboutQuoteEl.textContent = liveData.about.quote;

            const aboutBodyP = document.querySelector('.about-body p');
            if (aboutBodyP) aboutBodyP.innerHTML = liveData.about.body;

            const metaValues = document.querySelectorAll('.about-meta-row .meta-item');
            if (metaValues.length >= 2) {
                metaValues[0].querySelector('.meta-value').textContent = liveData.about.education.title;
                metaValues[0].querySelector('.meta-sub').textContent = liveData.about.education.sub;

                metaValues[1].querySelector('.meta-value').textContent = liveData.about.languages.title;
                metaValues[1].querySelector('.meta-sub').textContent = liveData.about.languages.sub;
            }
        }

        // 4. Expertise Section
        const expertiseGrid = document.querySelector('.expertise-grid');
        if (expertiseGrid && liveData.expertise) {
            expertiseGrid.innerHTML = liveData.expertise.map(exp => `
                <div class="expertise-card spotlight-card tilt-card border-beam-card" data-tilt>
                    <div class="card-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 20.2C9.39 20.2 7.11 18.85 5.8 16.8C5.83 14.81 9.8 13.7 12 13.7C14.19 13.7 18.17 14.81 18.2 16.8C16.89 18.85 14.61 20.2 12 20.2Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h4 class="card-title">${exp.title}</h4>
                    <p class="card-desc">${exp.desc}</p>
                </div>
            `).join('');
        }

        // 5. Portfolio Section (Homepage: Max 6 Projects)
        const portfolioGrid = document.getElementById('portfolioGrid');
        if (portfolioGrid && liveData.portfolio) {
            const frontPageProjects = liveData.portfolio.slice(0, 6);
            portfolioGrid.innerHTML = frontPageProjects.map(item => createProjectCardHtml(item)).join('');
        }

        // 6. Portfolio Archive Page (Full Archive: All Projects)
        const portfolioArchiveGrid = document.getElementById('portfolioArchiveGrid');
        const archiveCountBadge = document.getElementById('archiveCountBadge');
        if (portfolioArchiveGrid && liveData.portfolio) {
            portfolioArchiveGrid.innerHTML = liveData.portfolio.map(item => createProjectCardHtml(item)).join('');
            if (archiveCountBadge) {
                archiveCountBadge.textContent = `${liveData.portfolio.length} PROJECTS`;
            }
        }

        // 7. Experience Section
        const timelineContainer = document.querySelector('.timeline-container');
        if (timelineContainer && liveData.experience) {
            timelineContainer.innerHTML = liveData.experience.map(job => `
                <div class="timeline-item">
                    <div class="timeline-radar-pulse"></div>
                    <div class="timeline-badge glow-pulse">${job.badge}</div>
                    <div class="timeline-content spotlight-card border-beam-card">
                        <div class="timeline-header-block">
                            <h4 class="timeline-title">${job.title}</h4>
                            <h5 class="timeline-company">${job.company}</h5>
                        </div>
                        <p class="timeline-desc">${job.desc}</p>
                        <ul class="timeline-tasks">
                            ${(job.tasks || []).map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // 8. Software Stack Section
        const softwareGrid = document.querySelector('.software-grid');
        if (softwareGrid && liveData.software) {
            softwareGrid.innerHTML = liveData.software.map(soft => `
                <div class="software-card spotlight-card tilt-card border-beam-card" data-tilt>
                    <div class="soft-logo-container ${soft.brandClass || 'ps-brand'}">${soft.code}</div>
                    <div class="soft-details">
                        <div class="soft-title-row">
                            <h4 class="soft-title">${soft.name}</h4>
                            <span class="soft-skill-badge ${soft.isExpert ? 'expert' : ''}">${soft.badge}</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" data-progress="${soft.percent}%">
                                <div class="progress-glow-spark"></div>
                            </div>
                        </div>
                        <span class="soft-percent counter" data-target="${soft.percent}">0%</span>
                    </div>
                </div>
            `).join('');
        }

        // 9. Contact & Footer
        if (liveData.contact) {
            const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
            emailLinks.forEach(el => {
                el.href = `mailto:${liveData.contact.email}`;
                el.textContent = liveData.contact.email;
            });

            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(el => {
                el.href = `tel:${liveData.contact.phone}`;
                el.textContent = liveData.contact.phone;
            });

            const locEl = document.querySelector('.contact-info-list .info-text');
            if (locEl) locEl.textContent = liveData.contact.location;

            const behanceLinks = document.querySelectorAll('a.btn-behance, a.btn-talk-footer');
            behanceLinks.forEach(el => {
                el.href = liveData.contact.behance || 'https://behance.net/nibrasansari2';
            });

            const copyEl = document.querySelector('.footer-copyright');
            if (copyEl) copyEl.textContent = liveData.contact.copyright;

            const creditEl = document.querySelector('.footer-credit');
            if (creditEl) creditEl.textContent = liveData.contact.credit;
        }
    };

    // Run dynamic hydration
    hydrateDynamicDOM();

    // Web Audio API Cyber Synth SFX
    let audioCtx = null;
    const playCyberBlip = (freq = 440, type = 'sine', duration = 0.05) => {
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.4, audioCtx.currentTime + duration);
            
            gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context safely ignored if blocked by browser policy
        }
    };

    // Custom Neon Cursor & Parallax (Desktop Only)
    const cursorDot = document.getElementById('cursorDot');
    const cursorCircle = document.getElementById('cursorCircle');
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (cursorDot && cursorCircle && isDesktopPointer) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let circleX = mouseX;
        let circleY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }, { passive: true });

        const animateCursor = () => {
            circleX += (mouseX - circleX) * 0.22;
            circleY += (mouseY - circleY) * 0.22;

            cursorCircle.style.left = `${circleX}px`;
            cursorCircle.style.top = `${circleY}px`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const attachCursorHover = () => {
            const interactiveElements = document.querySelectorAll('a, .nav-link, button, .btn, .portfolio-item, .expertise-card, .filter-tab, input, textarea, select, .border-beam-card, .contact-card-pulse, .back-nav-btn');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorCircle.classList.add('active');
                });
                el.addEventListener('mouseleave', () => {
                    cursorCircle.classList.remove('active');
                });
            });
        };
        attachCursorHover();

        // Floating geometric parallax on mouse move
        const geoElements = document.querySelectorAll('.floating-geo');
        window.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = (e.clientX - centerX) / centerX;
            const deltaY = (e.clientY - centerY) / centerY;

            geoElements.forEach((geo, i) => {
                const speed = (i + 1) * 8;
                geo.style.transform = `translate3d(${deltaX * speed}px, ${deltaY * speed}px, 0)`;
            });
        }, { passive: true });
    }

    // Click Ripple & Sound Effect
    window.addEventListener('click', (e) => {
        playCyberBlip(580, 'sine', 0.04);

        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });

    // Dynamic Typewriter Subtitle Role Switcher
    const typewriterText = document.getElementById('typewriterText');
    if (typewriterText) {
        const roles = (liveData.hero && liveData.hero.typewriterRoles && liveData.hero.typewriterRoles.length > 0)
            ? liveData.hero.typewriterRoles
            : [
                "CREATIVE GRAPHIC DESIGNER",
                "MASCOT LOGO ARTIST",
                "ESPORTS BRANDING EXPERT",
                "2D CHARACTER ILLUSTRATOR",
                "SPORTS ICONOGRAPHY DESIGNER"
            ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 90;

        const typeRole = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typewriterText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 30;
            } else {
                typewriterText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 80;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 300;
            }

            setTimeout(typeRole, typeSpeed);
        };

        setTimeout(typeRole, 1000);
    }

    // High-Performance Particle Canvas
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let width = canvas.width = canvas.parentElement.offsetWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight;

        window.addEventListener('resize', () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        }, { passive: true });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.7;
                this.vy = (Math.random() - 0.5) * 0.7;
                this.radius = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? 'rgba(168, 85, 247, ' : 'rgba(217, 70, 239, ';
                this.alpha = Math.random() * 0.45 + 0.25;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.fill();
            }
        }

        const numParticles = Math.min(Math.floor(width / 35), 30);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        const renderParticles = () => {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.25 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(renderParticles);
        };
        renderParticles();
    }

    // 3D Tilt Card Effect (Desktop Pointer Only)
    if (isDesktopPointer) {
        const attachTilt = () => {
            const tiltCards = document.querySelectorAll('.tilt-card');
            tiltCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                }, { passive: true });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                });
            });

            const magneticBtns = document.querySelectorAll('.magnetic');
            magneticBtns.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
                }, { passive: true });

                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate3d(0px, 0px, 0)`;
                });
            });
        };
        attachTilt();
    }

    // Sticky Navigation Header & Scroll Progress Laser Bar & Back to Top Button
    const header = document.getElementById('mainHeader');
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const progressRingCircle = document.getElementById('progressRingCircle');
    const circumference = 2 * Math.PI * 21; // ~131.95

    let ticking = false;
    const handleScrollEvents = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = Math.min((scrollTop / scrollHeight) * 100, 100);

        if (header) {
            if (scrollTop > 45) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (scrollProgressBar) {
            scrollProgressBar.style.width = `${scrollPercentage}%`;
        }

        if (backToTopBtn && progressRingCircle) {
            if (scrollTop > 380) {
                backToTopBtn.classList.add('visible');
                const offset = circumference - (scrollPercentage / 100) * circumference;
                progressRingCircle.style.strokeDashoffset = offset;
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScrollEvents);
            ticking = true;
        }
    }, { passive: true });
    handleScrollEvents();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            playCyberBlip(750, 'triangle', 0.06);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile Menu Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            playCyberBlip(480, 'sine', 0.04);
            mobileNavToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('open');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Portfolio Category Filtering & Search (Works on both Home & Archive)
    const filterTabs = document.querySelectorAll('.filter-tab');
    const archiveSearchInput = document.getElementById('archiveSearchInput');

    const setupPortfolioFilter = () => {
        const applyFilters = () => {
            const activeTab = document.querySelector('.filter-tab.active');
            const filterValue = activeTab ? activeTab.getAttribute('data-filter') : 'all';
            const searchTerm = archiveSearchInput ? archiveSearchInput.value.toLowerCase().trim() : '';
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const title = (item.getAttribute('data-title') || '').toLowerCase();
                const desc = (item.getAttribute('data-desc') || '').toLowerCase();

                const matchesCat = (filterValue === 'all' || category === filterValue);
                const matchesSearch = (!searchTerm || title.includes(searchTerm) || desc.includes(searchTerm));

                if (matchesCat && matchesSearch) {
                    item.style.display = 'block';
                    void item.offsetWidth;
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    setTimeout(() => {
                        if (!item.classList.contains('show')) {
                            item.style.display = 'none';
                        }
                    }, 250);
                }
            });
        };

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                playCyberBlip(620, 'sine', 0.04);
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                applyFilters();
            });
        });

        if (archiveSearchInput) {
            archiveSearchInput.addEventListener('input', applyFilters);
        }
    };
    setupPortfolioFilter();

    // Lightbox Modal System
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');

    const setupLightbox = () => {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        if (lightboxModal && lightboxClose) {
            portfolioItems.forEach(item => {
                item.addEventListener('click', () => {
                    playCyberBlip(720, 'sine', 0.05);
                    const imgPath = item.getAttribute('data-image');
                    const titleText = item.getAttribute('data-title');
                    const descText = item.getAttribute('data-desc');

                    lightboxImg.src = imgPath;
                    lightboxImg.alt = titleText;
                    lightboxTitle.textContent = titleText;
                    lightboxDesc.textContent = descText;

                    lightboxModal.classList.add('open');
                    lightboxModal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                });
            });

            lightboxClose.addEventListener('click', () => {
                playCyberBlip(380, 'sine', 0.04);
                lightboxModal.classList.remove('open');
                lightboxModal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                setTimeout(() => {
                    if (!lightboxModal.classList.contains('open')) {
                        lightboxImg.src = '';
                    }
                }, 250);
            });

            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal) {
                    lightboxClose.click();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightboxModal.classList.contains('open')) {
                    lightboxClose.click();
                }
            });
        }
    };
    setupLightbox();

    // Software Stack Progress Bars & Counters
    const softwareSection = document.getElementById('softwares');
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    const counters = document.querySelectorAll('.counter');

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            if (isNaN(target)) return;
            let count = 0;
            const duration = 1400;
            const stepTime = Math.abs(Math.floor(duration / target));

            const timer = setInterval(() => {
                count += 1;
                const isPercent = counter.parentElement && counter.parentElement.classList.contains('soft-details');
                counter.textContent = isPercent ? `${count}%` : `${count}+`;
                if (count >= target) {
                    counter.textContent = isPercent ? `${target}%` : `${target}+`;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    };

    if (softwareSection) {
        const softwareObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressFills.forEach(fill => {
                        const targetWidth = fill.getAttribute('data-progress');
                        fill.style.width = targetWidth;
                    });
                    animateCounters();
                    softwareObserver.unobserve(softwareSection);
                }
            });
        }, { threshold: 0.15 });

        softwareObserver.observe(softwareSection);
    }

    // Scroll Reveal Animations
    const revealElements = [
        '.about-left', '.about-right',
        '.expertise-card', '.portfolio-item',
        '.timeline-item', '.software-card',
        '.contact-left', '#contactForm', '.marquee-strip-container'
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
        });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        revealObserver.observe(el);
    });

    // Active Link Highlight on Scroll (Homepage only)
    const sectionsNav = document.querySelectorAll('section[id]');
    const navMenuLinks = document.querySelectorAll('.nav-link');

    if (sectionsNav.length > 0) {
        const highlightNavLink = () => {
            let scrollY = window.pageYOffset;
            
            sectionsNav.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 120;
                const sectionId = current.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navMenuLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `index.html#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };
        window.addEventListener('scroll', highlightNavLink, { passive: true });
    }

    // Contact Form Submission & Lead Storage for Admin Dashboard
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            playCyberBlip(880, 'sine', 0.08);
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitBtnText = submitBtn.querySelector('span');
            const originalText = submitBtnText.textContent;
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const projectInput = document.getElementById('project-type');
            const messageInput = document.getElementById('message');

            const clientName = nameInput ? nameInput.value.trim() : 'there';
            const clientEmail = emailInput ? emailInput.value.trim() : '';
            const clientProject = projectInput ? projectInput.value : 'general';
            const clientMsg = messageInput ? messageInput.value.trim() : '';
            
            submitBtn.disabled = true;
            submitBtnText.textContent = 'TRANSMITTING BRIEF...';
            submitBtn.style.opacity = '0.7';
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';

            // Store lead into CMS localStorage
            try {
                const stored = localStorage.getItem('nibras_portfolio_data');
                let curData = stored ? JSON.parse(stored) : defaultData;
                if (!curData.leads) curData.leads = [];
                curData.leads.unshift({
                    name: clientName,
                    email: clientEmail,
                    project: clientProject,
                    message: clientMsg,
                    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                });
                localStorage.setItem('nibras_portfolio_data', JSON.stringify(curData));
            } catch (err) {
                console.error("Lead storage error", err);
            }

            setTimeout(() => {
                playCyberBlip(1040, 'triangle', 0.1);
                submitBtn.disabled = false;
                submitBtnText.textContent = originalText;
                submitBtn.style.opacity = '1';
                
                formFeedback.textContent = `Thanks, ${clientName}! Your design brief has been transmitted successfully. Nibras will connect with you via email shortly.`;
                formFeedback.className = 'form-feedback success';
                
                contactForm.reset();
                
                setTimeout(() => {
                    formFeedback.style.opacity = '0';
                    setTimeout(() => {
                        formFeedback.textContent = '';
                        formFeedback.style.opacity = '1';
                    }, 400);
                }, 6000);
                
            }, 1400);
        });
    }
});
