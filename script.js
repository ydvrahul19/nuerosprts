/* ===== NEURO SPORTS CENTRE — script.js (Enhanced) ===== */

/* ─────────────────────────────────────────────
   SVG ICON LIBRARY (replaces plain emojis)
───────────────────────────────────────────── */
const ICONS = {
  phone:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  pin:      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  user:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  heart:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  star:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  award:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  brain:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>`,
  zap:      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield:   `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  smile:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  send:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  close:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  money:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  doctor:   `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/><path d="M9 13h6"/><path d="M12 10v6"/></svg>`,
  team:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  run:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="1"/><path d="m7 21 3-6"/><path d="m16 21-3-6-3-4 6-2"/><path d="m5 11 5-1 4 3 4-1"/></svg>`,
};

/* ─────────────────────────────────────────────
   MOTION ENGINE — Framer-inspired spring animations
───────────────────────────────────────────── */
const Motion = {
  /* Spring easing curve */
  springEase: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  smoothEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounceEase: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  /* Animate element with spring physics */
  animate(el, keyframes, options = {}) {
    const { duration = 400, delay = 0, easing = this.springEase, fill = 'forwards' } = options;
    return el.animate(keyframes, { duration, delay, easing, fill });
  },

  /* Staggered entrance for a list of elements */
  stagger(elements, keyframes, options = {}) {
    const staggerDelay = options.staggerDelay || 80;
    elements.forEach((el, i) => {
      this.animate(el, keyframes, { ...options, delay: (options.delay || 0) + i * staggerDelay });
    });
  },

  /* Slide-up fade entrance */
  fadeUp(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateY(28px)' },
      { opacity: 1, transform: 'translateY(0px)' }
    ], { duration: 500, ...options });
  },

  /* Scale-in entrance */
  scaleIn(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'scale(0.85)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 380, ...options });
  },

  /* Slide in from left */
  slideInLeft(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateX(-40px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 480, ...options });
  },

  /* Slide in from right */
  slideInRight(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateX(40px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 480, ...options });
  },

  /* Magnetic hover effect */
  magnetic(el, strength = 0.3) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.4s ' + this.springEase;
      el.style.transform = 'translate(0,0)';
      setTimeout(() => el.style.transition = '', 400);
    });
  }
};

/* ─────────────────────────────────────────────
   PARTICLE SYSTEM — floating background orbs
───────────────────────────────────────────── */
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  canvas.style.cssText = `
    position:fixed; top:0; left:0; width:100%; height:100%;
    pointer-events:none; z-index:0; opacity:0.45;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 28 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 3 + 1.2,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    opacity: Math.random() * 0.5 + 0.1,
    color: Math.random() > 0.5 ? '26,111,181' : '0,137,123',
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
    });

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(26,111,181,${0.08 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

/* ─────────────────────────────────────────────
   FLOATING ORBS — decorative gradient blobs
───────────────────────────────────────────── */
function initFloatingOrbs() {
  const orbData = [
    { size: 340, x: -80, y: 120, color: 'rgba(26,111,181,0.07)', duration: 18 },
    { size: 280, x: '75vw', y: 60, color: 'rgba(0,137,123,0.06)', duration: 22 },
    { size: 200, x: '40vw', y: '60vh', color: 'rgba(33,150,243,0.05)', duration: 15 },
  ];
  const orbContainer = document.createElement('div');
  orbContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
  orbData.forEach((o, i) => {
    const orb = document.createElement('div');
    orb.style.cssText = `
      position:absolute; width:${o.size}px; height:${o.size}px;
      left:${o.x}${typeof o.x === 'number' ? 'px' : ''};
      top:${o.y}${typeof o.y === 'number' ? 'px' : ''};
      background:radial-gradient(circle at 40% 40%, ${o.color}, transparent 70%);
      border-radius:50%; filter:blur(40px);
      animation:orbFloat${i} ${o.duration}s ease-in-out infinite alternate;
    `;
    orbContainer.appendChild(orb);
  });
  document.body.prepend(orbContainer);

  // Inject keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes orbFloat0 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(60px,80px) scale(1.15)} }
    @keyframes orbFloat1 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-50px,60px) scale(1.1)} }
    @keyframes orbFloat2 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(40px,-70px) scale(1.2)} }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   ENHANCED CHATBOT with SVG icons
───────────────────────────────────────────── */
function upgradeChatbotUI() {
  const win = document.getElementById('chatbotWindow');
  if (!win) return;

  // Upgrade the header avatar from emoji to animated SVG icon
  const avatar = win.querySelector('.chatbot-avatar');
  if (avatar) {
    avatar.innerHTML = `<div class="chat-avatar-pulse">${ICONS.run}</div>`;
    avatar.style.cssText = `
      width:42px;height:42px;border-radius:50%;
      background:linear-gradient(135deg,#1a6fb5,#00897B);
      display:flex;align-items:center;justify-content:center;
      color:white;flex-shrink:0;position:relative;overflow:visible;
    `;
  }

  // Upgrade close button
  const closeBtn = win.querySelector('.chatbot-close');
  if (closeBtn) {
    closeBtn.innerHTML = ICONS.close;
    closeBtn.style.cssText = `
      background:rgba(255,255,255,0.15);border:none;color:white;
      width:30px;height:30px;border-radius:50%;display:flex;
      align-items:center;justify-content:center;cursor:pointer;
      transition:all 0.2s;flex-shrink:0;
    `;
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = 'rgba(255,255,255,0.3)';
      closeBtn.style.transform = 'rotate(90deg)';
    });
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = 'rgba(255,255,255,0.15)';
      closeBtn.style.transform = 'rotate(0deg)';
    });
  }

  // Upgrade send button
  const sendBtn = win.querySelector('.chatbot-send');
  if (sendBtn) {
    sendBtn.innerHTML = ICONS.send;
    sendBtn.style.transition = 'all 0.2s';
    sendBtn.addEventListener('mouseenter', () => {
      sendBtn.style.transform = 'scale(1.12) rotate(-15deg)';
    });
    sendBtn.addEventListener('mouseleave', () => {
      sendBtn.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  // Add entrance animation styles
  injectChatStyles();
}

function injectChatStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Chatbot window entrance */
    .chatbot-window {
      transform: scale(0.85) translateY(20px);
      opacity: 0;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                  opacity 0.3s ease !important;
    }
    .chatbot-window.open {
      transform: scale(1) translateY(0) !important;
      opacity: 1 !important;
    }

    /* Message entrance animations */
    .chat-msg {
      animation: msgSlideIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    .chat-msg.user { animation: msgSlideInRight 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
    @keyframes msgSlideIn {
      from { opacity:0; transform:translateX(-16px) scale(0.95); }
      to   { opacity:1; transform:translateX(0) scale(1); }
    }
    @keyframes msgSlideInRight {
      from { opacity:0; transform:translateX(16px) scale(0.95); }
      to   { opacity:1; transform:translateX(0) scale(1); }
    }

    /* Pulse ring on chatbot avatar */
    .chat-avatar-pulse {
      display:flex;align-items:center;justify-content:center;
      width:100%;height:100%;
    }
    .chat-avatar-pulse::before {
      content:''; position:absolute;
      width:52px;height:52px;border-radius:50%;
      border:2px solid rgba(26,111,181,0.4);
      animation:avatarPulse 2s ease-out infinite;
    }
    @keyframes avatarPulse {
      0% { transform:scale(1); opacity:1; }
      100% { transform:scale(1.6); opacity:0; }
    }

    /* Quick buttons motion */
    .quick-btn {
      transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .quick-btn:hover {
      transform: translateY(-3px) scale(1.05) !important;
    }
    .quick-btn:active {
      transform: scale(0.96) !important;
    }

    /* FAB entrance stagger */
    .fab-child {
      transform: scale(0) translateY(10px);
      opacity: 0;
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                  opacity 0.25s ease !important;
    }
    .fab-group.open .fab-child:nth-child(1) {
      transform: scale(1) translateY(0) !important; opacity: 1 !important;
      transition-delay: 0.12s !important;
    }
    .fab-group.open .fab-child:nth-child(2) {
      transform: scale(1) translateY(0) !important; opacity: 1 !important;
      transition-delay: 0.07s !important;
    }
    .fab-group.open .fab-child:nth-child(3) {
      transform: scale(1) translateY(0) !important; opacity: 1 !important;
      transition-delay: 0.02s !important;
    }

    /* FAB trigger spring rotate */
    .fab-trigger {
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .fab-trigger.open {
      transform: rotate(135deg) scale(1.05) !important;
    }

    /* Toast motion */
    .toast {
      transform: translateY(20px) scale(0.92);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1) !important;
      border-radius: 50px !important;
      display: flex !important;
      align-items: center;
      gap: 8px;
    }
    .toast.show {
      transform: translateY(0) scale(1) !important;
      opacity: 1 !important;
    }

    /* Enhanced AOS animations */
    [data-aos] {
      transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    [data-aos="fade-up"] { opacity:0; transform:translateY(32px); }
    [data-aos="fade-left"] { opacity:0; transform:translateX(32px); }
    [data-aos="fade-right"] { opacity:0; transform:translateX(-32px); }
    [data-aos="zoom-in"] { opacity:0; transform:scale(0.88); }
    [data-aos].aos-animate { opacity:1; transform:translate(0) scale(1); }

    /* Navbar entrance */
    #navbar {
      animation: navSlideDown 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes navSlideDown {
      from { transform:translateY(-100%); opacity:0; }
      to   { transform:translateY(0); opacity:1; }
    }

    /* Card hover lift with shadow */
    .testi-card, .mva-card, .benefit-card, .sh-card {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                  box-shadow 0.3s ease !important;
    }

    /* Pulse animation for stat numbers */
    @keyframes statPop {
      0%   { transform:scale(1); }
      50%  { transform:scale(1.15); }
      100% { transform:scale(1); }
    }
    .stat-pop { animation: statPop 0.4s cubic-bezier(0.34,1.56,0.64,1); }

    /* Hero text shimmer */
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .gradient-text {
      background-size: 200% auto !important;
      animation: shimmer 4s linear infinite;
    }

    /* Scroll indicator bounce */
    @keyframes scrollBounce {
      0%,100% { transform:translateY(0); opacity:1; }
      50% { transform:translateY(8px); opacity:0.5; }
    }

    /* Button press feedback */
    .btn-primary:active, .btn-white:active, .btn-ghost:active {
      transform: scale(0.97) !important;
    }

    /* Section entrance wipe */
    .page.active {
      animation: pageEntrance 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both;
    }
    @keyframes pageEntrance {
      from { opacity:0; transform:translateY(12px); }
      to   { opacity:1; transform:translateY(0); }
    }

    /* Footer link hover */
    footer a {
      transition: color 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1) !important;
      display:inline-block;
    }
    footer a:hover { transform:translateX(4px) !important; }

    /* Nav link animated underline */
    .nav-link::after {
      content:'';
      position:absolute; bottom:-2px; left:50%; right:50%;
      height:2px; background:var(--blue);
      border-radius:2px;
      transition: left 0.3s cubic-bezier(0.34,1.56,0.64,1),
                  right 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .nav-link:hover::after, .nav-link.active::after {
      left:0; right:0;
    }
    .nav-link { position:relative; }

    /* Input focus glow */
    input:focus, textarea:focus, select:focus {
      box-shadow: 0 0 0 3px rgba(26,111,181,0.15), 0 2px 8px rgba(0,0,0,0.08) !important;
      border-color: var(--blue) !important;
      transform: translateY(-1px);
      transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
    }

    /* Typing indicator bounce */
    .chat-typing span {
      animation: typingBounce 1.2s ease-in-out infinite;
    }
    .chat-typing span:nth-child(2) { animation-delay: 0.15s; }
    .chat-typing span:nth-child(3) { animation-delay: 0.30s; }
    @keyframes typingBounce {
      0%,60%,100% { transform:translateY(0); }
      30% { transform:translateY(-6px); }
    }

    /* Logo hover spin */
    .nav-logo:hover .nav-logo-img {
      animation: logoSpin 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
    }
    @keyframes logoSpin {
      0% { transform:rotate(0) scale(1); }
      50% { transform:rotate(15deg) scale(1.1); }
      100% { transform:rotate(0) scale(1.05); }
    }

    /* WhatsApp button heartbeat */
    .whatsapp-book-btn, .fab-wa {
      animation: heartbeat 2.5s ease-in-out infinite;
    }
    @keyframes heartbeat {
      0%,100% { box-shadow:0 0 0 0 rgba(37,211,102,0.4); }
      50% { box-shadow:0 0 0 8px rgba(37,211,102,0); }
    }

    /* Ripple animation */
    @keyframes rippleAnim {
      0%   { transform:scale(0); opacity:1; }
      100% { transform:scale(30); opacity:0; }
    }

    /* Scroll animation */
    @keyframes scrollAnim {
      0%   { opacity:1; transform:translateY(0); }
      100% { opacity:0; transform:translateY(12px); }
    }

    /* Star rating twinkle */
    @keyframes starTwinkle {
      0%,100% { transform:scale(1) rotate(0deg); }
      50% { transform:scale(1.2) rotate(10deg); }
    }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   ENHANCED TOAST with icon
───────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  const iconMap = { success: ICONS.check, error: ICONS.close, info: ICONS.activity };
  const colorMap = { success: '#00897B', error: '#e53935', info: '#1a6fb5' };
  t.innerHTML = `
    <span style="display:inline-flex;align-items:center;justify-content:center;
      width:24px;height:24px;border-radius:50%;
      background:${colorMap[type]};color:white;flex-shrink:0;">
      ${iconMap[type] || iconMap.success}
    </span>
    <span>${msg}</span>
  `;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

/* ─────────────────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────────────────── */
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-white, .fab-trigger').forEach(btn => {
    Motion.magnetic(btn, 0.2);
  });
}

/* ─────────────────────────────────────────────
   ENHANCED COUNTER with pop animation
───────────────────────────────────────────── */
function animateDsCounters() {
  const statConfig = [
    { id: 'stat-patients', target: 5000, suffix: '+' },
    { id: 'stat-team',     target: 15,   suffix: '+'  },
    { id: 'stat-exp',      target: 10,   suffix: '+'  },
    { id: 'stat-reviews',  target: 20,   suffix: '+'  },
  ];
  statConfig.forEach(({ id, target, suffix }) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.animated) return;
    el.dataset.animated = 'true';
    let start = null;
    const duration = 2000;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = Math.floor(eased * target);
      el.textContent = value + suffix;
      // Pop effect at key milestones
      if (progress > 0.95 && !el._popped) {
        el._popped = true;
        el.classList.add('stat-pop');
        setTimeout(() => el.classList.remove('stat-pop'), 400);
      }
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

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
   1. PAGE NAVIGATION with motion
───────────────────────────────────────────── */
function showPage(id) {
  closeMenu(); // always close mobile menu when navigating
  const current = document.querySelector('.page.active');
  if (current) {
    // Quick fade-out before switching
    current.style.opacity = '0';
    current.style.transform = 'translateY(-8px)';
    current.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  }

  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.opacity = '';
      p.style.transform = '';
      p.style.transition = '';
    });
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
  }, current ? 180 : 0);
}

/* ─────────────────────────────────────────────
   2. MOBILE MENU
───────────────────────────────────────────── */
function toggleMenu() {
  const navLinks  = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  if (navLinks.classList.contains('open')) {
    const links = navLinks.querySelectorAll('.nav-link, .nav-mobile-book');
    Motion.stagger(Array.from(links), [
      { opacity: 0, transform: 'translateX(-20px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 320, staggerDelay: 55 });
  }
}

function closeMenu() {
  const navLinks  = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks) navLinks.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');
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

  // Animate out current
  const outSlide = slides[currentHeroSlide];
  outSlide.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  outSlide.style.opacity = '0';
  outSlide.style.transform = 'scale(1.05)';

  setTimeout(() => {
    outSlide.classList.remove('active');
    outSlide.style.opacity = '';
    outSlide.style.transform = '';
    outSlide.style.transition = '';

    dots[currentHeroSlide].classList.remove('active');
    currentHeroSlide = index;
    slides[currentHeroSlide].classList.add('active');
    dots[currentHeroSlide].classList.add('active');

    // Animate in with scale
    slides[currentHeroSlide].style.opacity = '0';
    slides[currentHeroSlide].style.transform = 'scale(0.97)';
    slides[currentHeroSlide].style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
    requestAnimationFrame(() => {
      slides[currentHeroSlide].style.opacity = '1';
      slides[currentHeroSlide].style.transform = 'scale(1)';
    });

    if (tag && heroSlideData[currentHeroSlide]) {
      // Animate tag text swap
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(8px)';
      setTimeout(() => {
        tag.textContent = heroSlideData[currentHeroSlide].tag;
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
      }, 150);
    }
  }, 400);

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

  // Shake invalid fields
  if (!name.trim() || !phone.trim() || !service) {
    const fields = [
      !name.trim()  && document.getElementById('f-name'),
      !phone.trim() && document.getElementById('f-phone'),
      !service      && document.getElementById('f-service'),
    ].filter(Boolean);

    fields.forEach(field => {
      Motion.animate(field, [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-8px)' },
        { transform: 'translateX(8px)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(0)' },
      ], { duration: 400, easing: 'ease-in-out' });
      field.style.borderColor = '#e53935';
      setTimeout(() => field.style.borderColor = '', 2000);
    });

    showToast('Please fill in Name, Phone & Service', 'error');
    return;
  }

  const msg =
    `Hello NeuroSports Center!%0A` +
    `I'd like to book an appointment.%0A%0A` +
    `Name: ${encodeURIComponent(name.trim())}%0A` +
    `Phone: ${encodeURIComponent(phone.trim())}%0A` +
    (age ? `Age: ${encodeURIComponent(age)}%0A` : '') +
    `Service: ${encodeURIComponent(service)}%0A` +
    (slot ? `Slot: ${encodeURIComponent(slot)}%0A` : '') +
    (desc.trim() ? `Condition: ${encodeURIComponent(desc.trim())}` : '');

  window.open(`https://wa.me/919429554422?text=${msg}`, '_blank');
  showToast("Booking sent via WhatsApp! We'll confirm shortly", 'success');
}

function sendContactWhatsApp() {
  const name  = (document.getElementById('c-name')  || {}).value || '';
  const phone = (document.getElementById('c-phone') || {}).value || '';
  const email = (document.getElementById('c-email') || {}).value || '';
  const msg   = (document.getElementById('c-msg')   || {}).value || '';

  if (!name.trim() && !phone.trim() && !msg.trim()) {
    showToast('Please fill in at least your name and message', 'error');
    return;
  }

  const text =
    `Hello NeuroSports Center!%0A` +
    `I have an enquiry.%0A%0A` +
    (name.trim()  ? `Name: ${encodeURIComponent(name.trim())}%0A`  : '') +
    (phone.trim() ? `Phone: ${encodeURIComponent(phone.trim())}%0A` : '') +
    (email.trim() ? `Email: ${encodeURIComponent(email.trim())}%0A` : '') +
    (msg.trim()   ? `%0AMessage: ${encodeURIComponent(msg.trim())}` : '');

  window.open(`https://wa.me/919429554422?text=${text}`, '_blank');
  showToast("Opening WhatsApp! We'll reply shortly ✅", 'success');
}

/* ─────────────────────────────────────────────
   6. FAB GROUP with motion
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
   7. CHATBOT with motion
───────────────────────────────────────────── */
const clinicKnowledge = {
  services: [
    "Physiotherapy – pain relief, manual therapy, electrotherapy, post-surgical rehab",
    "Fitness Training – personal training, group classes, senior fitness (60+), weight management",
    "Neuro Rehabilitation – stroke, Parkinson's, spinal cord injury, cerebral palsy",
    "Sports Rehabilitation – ACL, ligament injuries, athlete conditioning, return-to-sport",
    "Geriatric Care – balance training, falls prevention, mobility improvement for seniors",
    "Paediatric Physio – developmental delays, scoliosis, childhood sports injuries",
  ],
  hours:    "Monday to Saturday: 6:15 AM – 8:00 PM | Sunday: 8:00 AM – 12:00 PM\nAppointments (Mon–Fri): 9:00 AM – 12:00 PM & 5:30 PM – 8:00 PM",
  location: "G1,2,3. Ground Floor, Shikhar Apartment, Judges Bungalow Rd, opposite Prestige Towers, Bodakdev, Ahmedabad – 380054, Gujarat",
  phone:    "+91 94295 54422",
  doctor:   "Dr. Ruchit Shah (MPT) — 18+ years of clinical experience, founder of NeuroSports Center, specialist in neurological physiotherapy and sports medicine, and a marathon runner himself.",
  team:     "15+ specialised professionals including physiotherapists, fitness trainers, neuro rehab specialists, sports rehab experts, and geriatric care providers.",
  instagram:"@neurosports.in",
  gmaps:    "https://maps.app.goo.gl/ybymUuzAA5N2d6wX8",
  booking:  "You can book by calling/WhatsApp at +91 94295 54422, or use the Book Appointment button on this website.",
};

/* Build icon badge for chatbot replies */
function iconBadge(svgIcon, color = '#1a6fb5') {
  return `<span style="display:inline-flex;align-items:center;justify-content:center;
    width:20px;height:20px;border-radius:50%;background:${color};
    color:white;flex-shrink:0;vertical-align:middle;margin-right:6px;">${svgIcon}</span>`;
}

function getBotReply(input) {
  const q = input.toLowerCase();

  // Hours — check BEFORE services (avoid "what" false-match)
  if (/\bhour|timing|open|close|schedule|when.*open|clinic.*time|time.*clinic/.test(q)) {
    return `${iconBadge(ICONS.clock,'#00897B')} <strong>Clinic Hours</strong><br>${clinicKnowledge.hours}<br><br>Call/WhatsApp at ${clinicKnowledge.phone} to confirm availability.`;
  }
  // Booking — check before services so "schedule" doesn't mis-fire
  if (/book|appointment|slot|reserv|visit/.test(q)) {
    return `${iconBadge(ICONS.calendar,'#FF8F00')} <strong>Book an Appointment</strong><br>${clinicKnowledge.booking}<br><br>Tap the <strong>Book Now</strong> button on any page for our quick appointment form!`;
  }
  // Services
  if (/service|offer|treat|speciali|condition|physiother|fitness|rehab/.test(q)) {
    const list = clinicKnowledge.services.map(s => `<li style="padding:3px 0;">${s}</li>`).join('');
    return `${iconBadge(ICONS.activity,'#1a6fb5')} <strong>Our Services at NeuroSports Center:</strong><br><ul style="margin:8px 0 8px 16px;">${list}</ul>Would you like details on any specific service?`;
  }
  if (/locat|address|where|map|direction|find|bodakdev|satellite|ahmedabad/.test(q)) {
    return `${iconBadge(ICONS.pin,'#e53935')} <strong>Our Location</strong><br>${clinicKnowledge.location}<br><br><a href="${clinicKnowledge.gmaps}" target="_blank" style="color:#1a6fb5;font-weight:600;">View on Google Maps →</a>`;
  }
  if (/phone|call|number|contact|whatsapp|reach/.test(q)) {
    return `${iconBadge(ICONS.phone,'#1a6fb5')} <strong>Contact Us</strong><br><strong>${clinicKnowledge.phone}</strong><br><br>We respond quickly during clinic hours (Mon–Sat, 6:15 AM – 8 PM | Sun, 8 AM – 12 PM).`;
  }
  if (/doctor|dr\.|ruchit|shah|founder/.test(q)) {
    return `${iconBadge(ICONS.doctor,'#1a6fb5')} <strong>About Dr. Ruchit Shah</strong><br>${clinicKnowledge.doctor}<br><br>His personal experience as a marathon runner gives him a unique understanding of sports injuries and athlete recovery.`;
  }
  if (/team|staff|professional|specialist|how many/.test(q)) {
    return `${iconBadge(ICONS.team,'#00897B')} <strong>Our Team</strong><br>${clinicKnowledge.team}<br><br>Every professional is specialised in their domain to deliver the best outcomes for you.`;
  }
  if (/price|cost|fee|charge|rate|how much/.test(q)) {
    return `${iconBadge(ICONS.money,'#FF8F00')} <strong>Pricing</strong><br>Our consultation fees vary by service. Please call or WhatsApp us at <strong>${clinicKnowledge.phone}</strong> for current pricing and package details. We offer personalised plans for every patient.`;
  }
  if (/instagram|social|follow/.test(q)) {
    return `${iconBadge(ICONS.instagram,'#E1306C')} <strong>Instagram</strong><br>${clinicKnowledge.instagram}<br>We share tips, exercises, success stories, and clinic updates there.`;
  }
  if (/stroke|neuro|parkinson|cerebral palsy|spinal|paralys/.test(q)) {
    return `${iconBadge(ICONS.brain,'#1a6fb5')} <strong>Neuro Rehabilitation</strong><br>Yes! We have dedicated specialists for:<br><ul style="margin:8px 0 8px 16px;"><li>Stroke rehabilitation</li><li>Parkinson's disease</li><li>Spinal cord injury rehab</li><li>Cerebral Palsy (CP)</li></ul>Would you like to book a consultation?`;
  }
  if (/sport|athlete|acl|ligament|run|marathon|cricket|football|knee/.test(q)) {
    return `${iconBadge(ICONS.run,'#00897B')} <strong>Sports Rehabilitation</strong><br>Our Sports Rehab team handles:<br><ul style="margin:8px 0 8px 16px;"><li>ACL & ligament injuries</li><li>Running & overuse injuries</li><li>Athlete conditioning & return-to-sport</li><li>Cricket, football, and all sports injuries</li></ul>Dr. Ruchit Shah is a marathon runner himself!`;
  }
  if (/senior|elder|\bold\b|geriatric|balance|fall/.test(q)) {
    return `${iconBadge(ICONS.heart,'#00897B')} <strong>Senior & Geriatric Care</strong><br>We have a dedicated Senior Fitness programme:<br><ul style="margin:8px 0 8px 16px;"><li>Balance training & falls prevention</li><li>Gentle strength exercises</li><li>Mobility improvement</li><li>Arthritis & joint pain management</li></ul>Safe, supervised, and tailored for 60+ patients.`;
  }
  if (/back|neck|spine|disc|sciatica|shoulder|frozen|posture/.test(q)) {
    return `${iconBadge(ICONS.activity,'#1a6fb5')} <strong>Musculoskeletal Treatment</strong><br>We treat all musculoskeletal conditions including:<br><ul style="margin:8px 0 8px 16px;"><li>Back & neck pain</li><li>Disc herniation / sciatica</li><li>Frozen shoulder</li><li>Postural correction</li></ul>Our physiotherapists use evidence-based manual therapy + exercise for lasting relief.`;
  }
  if (/child|kid|paediatric|pediatric|baby|infant|school/.test(q)) {
    return `${iconBadge(ICONS.heart,'#FF8F00')} <strong>Paediatric Physiotherapy</strong><br>Yes, we offer Paediatric Physio for:<br><ul style="margin:8px 0 8px 16px;"><li>Developmental delays</li><li>Scoliosis</li><li>Cerebral Palsy</li><li>Childhood sports injuries</li></ul>Our team is experienced, gentle, and family-focused.`;
  }
  if (/\bhi\b|hello|hey|good morning|good afternoon|good evening|namaste/.test(q)) {
    return `${iconBadge(ICONS.smile,'#1a6fb5')} <strong>Hello! Welcome to NeuroSports Center.</strong><br><br>I can help you with information about our services, timings, location, appointments, and more. What would you like to know?`;
  }
  if (/thank|thanks|great|awesome|helpful|perfect/.test(q)) {
    return `${iconBadge(ICONS.heart,'#00897B')} You're welcome! We're always here to help. For any further queries, feel free to WhatsApp us at <strong>+91 94295 54422</strong>.<br><br>Looking forward to serving you at NeuroSports Center!`;
  }

  return `${iconBadge(ICONS.zap,'#1a6fb5')} <strong>How can I help?</strong><br><ul style="margin:8px 0 8px 16px;"><li>Our services & conditions treated</li><li>Location & directions</li><li>Clinic timings</li><li>Contact & booking</li><li>About Dr. Ruchit Shah</li><li>Pricing queries</li></ul>Or WhatsApp us at <strong>+91 94295 54422</strong>!`;
}

const CHAT_WELCOME = '👋 Hi! I\'m the virtual assistant for <strong>NeuroSports Center</strong>, Ahmedabad.<br><br>Ask me anything — services, timings, location, Dr. Ruchit, pricing, or conditions we treat!';

function resetChat() {
  const box       = document.getElementById('chatMessages');
  const quickBtns = document.getElementById('quickBtns');
  const input     = document.getElementById('chatInput');
  if (box) {
    box.innerHTML = '';
    const welcome = document.createElement('div');
    welcome.className = 'chat-msg bot';
    welcome.innerHTML = CHAT_WELCOME;
    box.appendChild(welcome);
  }
  if (quickBtns) quickBtns.style.display = '';
  if (input) input.value = '';
}

function toggleChat() {
  const win    = document.getElementById('chatbotWindow');
  const badge2 = document.getElementById('chatBadge2');
  if (!win) return;

  const isOpen = win.classList.contains('open');

  if (isOpen) {
    // Closing — reset for next open
    win.classList.remove('open');
    setTimeout(resetChat, 350); // reset after close animation
  } else {
    // Opening fresh
    resetChat();
    win.classList.add('open');
    if (badge2) badge2.style.display = 'none';
    setTimeout(() => {
      const input = document.getElementById('chatInput');
      if (input) input.focus();
    }, 350);
  }
}

function addChatMessage(html, sender) {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  const msg = document.createElement('div');
  msg.className = `chat-msg ${sender}`;
  msg.innerHTML = html.replace ? html.replace(/\n/g, '<br>') : html;
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

  // Hide quick buttons while waiting for reply
  const quickBtns = document.getElementById('quickBtns');
  if (quickBtns) quickBtns.style.display = 'none';

  addChatMessage(text, 'user');

  const typing = showTypingIndicator();
  setTimeout(() => {
    if (typing) typing.remove();
    addChatMessage(getBotReply(text), 'bot');
    // Show quick buttons again after bot replies
    if (quickBtns) quickBtns.style.display = '';
  }, 800 + Math.random() * 600);
}

function sendQuick(text) {
  // Hide quick buttons immediately on click
  const quickBtns = document.getElementById('quickBtns');
  if (quickBtns) quickBtns.style.display = 'none';

  addChatMessage(text, 'user');

  const typing = showTypingIndicator();
  setTimeout(() => {
    if (typing) typing.remove();
    addChatMessage(getBotReply(text), 'bot');
    // Show quick buttons again after bot replies
    if (quickBtns) quickBtns.style.display = '';
  }, 800 + Math.random() * 600);
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

  // Animate text swap
  pElem.style.opacity = '0';
  pElem.style.transform = 'translateY(4px)';
  pElem.style.transition = 'opacity 0.2s, transform 0.2s';

  setTimeout(() => {
    if (btn.textContent === 'Read more') {
      pElem.innerHTML = '\u201C' + full + '\u201D';
      btn.textContent = 'Show less';
    } else {
      pElem.innerHTML = '\u201C' + short + '\u2026\u201D';
      btn.textContent = 'Read more';
    }
    pElem.style.opacity = '1';
    pElem.style.transform = 'translateY(0)';
  }, 180);
}

/* ─────────────────────────────────────────────
   10. AOS — Animate On Scroll
───────────────────────────────────────────── */
function initAOS() {
  checkAOS();
  document.querySelectorAll('.hero-left, .hero-right').forEach(el => {
    setTimeout(() => el.classList.add('aos-animate'), 100);
  });
}

function checkAOS() {
  const elements = document.querySelectorAll('.page.active [data-aos]');
  elements.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && !el.classList.contains('aos-animate')) {
      // Stagger delay based on position
      const delay = el.dataset.aosDelay || (i % 4) * 60;
      setTimeout(() => el.classList.add('aos-animate'), parseInt(delay));
    }
  });
}

/* ─────────────────────────────────────────────
   11. NAVBAR SCROLL SHADOW + SHRINK
───────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 30) {
      nav.style.boxShadow = '0 4px 30px rgba(26,58,92,.15)';
      nav.style.backdropFilter = 'blur(8px)';
    } else {
      nav.style.boxShadow = '0 2px 20px rgba(26,58,92,.08)';
      nav.style.backdropFilter = '';
    }
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
  if (window.matchMedia('(hover: none)').matches) {
    glow.style.display = 'none';
    return;
  }
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  // Smooth lerp follow
  function lerp(a, b, t) { return a + (b - a) * t; }
  function updateGlow() {
    glowX = lerp(glowX, mouseX, 0.08);
    glowY = lerp(glowY, mouseY, 0.08);
    glow.style.left = glowX + 'px';
    glow.style.top  = glowY + 'px';
    requestAnimationFrame(updateGlow);
  }
  updateGlow();
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
}

/* ─────────────────────────────────────────────
   14. CARD HOVER TILT with spring return
───────────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.testi-card, .mva-card, .benefit-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width  - 0.5) *  10;
      const y    = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
      card.style.transition = 'transform 0.1s ease';
      card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.01)`;
      card.style.boxShadow = '0 20px 50px rgba(26,111,181,0.18)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease';
      card.style.transform = '';
      card.style.boxShadow = '';
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
      overlay.style.transition = 'background 0.4s ease';
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
    img.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    card.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.07)'; });
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
    animateCounters();
  }
}

/* ─────────────────────────────────────────────
   18. INTERSECTION OBSERVER for process steps
───────────────────────────────────────────── */
function initProcessSteps() {
  const steps = document.querySelectorAll('.tp-step');
  if (!steps.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }, i * 120);
      }
    });
  }, { threshold: 0.1 });

  steps.forEach((step, i) => {
    step.style.opacity    = '0';
    step.style.transform  = 'translateY(40px) scale(0.96)';
    step.style.transition = `opacity .5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.12}s, transform .5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.12}s`;
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
   22. SCROLL PROGRESS BAR
───────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  bar.style.cssText = `
    position:fixed; top:0; left:0; height:3px; z-index:9999;
    background:linear-gradient(90deg,#1a6fb5,#00897B,#2196F3);
    border-radius:0 3px 3px 0; width:0%; transition:width 0.1s linear;
    pointer-events:none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   23. INITIALISE EVERYTHING on DOM ready
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Core styles & animations
  injectChatStyles();

  // Background effects
  initFloatingOrbs();
  initParticles();

  // Scroll progress bar
  initScrollProgress();

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

  // Magnetic buttons (desktop only)
  if (!window.matchMedia('(hover: none)').matches) {
    initMagneticButtons();
  }

  // Chatbot UI upgrade
  upgradeChatbotUI();
  resetChat();

  // Hero elements animate in
  setTimeout(() => {
    const heroEls = document.querySelectorAll('.hero-left, .hero-right');
    Motion.stagger(Array.from(heroEls), [
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 600, staggerDelay: 150 });
    heroEls.forEach(el => el.classList.add('aos-animate'));
  }, 200);

  // Scroll listeners
  document.addEventListener('scroll', checkAOS, { passive: true });
  document.addEventListener('scroll', checkStatsVisible, { passive: true });

  // Initial checks
  setTimeout(checkStatsVisible, 600);
});

// FAQ Toggle
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const body = item.querySelector('.faq-body');
  const icon = btn.querySelector('span');
  const isOpen = body.style.display === 'block';

  // Close all other open FAQs in the same container
  const container = item.parentElement;
  container.querySelectorAll('.faq-item').forEach(other => {
    if (other !== item) {
      other.querySelector('.faq-body').style.display = 'none';
      other.querySelector('button span').textContent = '+';
      other.querySelector('button span').style.transform = 'rotate(0deg)';
      other.style.borderColor = '#e2e8f0';
    }
  });

  if (isOpen) {
    body.style.display = 'none';
    icon.textContent = '+';
    icon.style.transform = 'rotate(0deg)';
    item.style.borderColor = '#e2e8f0';
  } else {
    body.style.display = 'block';
    icon.textContent = '×';
    icon.style.transform = 'rotate(0deg)';
    item.style.borderColor = 'var(--green)';
  }
}
