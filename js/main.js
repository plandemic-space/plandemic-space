// ============================================
// PLANDEMIC SPACE — main.js
// ============================================

// Smooth scroll helper (dipanggil dari HTML onclick)
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Navbar shadow saat scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Fade-in section saat masuk viewport (dengan efek stagger per grup)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Grup elemen yang di-stagger bareng (delay bertahap per item dalam grup yang sama)
const staggerGroups = document.querySelectorAll('.svc-grid, .steps, .val-list, .gal-grid');
staggerGroups.forEach(group => {
  const items = group.querySelectorAll(':scope > .svc, :scope > .step, :scope > .val, :scope > .gal-item');
  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
  });
});

document.querySelectorAll('.svc, .step, .val, .tl, .gal-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Tambahkan class visible saat elemen masuk viewport
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});

// Hover tilt 3D ringan di kartu layanan (mengikuti posisi mouse)
const tiltCards = document.querySelectorAll('.svc');
const isTouchDevice = window.matchMedia('(hover: none)').matches;
if (!isTouchDevice) {
  tiltCards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Parallax halus di hero saat scroll pertama
const heroSection = document.getElementById('hero');
const heroInner = heroSection ? heroSection.querySelector('.hero-inner') : null;
if (heroSection && heroInner && !isTouchDevice) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < heroSection.offsetHeight) {
      heroInner.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroInner.style.opacity = `${1 - scrollY / (heroSection.offsetHeight * 1.2)}`;
    }
  });
}

// Tombol WhatsApp melayang — muncul setelah scroll dikit dari hero
const waFloat = document.getElementById('waFloat');
if (waFloat) {
  const revealWaFloat = () => {
    if (window.scrollY > 300) {
      waFloat.classList.add('visible');
    } else {
      waFloat.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', revealWaFloat);
  revealWaFloat();
}
