document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Custom Neon Cursor Animation, Stardust Trail & Click Ripples
    const cursorDot = document.getElementById('cursorDot');
    const cursorCircle = document.getElementById('cursorCircle');
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (cursorDot && cursorCircle && isDesktopPointer) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let circleX = mouseX;
        let circleY = mouseY;
        let lastTrailTime = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

            // Spawn Stardust particles on cursor move (throttled)
            const now = Date.now();
            if (now - lastTrailTime > 40) {
                lastTrailTime = now;
                const trail = document.createElement('div');
                trail.className = 'cursor-trail-dot';
                trail.style.left = `${mouseX}px`;
                trail.style.top = `${mouseY}px`;
                document.body.appendChild(trail);

                setTimeout(() => {
                    trail.remove();
                }, 500);
            }
        });

        const animateCursor = () => {
            circleX += (mouseX - circleX) * 0.2;
            circleY += (mouseY - circleY) * 0.2;

            cursorCircle.style.left = `${circleX}px`;
            cursorCircle.style.top = `${circleY}px`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Cursor Hover Magnification Effect
        const interactiveElements = document.querySelectorAll('a, button, .btn, .portfolio-item, .expertise-card, .filter-tab, input, textarea, select, .border-beam-card, .contact-card-pulse');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorCircle.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorCircle.classList.remove('active');
            });
        });

        // Floating geometric parallax on mouse move
        const geoElements = document.querySelectorAll('.floating-geo');
        window.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = (e.clientX - centerX) / centerX;
            const deltaY = (e.clientY - centerY) / centerY;

            geoElements.forEach((geo, i) => {
                const speed = (i + 1) * 12;
                geo.style.transform = `translate(${deltaX * speed}px, ${deltaY * speed}px)`;
            });
        });
    }

    // Click Multi-layered Spark Burst & Ripple Effect
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        // Spawn 6 radial sparks
        for (let i = 0; i < 6; i++) {
            const spark = document.createElement('div');
            spark.className = 'cursor-trail-dot';
            spark.style.left = `${e.clientX}px`;
            spark.style.top = `${e.clientY}px`;
            spark.style.transition = 'all 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)';
            document.body.appendChild(spark);

            const angle = (i / 6) * Math.PI * 2;
            const distance = 35 + Math.random() * 25;
            
            setTimeout(() => {
                spark.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
                spark.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                spark.remove();
            }, 550);
        }

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
                this.vx = (Math.random() - 0.5) * 0.95;
                this.vy = (Math.random() - 0.5) * 0.95;
                this.radius = Math.random() * 2.4 + 1;
                this.color = Math.random() > 0.4 ? 'rgba(168, 85, 247, ' : 'rgba(217, 70, 239, ';
                this.alpha = Math.random() * 0.55 + 0.25;
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
                ctx.shadowBlur = 14;
                ctx.shadowColor = '#a855f7';
                ctx.fill();
            }
        }

        const numParticles = Math.min(Math.floor(width / 20), 55);
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

                    if (dist < 135) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 * (1 - dist / 135)})`;
                        ctx.lineWidth = 0.9;
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

            const rotateX = ((y - centerY) / centerY) * -9;
            const rotateY = ((x - centerX) / centerX) * 9;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
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

            btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 5. Sticky Navigation Header & Scroll Laser Progress Bar & Back to Top Button
    const header = document.getElementById('mainHeader');
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const progressRingCircle = document.getElementById('progressRingCircle');
    const circumference = 2 * Math.PI * 21; // ~131.95

    const handleScrollEvents = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = Math.min((scrollTop / scrollHeight) * 100, 100);

        // Header Background
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Top Reading Laser Bar
        if (scrollProgressBar) {
            scrollProgressBar.style.width = `${scrollPercentage}%`;
        }

        // Back to Top Button & Circle Progress
        if (backToTopBtn && progressRingCircle) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
                const offset = circumference - (scrollPercentage / 100) * circumference;
                progressRingCircle.style.strokeDashoffset = offset;
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    };
    window.addEventListener('scroll', handleScrollEvents);
    handleScrollEvents();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

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

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            if (isNaN(target)) return;
            let count = 0;
            const duration = 1600;
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
        }, { threshold: 0.2 });

        softwareObserver.observe(softwareSection);
    }

    // 10. Scroll Reveal Animations (Staggered Children)
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
