/* ===== NEURO SPORTS CENTRE — script.js ===== */

/* ─────────────────────────────────────────────
   1. PAGE NAVIGATION
───────────────────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('open');
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.classList.remove('active');
  setTimeout(initAOS, 120);
}

/* ─────────────────────────────────────────────
   2. MOBILE MENU
───────────────────────────────────────────── */
function toggleMenu() {
  const navLinks  = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

/* ─────────────────────────────────────────────
   3. HERO SLIDESHOW
───────────────────────────────────────────── */
const heroSlideData = [
  { tag: 'Physiotherapy & Fitness' },
  { tag: 'Neuro Rehabilitation'    },
  { tag: 'Manual Therapy'          },
  { tag: 'Sports Recovery'         },
];

let currentHeroSlide = 0;
let heroSlideTimer   = null;

function goHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  const tag    = document.getElementById('slideConditionTag');

  if (!slides.length) return;

  slides[currentHeroSlide].classList.remove('active');
  dots[currentHeroSlide].classList.remove('active');

  currentHeroSlide = index;

  slides[currentHeroSlide].classList.add('active');
  dots[currentHeroSlide].classList.add('active');

  if (tag && heroSlideData[currentHeroSlide]) {
    tag.textContent = heroSlideData[currentHeroSlide].tag;
  }

  resetHeroTimer();
}

function nextHeroSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  goHeroSlide((currentHeroSlide + 1) % slides.length);
}

function resetHeroTimer() {
  clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(nextHeroSlide, 4500);
}

/* ─────────────────────────────────────────────
   4. BOOKING FORM → WhatsApp
───────────────────────────────────────────── */
function submitBooking() {
  const name    = (document.getElementById('f-name')    || {}).value || '';
  const phone   = (document.getElementById('f-phone')   || {}).value || '';
  const service = (document.getElementById('f-service') || {}).value || '';
  const slot    = (document.getElementById('f-slot')    || {}).value || '';
  const age     = (document.getElementById('f-age')     || {}).value || '';
  const desc    = (document.getElementById('f-desc')    || {}).value || '';

  if (!name.trim() || !phone.trim() || !service) {
    showToast('Please fill in Name, Phone & Service ✍️');
    return;
  }

  const msg =
    `Hello Neuro Sports Centre!%0A` +
    `I'd like to book an appointment.%0A%0A` +
    `👤 Name: ${encodeURIComponent(name.trim())}%0A` +
    `📞 Phone: ${encodeURIComponent(phone.trim())}%0A` +
    (age ? `🎂 Age: ${encodeURIComponent(age)}%0A` : '') +
    `💊 Service: ${encodeURIComponent(service)}%0A` +
    (slot ? `⏰ Slot: ${encodeURIComponent(slot)}%0A` : '') +
    (desc.trim() ? `📝 Condition: ${encodeURIComponent(desc.trim())}` : '');

  window.open(`https://wa.me/919429554422?text=${msg}`, '_blank');
  showToast("Booking sent via WhatsApp! We'll confirm shortly ✅");
}

/* ─────────────────────────────────────────────
   5. TOAST NOTIFICATION
───────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

/* ─────────────────────────────────────────────
   6. FAB GROUP (floating action buttons)
───────────────────────────────────────────── */
function toggleFab() {
  const group   = document.getElementById('fabGroup');
  const trigger = document.getElementById('fabTrigger');
  const open    = document.querySelector('.fab-icon-open');
  const close   = document.querySelector('.fab-icon-close');

  group.classList.toggle('open');
  trigger.classList.toggle('open');

  if (group.classList.contains('open')) {
    if (open)  open.style.display  = 'none';
    if (close) close.style.display = 'flex';
  } else {
    if (open)  open.style.display  = '';
    if (close) close.style.display = 'none';
  }
}

/* ─────────────────────────────────────────────
   7. CHATBOT
───────────────────────────────────────────── */
const clinicKnowledge = {
  services: [
    "💪 Physiotherapy – pain relief, manual therapy, electrotherapy, post-surgical rehab",
    "🏋️ Fitness Training – personal training, group classes, senior fitness (60+), weight management",
    "🧠 Neuro Rehabilitation – stroke, Parkinson's, spinal cord injury, cerebral palsy",
    "🏃 Sports Rehabilitation – ACL, ligament injuries, athlete conditioning, return-to-sport",
    "👴 Geriatric Care – balance training, falls prevention, mobility improvement for seniors",
    "👶 Paediatric Physio – developmental delays, scoliosis, childhood sports injuries",
  ],
  hours:    "Monday to Saturday: 8:00 AM – 8:00 PM",
  location: "G-2, Geetsudha Apartment, Opposite Prakash School, Bodakdev, Sandesh Press Road, Satellite, Ahmedabad – 380015",
  phone:    "+91 94295 54422",
  doctor:   "Dr. Ruchit Shah (MPT) — 10+ years of clinical experience, founder of Neuro Sports Centre, specialist in neurological physiotherapy and sports medicine, and a marathon runner himself.",
  team:     "15+ specialised professionals including physiotherapists, fitness trainers, neuro rehab specialists, sports rehab experts, and geriatric care providers.",
  instagram:"@neurosports.in",
  gmaps:    "https://maps.app.goo.gl/ybymUuzAA5N2d6wX8",
  booking:  "You can book by calling/WhatsApp at +91 94295 54422, or use the Book Appointment button on this website.",
};

function getBotReply(input) {
  const q = input.toLowerCase();

  if (/service|offer|treat|speciali|do you|what|condition/.test(q)) {
    return `We offer a full range of services at Neuro Sports Centre:\n\n${clinicKnowledge.services.join('\n')}\n\nWould you like details on any specific service?`;
  }
  if (/hour|time|open|close|timing|schedule|when/.test(q)) {
    return `🕐 Our clinic is open:\n${clinicKnowledge.hours}\n\nCall or WhatsApp us at ${clinicKnowledge.phone} to confirm availability.`;
  }
  if (/locat|address|where|map|direction|find|bodakdev|satellite|ahmedabad/.test(q)) {
    return `📍 You can find us at:\n${clinicKnowledge.location}\n\nView on Google Maps → ${clinicKnowledge.gmaps}`;
  }
  if (/phone|call|number|contact|whatsapp|reach/.test(q)) {
    return `📞 Call or WhatsApp us at: ${clinicKnowledge.phone}\n\nWe respond quickly during clinic hours (Mon–Sat, 8 AM – 8 PM).`;
  }
  if (/doctor|dr|ruchit|shah|founder|physio.*who|who.*physio/.test(q)) {
    return `👨‍⚕️ ${clinicKnowledge.doctor}\n\nHis personal experience as a marathon runner gives him a unique understanding of sports injuries and athlete recovery.`;
  }
  if (/team|staff|professional|specialist|how many/.test(q)) {
    return `👥 ${clinicKnowledge.team}\n\nEvery professional is specialised in their domain to deliver the best outcomes for you.`;
  }
  if (/book|appointment|slot|reserv|schedule|visit/.test(q)) {
    return `📅 ${clinicKnowledge.booking}\n\nOr tap the 📅 Book Now button on any page for our quick appointment form!`;
  }
  if (/price|cost|fee|charge|rate|how much/.test(q)) {
    return `💰 Our consultation fees vary by service. Please call or WhatsApp us at ${clinicKnowledge.phone} for current pricing and package details. We offer personalised plans for every patient.`;
  }
  if (/instagram|social|follow/.test(q)) {
    return `📸 Follow us on Instagram: ${clinicKnowledge.instagram}\nWe share tips, exercises, success stories, and clinic updates there.`;
  }
  if (/stroke|neuro|parkinson|cerebral palsy|cp|spinal|paralys/.test(q)) {
    return `🧠 Yes! We have dedicated Neuro Rehabilitation specialists for:\n• Stroke rehabilitation\n• Parkinson's disease\n• Spinal cord injury rehab\n• Cerebral Palsy (CP)\n\nOur team creates personalised programmes for each neurological condition. Would you like to book a consultation?`;
  }
  if (/sport|athlete|acl|ligament|run|marathon|cricket|football|knee/.test(q)) {
    return `🏃 Our Sports Rehabilitation team handles:\n• ACL & ligament injuries\n• Running & overuse injuries\n• Athlete conditioning & return-to-sport\n• Cricket, football, and all sports injuries\n\nDr. Ruchit Shah is a marathon runner himself — so he truly understands athletes!`;
  }
  if (/senior|elder|old|age|60|geriatric|balance|fall/.test(q)) {
    return `👴 We have a dedicated Senior Fitness & Geriatric Care programme:\n• Balance training & falls prevention\n• Gentle strength exercises\n• Mobility improvement\n• Arthritis & joint pain management\n\nSafe, supervised, and tailored for 60+ patients.`;
  }
  if (/back|neck|spine|disc|sciatica|shoulder|frozen|posture/.test(q)) {
    return `💆 We treat all musculoskeletal conditions including:\n• Back & neck pain\n• Disc herniation / sciatica\n• Frozen shoulder\n• Postural correction\n\nOur physiotherapists use evidence-based manual therapy + exercise for lasting relief.`;
  }
  if (/child|kid|paediatric|pediatric|baby|infant|school|cerebral/.test(q)) {
    return `👶 Yes, we offer Paediatric Physiotherapy for:\n• Developmental delays\n• Scoliosis\n• Cerebral Palsy\n• Childhood sports injuries\n\nOur team is experienced, gentle, and family-focused.`;
  }
  if (/hi|hello|hey|good morning|good afternoon|good evening|namaste/.test(q)) {
    return `👋 Hello! Welcome to Neuro Sports Centre, Ahmedabad.\n\nI can help you with information about our services, timings, location, appointments, and more.\n\nWhat would you like to know?`;
  }
  if (/thank|thanks|great|awesome|helpful|perfect/.test(q)) {
    return `😊 You're welcome! We're always here to help. For any further queries, feel free to WhatsApp us at +91 94295 54422.\n\nLooking forward to serving you at Neuro Sports Centre! 🏃‍♂️`;
  }

  return `I'm happy to help! Here are some things I can assist with:\n\n• 🏥 Our services & conditions treated\n• 📍 Location & directions\n• 🕐 Clinic timings\n• 📞 Contact & booking\n• 👨‍⚕️ About Dr. Ruchit Shah\n• 💰 Pricing queries\n\nOr WhatsApp us directly at +91 94295 54422 for instant help!`;
}

function toggleChat() {
  const win    = document.getElementById('chatbotWindow');
  const badge  = document.getElementById('chatBadge');
  if (!win) return;
  win.classList.toggle('open');
  if (badge) badge.style.display = 'none';
  if (win.classList.contains('open')) {
    setTimeout(() => {
      const input = document.getElementById('chatInput');
      if (input) input.focus();
    }, 300);
  }
}

function addChatMessage(text, sender) {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  const msg = document.createElement('div');
  msg.className = `chat-msg ${sender}`;
  // support newlines
  msg.innerHTML = text.replace(/\n/g, '<br>');
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function showTypingIndicator() {
  const box = document.getElementById('chatMessages');
  if (!box) return null;
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.id = 'typingIndicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  box.appendChild(typing);
  box.scrollTop = box.scrollHeight;
  return typing;
}

function sendChat() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  addChatMessage(text, 'user');

  // Hide quick buttons after first user message
  const quickBtns = document.getElementById('quickBtns');
  if (quickBtns) quickBtns.style.display = 'none';

  const typing = showTypingIndicator();
  setTimeout(() => {
    if (typing) typing.remove();
    addChatMessage(getBotReply(text), 'bot');
  }, 800 + Math.random() * 600);
}

function sendQuick(text) {
  const input = document.getElementById('chatInput');
  if (input) input.value = text;
  sendChat();
}

/* ─────────────────────────────────────────────
   8. TESTIMONIAL READ MORE / LESS
───────────────────────────────────────────── */
function toggleReview(btn) {
  const card  = btn.closest('.testi-card');
  const pElem = card.querySelector('.testi-text');
  if (!pElem) return;

  const full  = pElem.dataset.full;
  const short = pElem.dataset.short;

  if (btn.textContent === 'Read more') {
    pElem.innerHTML = '\u201C' + full + '\u201D';
    btn.textContent = 'Show less';
  } else {
    pElem.innerHTML = '\u201C' + short + '\u2026\u201D';
    btn.textContent = 'Read more';
  }
}

/* ─────────────────────────────────────────────
   9. COUNTER ANIMATION (dynamic stats section)
───────────────────────────────────────────── */
const statConfig = [
  { id: 'stat-patients', target: 5000, suffix: '+' },
  { id: 'stat-team',     target: 15,   suffix: '+'  },
  { id: 'stat-exp',      target: 10,   suffix: '+'  },
  { id: 'stat-reviews',  target: 20,   suffix: '+'  },
];

function animateDsCounters() {
  statConfig.forEach(({ id, target, suffix }) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.animated) return;
    el.dataset.animated = 'true';
    let start = null;
    const duration = 1800;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// Also supports old-style counters used in other sections
function animateCounters() {
  document.querySelectorAll('.stat-n, .qbs-n, .qsf-n, .sb-num, .fb-num, .ds-num').forEach(el => {
    const text = el.textContent;
    const num  = parseInt(text.replace(/\D/g, ''));
    if (!num || el.dataset.animated) return;
    el.dataset.animated = 'true';
    const suffix   = text.replace(/[\d]/g, '');
    let start      = null;
    const duration = 1800;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * num) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ─────────────────────────────────────────────
   10. AOS — Animate On Scroll
───────────────────────────────────────────── */
function initAOS() {
  checkAOS();
  // Always animate hero elements immediately
  document.querySelectorAll('.hero-left, .hero-right').forEach(el => {
    setTimeout(() => el.classList.add('aos-animate'), 100);
  });
}

function checkAOS() {
  const elements = document.querySelectorAll('.page.active [data-aos]');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('aos-animate');
    }
  });
}

/* ─────────────────────────────────────────────
   11. NAVBAR SCROLL SHADOW
───────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 30
      ? '0 4px 30px rgba(26,58,92,.15)'
      : '0 2px 20px rgba(26,58,92,.08)';
  }
  checkAOS();
  checkStatsVisible();
}, { passive: true });

/* ─────────────────────────────────────────────
   12. CURSOR GLOW
───────────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  // Hide on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    glow.style.display = 'none';
    return;
  }
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ─────────────────────────────────────────────
   13. RIPPLE EFFECT on primary buttons
───────────────────────────────────────────── */
function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-primary, .btn-book, .booking-submit-btn, .hero-btn-primary');
    if (!btn) return;
    const ripple = document.createElement('span');
    const rect   = btn.getBoundingClientRect();
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      background:rgba(255,255,255,.3);
      width:10px; height:10px;
      animation:rippleAnim .6s ease-out forwards;
      left:${e.clientX - rect.left - 5}px;
      top:${e.clientY - rect.top - 5}px;
      pointer-events:none;
    `;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      0%   { transform:scale(0); opacity:1; }
      100% { transform:scale(30); opacity:0; }
    }
    @keyframes scrollAnim {
      0%   { opacity:1; transform:translateY(0); }
      100% { opacity:0; transform:translateY(12px); }
    }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   14. CARD HOVER TILT
───────────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.testi-card, .mva-card, .benefit-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width  - 0.5) *  8;
      const y    = ((e.clientY - rect.top)  / rect.height - 0.5) * -8;
      card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────────
   15. SERVICE CARD OVERLAY on hover
───────────────────────────────────────────── */
function initServiceCards() {
  document.querySelectorAll('.sh-card').forEach(card => {
    const overlay = card.querySelector('.shc-overlay');
    if (!overlay) return;
    card.addEventListener('mouseenter', () => {
      overlay.style.background =
        'linear-gradient(to top,rgba(10,20,40,.92) 0%,rgba(10,20,40,.5) 50%,rgba(10,20,40,.3) 100%)';
    });
    card.addEventListener('mouseleave', () => {
      overlay.style.background = '';
    });
  });
}

/* ─────────────────────────────────────────────
   16. PAIN PHOTO CARD hover scale
───────────────────────────────────────────── */
function initPainCards() {
  document.querySelectorAll('.pain-photo-grid > div').forEach(card => {
    const img = card.querySelector('img');
    if (!img) return;
    card.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.06)'; });
    card.addEventListener('mouseleave', () => { img.style.transform = ''; });
  });
}

/* ─────────────────────────────────────────────
   17. CHECK if stats section is visible
───────────────────────────────────────────── */
let statsAnimated = false;
function checkStatsVisible() {
  if (statsAnimated) return;
  const section = document.querySelector('.dynamic-stats-section');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80) {
    statsAnimated = true;
    animateDsCounters();
  }
}

/* ─────────────────────────────────────────────
   18. INTERSECTION OBSERVER for process steps
───────────────────────────────────────────── */
function initProcessSteps() {
  const steps = document.querySelectorAll('.tp-step');
  if (!steps.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  steps.forEach((step, i) => {
    step.style.opacity    = '0';
    step.style.transform  = 'translateY(40px)';
    step.style.transition = `opacity .5s ease ${i * 0.15}s, transform .5s ease ${i * 0.15}s`;
    observer.observe(step);
  });
}

/* ─────────────────────────────────────────────
   19. DROPDOWN KEYBOARD ACCESSIBILITY
───────────────────────────────────────────── */
function initDropdownA11y() {
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.addEventListener('keydown', e => {
      const menu = item.querySelector('.dropdown-menu');
      if (!menu) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menu.style.visibility = 'visible';
        menu.style.opacity    = '1';
        menu.style.transform  = 'translateY(0)';
      }
      if (e.key === 'Escape') {
        menu.style.visibility = '';
        menu.style.opacity    = '';
        menu.style.transform  = '';
      }
    });
  });
}

/* ─────────────────────────────────────────────
   20. CHATBOT — Enter key support
───────────────────────────────────────────── */
function initChatInput() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendChat();
  });
}

/* ─────────────────────────────────────────────
   21. SMOOTH SCROLL for anchor links
───────────────────────────────────────────── */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

/* ─────────────────────────────────────────────
   22. INITIALISE EVERYTHING on DOM ready
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Hero slideshow
  resetHeroTimer();

  // Animations & interactions
  initAOS();
  initCursorGlow();
  initRipple();
  initCardTilt();
  initServiceCards();
  initPainCards();
  initProcessSteps();
  initDropdownA11y();
  initChatInput();

  // Hero elements animate in
  setTimeout(() => {
    document.querySelectorAll('.hero-left, .hero-right').forEach(el => {
      el.classList.add('aos-animate');
    });
  }, 200);

  // Scroll listener for AOS + counters
  document.addEventListener('scroll', checkAOS,         { passive: true });
  document.addEventListener('scroll', checkStatsVisible, { passive: true });

  // Initial counter check (in case section is already in view)
  setTimeout(checkStatsVisible, 600);
});
