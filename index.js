document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Custom Neon Cursor Animation & Click Ripples
    const cursorDot = document.getElementById('cursorDot');
    const cursorCircle = document.getElementById('cursorCircle');

    if (cursorDot && cursorCircle && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let circleX = mouseX;
        let circleY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const animateCursor = () => {
            circleX += (mouseX - circleX) * 0.18;
            circleY += (mouseY - circleY) * 0.18;

            cursorCircle.style.left = `${circleX}px`;
            cursorCircle.style.top = `${circleY}px`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Cursor Hover Magnification Effect
        const interactiveElements = document.querySelectorAll('a, button, .btn, .portfolio-item, .expertise-card, .filter-tab, input, textarea, select, .mascot-companion-inner');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorCircle.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorCircle.classList.remove('active');
            });
        });
    }

    // Click Ripple Effect
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Dynamic Typewriter Subtitle Role Switcher
    const typewriterText = document.getElementById('typewriterText');
    if (typewriterText) {
        const roles = [
            "CREATIVE GRAPHIC DESIGNER",
            "MASCOT LOGO ARTIST",
            "ESPORTS BRANDING EXPERT",
            "2D CHARACTER ILLUSTRATOR",
            "SPORTS ICONOGRAPHY DESIGNER"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        const typeRole = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typewriterText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 35;
            } else {
                typewriterText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 85;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2200; // Pause at end of full title
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 350;
            }

            setTimeout(typeRole, typeSpeed);
        };

        // Start typing after initial entrance sequence
        setTimeout(typeRole, 1400);
    }

    // -------------------------------------------------------------
    // SCROLL-LINKED MASCOT ANIMATION (Inspired by hxnix-gold.vercel.app)
    // -------------------------------------------------------------
    const scrollMascot = document.getElementById('scrollMascotCompanion');
    const mascotInner = document.getElementById('mascotInner');
    const mascotStatusText = document.getElementById('mascotStatusText');
    const heroMascotCard = document.getElementById('heroMascotCard');

    if (scrollMascot && mascotInner && mascotStatusText) {
        let currentX = window.innerWidth - 200;
        let currentY = 160;
        let targetX = currentX;
        let targetY = currentY;
        let currentRotZ = 0;
        let targetRotZ = 0;
        let currentRotY = 0;
        let targetRotY = 0;
        let currentScale = 1;
        let targetScale = 1;

        const sections = [
            { id: 'about', status: '// DESIGN PHILOSOPHY', side: 'right', yRatio: 0.35, rotZ: -8, rotY: 15, scale: 1 },
            { id: 'expertise', status: '// EXPLORING SKILLS', side: 'left', yRatio: 0.45, rotZ: 8, rotY: -15, scale: 1.05 },
            { id: 'portfolio', status: '// SELECTED WORKS', side: 'right', yRatio: 0.3, rotZ: -5, rotY: 10, scale: 1.1 },
            { id: 'experience', status: '// WORK HISTORY', side: 'left', yRatio: 0.45, rotZ: 6, rotY: -12, scale: 1 },
            { id: 'softwares', status: '// CREATIVE TOOLKIT', side: 'right', yRatio: 0.4, rotZ: -6, rotY: 12, scale: 1 },
            { id: 'contact', status: "// LET'S COLLABORATE!", side: 'right', yRatio: 0.55, rotZ: -4, rotY: 8, scale: 1.08 }
        ];

        const updateMascotTargets = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const windowW = window.innerWidth;
            const windowH = window.innerHeight;

            // Only activate floating companion after leaving initial Hero view
            if (scrollY < 180 && windowW > 768) {
                scrollMascot.classList.remove('active');
                if (heroMascotCard) {
                    heroMascotCard.style.opacity = '1';
                    heroMascotCard.style.transform = `perspective(1000px) translateY(${scrollY * 0.25}px) rotateY(${scrollY * 0.05}deg)`;
                }
                return;
            }

            scrollMascot.classList.add('active');

            if (windowW <= 768) {
                // Mobile layout is managed cleanly by CSS bottom-right fixed anchor
                return;
            }

            // Identify which section is currently in view
            let activeSection = sections[0];
            for (let i = sections.length - 1; i >= 0; i--) {
                const secEl = document.getElementById(sections[i].id);
                if (secEl) {
                    const rect = secEl.getBoundingClientRect();
                    if (rect.top <= windowH * 0.55) {
                        activeSection = sections[i];
                        break;
                    }
                }
            }

            // Calculate precise coordinates based on section
            if (activeSection.side === 'left') {
                targetX = Math.max(35, windowW * 0.04);
            } else {
                targetX = windowW - Math.min(180, windowW * 0.14);
            }

            // Continuous smooth scroll wave offset
            const waveY = Math.sin(scrollY * 0.005) * 20;
            targetY = (windowH * activeSection.yRatio) + waveY;
            targetRotZ = activeSection.rotZ + Math.sin(scrollY * 0.008) * 4;
            targetRotY = activeSection.rotY;
            targetScale = activeSection.scale;

            if (mascotStatusText.textContent !== activeSection.status) {
                mascotStatusText.textContent = activeSection.status;
            }
        };

        window.addEventListener('scroll', updateMascotTargets, { passive: true });
        window.addEventListener('resize', updateMascotTargets);

        // Smooth physics render loop
        const animateMascotPhysics = () => {
            if (window.innerWidth > 768 && scrollMascot.classList.contains('active')) {
                currentX += (targetX - currentX) * 0.075;
                currentY += (targetY - currentY) * 0.075;
                currentRotZ += (targetRotZ - currentRotZ) * 0.075;
                currentRotY += (targetRotY - currentRotY) * 0.075;
                currentScale += (targetScale - currentScale) * 0.075;

                scrollMascot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                mascotInner.style.transform = `perspective(800px) rotateZ(${currentRotZ}deg) rotateY(${currentRotY}deg) scale(${currentScale})`;
            }

            requestAnimationFrame(animateMascotPhysics);
        };
        animateMascotPhysics();

        // Interactive Click / Tap on Mascot
        mascotInner.addEventListener('click', (e) => {
            e.stopPropagation();
            mascotInner.classList.remove('spin-shockwave');
            void mascotInner.offsetWidth; // Trigger reflow
            mascotInner.classList.add('spin-shockwave');

            const statusOld = mascotStatusText.textContent;
            mascotStatusText.textContent = '// BOOM! ⚡ CYBER POWER';

            // Spawn radial shockwave
            const shockwave = document.createElement('div');
            shockwave.className = 'click-ripple';
            shockwave.style.left = `${currentX + 70}px`;
            shockwave.style.top = `${currentY + 70}px`;
            shockwave.style.borderColor = '#ffffff';
            document.body.appendChild(shockwave);

            setTimeout(() => {
                shockwave.remove();
            }, 600);

            setTimeout(() => {
                mascotStatusText.textContent = statusOld;
            }, 2500);
        });
    }

    // 1. Interactive Cyber Particle Canvas Background (Purple Theme)
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
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? 'rgba(168, 85, 247, ' : 'rgba(115, 7, 148, ';
                this.alpha = Math.random() * 0.5 + 0.2;
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
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#730794';
                ctx.fill();
            }
        }

        const numParticles = Math.min(Math.floor(width / 25), 45);
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

    // 2. Interactive Spotlight Radial Card Effect
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 3. 3D Tilt Card Effect
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
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 4. Interactive Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.magnetic');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 5. Sticky Navigation Header
    const header = document.getElementById('mainHeader');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 6. Mobile Menu Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
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

    // 7. Portfolio Category Filtering
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    void item.offsetWidth;
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    setTimeout(() => {
                        if (!item.classList.contains('show')) {
                            item.style.display = 'none';
                        }
                    }, 350);
                }
            });
        });
    });

    // 8. Lightbox Modal System
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && lightboxClose) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
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
            lightboxModal.classList.remove('open');
            lightboxModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (!lightboxModal.classList.contains('open')) {
                    lightboxImg.src = '';
                }
            }, 300);
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

    // 9. Animated Software Stack Progress Bars & Number Counters
    const softwareSection = document.getElementById('softwares');
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    const counters = document.querySelectorAll('.counter');

    if (softwareSection) {
        const softwareObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressFills.forEach(fill => {
                        const targetWidth = fill.getAttribute('data-progress');
                        fill.style.width = targetWidth;
                    });

                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        let count = 0;
                        const duration = 1500;
                        const stepTime = Math.abs(Math.floor(duration / target));

                        const timer = setInterval(() => {
                            count += 1;
                            counter.textContent = `${count}%`;
                            if (count >= target) {
                                counter.textContent = `${target}%`;
                                clearInterval(timer);
                            }
                        }, stepTime);
                    });

                    softwareObserver.unobserve(softwareSection);
                }
            });
        }, { threshold: 0.2 });

        softwareObserver.observe(softwareSection);
    }

    // 10. Scroll Reveal Animations
    const revealElements = [
        '.about-left', '.about-right',
        '.expertise-card', '.portfolio-item',
        '.timeline-item', '.software-card',
        '.contact-left', '#contactForm'
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => {
        revealObserver.observe(el);
    });

    // 11. Active Link Highlight on Scroll
    const sectionsNav = document.querySelectorAll('section[id]');
    const navMenuLinks = document.querySelectorAll('.nav-link');

    const highlightNavLink = () => {
        let scrollY = window.pageYOffset;
        
        sectionsNav.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navMenuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', highlightNavLink);

    // 12. Contact Form Simulation
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitBtnText = submitBtn.querySelector('span');
            const originalText = submitBtnText.textContent;
            
            const nameInput = document.getElementById('name');
            const clientName = nameInput ? nameInput.value.trim() : 'there';
            
            submitBtn.disabled = true;
            submitBtnText.textContent = 'TRANSMITTING BRIEF...';
            submitBtn.style.opacity = '0.7';
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtnText.textContent = originalText;
                submitBtn.style.opacity = '1';
                
                formFeedback.textContent = `Thanks, ${clientName}! Your design brief has been sent successfully. Nibras will connect with you via email shortly.`;
                formFeedback.className = 'form-feedback success';
                
                contactForm.reset();
                
                setTimeout(() => {
                    formFeedback.style.opacity = '0';
                    setTimeout(() => {
                        formFeedback.textContent = '';
                        formFeedback.style.opacity = '1';
                    }, 500);
                }, 6000);
                
            }, 1800);
        });
    }
});
