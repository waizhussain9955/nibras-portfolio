document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. Sticky Navigation Header ---
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- 2. Mobile Navigation Toggle ---
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Intersection Observer for Scroll Reveals ---
  const revealElements = document.querySelectorAll('.fade-in');
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 4. Active Link Highlight on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNavLink = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNavLink);

  // --- 5. Project Filtering System ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- 6. Dynamic Case Studies Data with Inline SVGs ---
  const caseStudyData = {
    cleanin: {
      title: 'Cleanin Mascot Branding',
      subtitle: 'A playful mascot design and corporate branding layout package.',
      image: 'assets/cleanin.jpg',
      meta: {
        role: 'Mascot & Brand Designer',
        client: 'Cleanin Services LLC',
        timeline: '3 Weeks',
        outcomes: 'Logo package deployed across entire vehicle fleet'
      },
      content: `
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            Concept & Drawing
          </h3>
          <p>For Cleanin, the goal was to create a friendly, trustworthy character that instantly represents cleanliness and professionalism. I illustrated a cheerful maintenance professional holding a squeegee with high-impact color outlines.</p>
        </div>
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
            Color Palette & Typography
          </h3>
          <p>We designed the brand identity using a crisp system: <strong>Light Blue (#58C8FD)</strong>, <strong>Green (#69BB45)</strong>, and <strong>Yellow (#FFD806)</strong>. We leveraged the playful font family <strong>Baloo</strong> for bold headings to match the mascot style.</p>
        </div>
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            Identity Mockups
          </h3>
          <p>Designed multiple vectors and mockups demonstrating brand scale: clean outlines printed on company T-shirts, branding wrappers for corporate delivery vans, business cards, and large highway sign structures.</p>
        </div>
      `
    },
    chipo: {
      title: 'Chipo Food Boxes',
      subtitle: 'Playful packaging layouts designed with cartoon characters.',
      image: 'assets/chipo.jpg',
      meta: {
        role: 'Lead Packaging Illustrator',
        client: 'White Ribbon Pure Foods',
        timeline: '4 Weeks',
        outcomes: '7 custom characters designed'
      },
      content: `
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            Cartoon Characters
          </h3>
          <p>Designed a custom series of animal characters to make the cereal boxes highly appealing to child demographics. The illustrations featured expressive characters: a raccoon, tiger, monkey, mouse, squirrel, bear, and cat in dynamic poses.</p>
        </div>
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            Packaging Outlines
          </h3>
          <p>Established full visual guidelines for rectangular box foldings. Developed distinct packaging colors (Red, Green, Blue) to represent different cereal flavors, maintaining unified font hierarchies.</p>
        </div>
      `
    },
    safety: {
      title: 'Safety Campaign Branding',
      subtitle: 'Complete industrial safety identity designed for Shan campaigns.',
      image: 'assets/safety.jpg',
      meta: {
        role: 'Brand Identity Architect',
        client: 'Shan Industrial Groups',
        timeline: '1 Month',
        outcomes: 'Deployed across 3 active factory sites'
      },
      content: `
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Logo Design Concept
          </h3>
          <p>Developed "Safety Mujh Se" visual assets to drive safety compliance awareness. Focused on strong geometries, incorporating safety helmet graphics and bold protective lines.</p>
        </div>
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><path d="M19 11l-8-8-8 8v10h16V11z"></path></svg>
            Color Palette & Fonts
          </h3>
          <p>Strictly utilized high-contrast compliance parameters: <strong>Safety Yellow (#F2D300)</strong>, <strong>Industrial Red (#E20300)</strong>, and <strong>White (#FFFFFF)</strong>. Applied the clean geometric font <strong>Acumin Variable</strong> to secure visibility.</p>
        </div>
        <div class="modal-section">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px; vertical-align:middle;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            Worksite Collaterals
          </h3>
          <p>Created real-world mockups representing warning banners on scaffolding, helmet decals, shipping containers, business cards, and mobile app layouts.</p>
        </div>
      `
    }
  };

  // --- 7. Modal Drawers Controls ---
  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openModal(projectId) {
    const data = caseStudyData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.title}" class="modal-header-img">
      <h2 class="modal-title">${data.title}</h2>
      <p style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: var(--space-2); font-weight: 500;">${data.subtitle}</p>
      
      <div class="modal-meta-grid">
        <div class="meta-item">
          <label>My Role</label>
          <span>${data.meta.role}</span>
        </div>
        <div class="meta-item">
          <label>Client</label>
          <span>${data.meta.client}</span>
        </div>
        <div class="meta-item">
          <label>Timeline</label>
          <span>${data.meta.timeline}</span>
        </div>
        <div class="meta-item">
          <label>KPI Outcome</label>
          <span>${data.meta.outcomes}</span>
        </div>
      </div>
      
      ${data.content}
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 8. Contact Form Simulation ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const submitBtnSpan = submitBtn.querySelector('span');
      const originalText = submitBtnSpan ? submitBtnSpan.textContent : 'Send Message';

      submitBtn.disabled = true;
      if (submitBtnSpan) submitBtnSpan.textContent = 'Transmitting...';
      formFeedback.style.display = 'none';

      setTimeout(() => {
        submitBtn.disabled = false;
        if (submitBtnSpan) submitBtnSpan.textContent = originalText;
        
        formFeedback.textContent = "Thank you! Your project brief has been sent successfully. Nibras will respond within 24 hours.";
        formFeedback.className = 'form-feedback success';
        formFeedback.style.display = 'block';

        contactForm.reset();

        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 5000);
      }, 1400);
    });
  }

  // --- 9. Magnetic Button Micro-Interaction (Desktop only) ---
  if (window.innerWidth > 768) {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }
});
