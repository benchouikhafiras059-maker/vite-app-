import './style.css'

// ==========================================
// FACTION DATA — Tennis Archetypes
// Design Intent by Firas | AI 201 Spring 2026
// ==========================================

// BASE_URL resolves to '/vite-app-/' in production and '/' in dev
const BASE = import.meta.env.BASE_URL

const FACTIONS = [
  {
    id: 'baseliner',
    number: '01',
    name: 'BASELINER',
    role: 'Consistency / Control',
    subtitle: 'Control · Precision',
    playerName: 'NOVAK DJOKOVIC',
    playerLabel: 'The System Player',
    desc: 'No player has weaponized the baseline like Djokovic. Relentless consistency, surgical precision, and an unbreakable mental game define his dominance.',
    achievements: [
      '24 Grand Slam titles',
      '420+ weeks at World No. 1',
      'Career Golden Slam complete',
    ],
    stats: [
      { label: 'CONTROL',   value: 92 },
      { label: 'PRECISION', value: 88 },
      { label: 'ENDURANCE', value: 95 },
    ],
    primary: '#0D1824',
    accent: '#4EC9E1',
    secondary: '#1E2A38',
    img: `${BASE}baseliner.jpg`,
    imgPos: '60% 20%',
  },
  {
    id: 'aggressor',
    number: '02',
    name: 'AGGRESSOR',
    role: 'Power / Risk',
    subtitle: 'Power · Dominance',
    playerName: 'CARLOS ALCARAZ',
    playerLabel: 'The Force of Nature',
    desc: 'Alcaraz attacks from every position — explosive forehands, net rushes, and blistering serves that end points before opponents can reset.',
    achievements: [
      '4 Grand Slam titles by age 21',
      'Youngest World No. 1 in ATP history',
      'Back-to-back Wimbledon champion',
    ],
    stats: [
      { label: 'POWER',    value: 97 },
      { label: 'RISK',     value: 85 },
      { label: 'VELOCITY', value: 91 },
    ],
    primary: '#1E0808',
    accent: '#FF2D2D',
    secondary: '#3A0D0D',
    img: `${BASE}aggressor.avif`,
    imgPos: '65% 15%',
  },
  {
    id: 'defender',
    number: '03',
    name: 'DEFENDER',
    role: 'Speed / Endurance',
    subtitle: 'Speed · Stamina',
    playerName: 'ANDY MURRAY',
    playerLabel: 'The Indestructible',
    desc: 'Murray turned defense into art. His ability to retrieve the impossible and redirect pace made him the most complete defensive player of the modern era.',
    achievements: [
      '3 Grand Slam titles',
      '2× Olympic gold medalist',
      'Returned from career-ending hip surgery',
    ],
    stats: [
      { label: 'SPEED',      value: 94 },
      { label: 'STAMINA',    value: 96 },
      { label: 'RESILIENCE', value: 89 },
    ],
    primary: '#081A10',
    accent: '#39FF6E',
    secondary: '#0F2A1D',
    img: `${BASE}defender.jpg`,
    imgPos: '55% 18%',
  },
  {
    id: 'playmaker',
    number: '04',
    name: 'PLAYMAKER',
    role: 'Strategy / Creativity',
    subtitle: 'Vision · Creativity',
    playerName: 'NICK KYRGIOS',
    playerLabel: 'The Chaos Artist',
    desc: 'Kyrgios plays chess when others play checkers. Underarm serves, tweeners, and no-look volleys — his unpredictability is the weapon itself.',
    achievements: [
      '14 ATP titles',
      'Wimbledon 2022 finalist',
      'Defeated every Top 10 player on tour',
    ],
    stats: [
      { label: 'VISION',     value: 90 },
      { label: 'CREATIVITY', value: 95 },
      { label: 'DECEPTION',  value: 87 },
    ],
    primary: '#100A1A',
    accent: '#A855F7',
    secondary: '#1A102A',
    img: `${BASE}playmaker.jpg`,
    imgPos: '58% 15%',
  },
]

// ==========================================
// RENDER
// ==========================================
const app = document.getElementById('app')

app.innerHTML = `
  <div class="screen">

    <div class="scanlines" aria-hidden="true"></div>

    <header class="header">
      <span class="header__left"></span>
      <span class="header__center">CHOOSE YOUR PLAYSTYLE</span>
      <span class="header__right">SELECT TO DEPLOY</span>
    </header>

    <div class="grid" id="grid">
      <!-- One-time idle cue sweep that plays after panels load -->
      <div class="intro__sweep" aria-hidden="true"></div>
      ${FACTIONS.map(f => `
        <div
          class="faction"
          data-id="${f.id}"
          role="button"
          tabindex="0"
          aria-label="Select ${f.name} archetype"
          style="
            --primary:    ${f.primary};
            --accent:     ${f.accent};
            --secondary:  ${f.secondary};
            --img-pos:    ${f.imgPos};
            --img-size:   ${f.imgSize || 'cover'};
          "
        >
          <!-- IMAGE: fades in and zooms on hover -->
          <div
            class="faction__image"
            style="background-image: url('${f.img}')"
            aria-hidden="true"
          ></div>

          <!-- Dark gradient overlay so text stays readable over image -->
          <div class="faction__overlay" aria-hidden="true"></div>

          <!-- Accent radial glow (moves with mouse) -->
          <div class="faction__glow" aria-hidden="true"></div>

          <!-- Subtle default-state color hint -->
          <div class="faction__hint" aria-hidden="true"></div>

          <!-- Top accent line slides in on hover -->
          <div class="faction__line" aria-hidden="true"></div>

          <!-- Corner bracket detail -->
          <div class="faction__bracket" aria-hidden="true"></div>

          <!-- COLLAPSED LABEL — visible when not active -->
          <div class="faction__label" aria-hidden="true">
            <span class="label__number">${f.number}</span>
            <span class="label__name">${f.name}</span>
            <span class="label__subtitle">${f.subtitle}</span>
          </div>

          <!-- EXPANDED CONTENT — visible when active -->
          <div class="faction__content">
            <div class="content__meta">
              <span class="content__number">${f.number}</span>
              <span class="content__divider" aria-hidden="true">—</span>
              <span class="content__role">${f.role}</span>
            </div>

            <h2 class="content__name">${f.name}</h2>

            <p class="content__subtitle">${f.subtitle}</p>

            <!-- Player identity -->
            <div class="content__player">
              <span class="player__name">${f.playerName}</span>
              <span class="player__sep" aria-hidden="true">·</span>
              <span class="player__label">${f.playerLabel}</span>
            </div>

            <p class="content__desc">${f.desc}</p>

            <!-- Key achievements -->
            <ul class="content__achievements">
              ${f.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>

            <!-- Performance profile — animates on hover -->
            <div class="content__stats">
              ${f.stats.map((s, i) => `
                <div class="stat-row" style="--delay: ${i * 80}ms">
                  <span class="stat-row__label">${s.label}</span>
                  <div class="stat-row__track">
                    <div class="stat-row__fill" data-value="${s.value}"></div>
                  </div>
                  <span class="stat-row__value"></span>
                </div>
              `).join('')}
            </div>

            <button class="content__select" data-faction="${f.id}">
              <span>SELECT ARCHETYPE</span>
              <span class="select__arrow" aria-hidden="true">→</span>
            </button>
          </div>

        </div>
      `).join('')}
    </div>

    <footer class="footer">
      <p class="footer__quote">"Every point tells you who you are. Choose the game that matches the player inside."</p>
    </footer>

    <!-- Archetype locked overlay -->
    <div class="confirm" id="confirm" aria-modal="true" role="dialog" aria-hidden="true">
      <div class="confirm__inner">
        <div class="confirm__label">ARCHETYPE LOCKED</div>
        <div class="confirm__name" id="confirm-name"></div>
        <div class="confirm__line" id="confirm-line"></div>
        <div class="confirm__role" id="confirm-role"></div>
        <button class="confirm__reset" id="confirm-reset">← CHANGE SELECTION</button>
      </div>
    </div>

  </div>
`

// ==========================================
// INTERACTION — hover expand / collapse
// Sets data-active on grid to drive CSS
// grid-template-columns transition
// ==========================================
const grid   = document.getElementById('grid')
const panels = grid.querySelectorAll('.faction')

panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    grid.dataset.active = panel.dataset.id
    panels.forEach(p => {
      p.classList.toggle('is-active',   p === panel)
      p.classList.toggle('is-inactive', p !== panel)
    })
    animateStats(panel)
    panels.forEach(p => { if (p !== panel) resetStats(p) })
  })
})

grid.addEventListener('mouseleave', () => {
  delete grid.dataset.active
  panels.forEach(p => {
    p.classList.remove('is-active', 'is-inactive')
    resetStats(p)
  })
})

// ==========================================
// INTERACTION — mouse parallax
// Glow and name track cursor inside active
// panel for a subtle depth / lighting effect
// ==========================================
panels.forEach(panel => {
  panel.addEventListener('mousemove', e => {
    if (!panel.classList.contains('is-active')) return

    const rect = panel.getBoundingClientRect()
    const xPct = (e.clientX - rect.left)  / rect.width  - 0.5
    const yPct = (e.clientY - rect.top)   / rect.height - 0.5

    panel.querySelector('.faction__glow').style.transform =
      `translate(${xPct * 30}px, ${yPct * 30}px)`
    panel.querySelector('.content__name').style.transform =
      `translate(${xPct * 8}px, ${yPct * 8}px)`
  })

  panel.addEventListener('mouseleave', () => {
    panel.querySelector('.faction__glow').style.transform = ''
    panel.querySelector('.content__name').style.transform  = ''
  })
})

// ==========================================
// INTERACTION — select archetype
// ==========================================
const confirm      = document.getElementById('confirm')
const confirmName  = document.getElementById('confirm-name')
const confirmRole  = document.getElementById('confirm-role')
const confirmLine  = document.getElementById('confirm-line')
const confirmReset = document.getElementById('confirm-reset')

const confirmInner = confirm.querySelector('.confirm__inner')

grid.querySelectorAll('.content__select').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation()
    const f = FACTIONS.find(f => f.id === btn.dataset.faction)

    confirmName.textContent      = f.name
    confirmName.style.color      = f.accent
    confirmLine.style.background = f.accent
    confirmRole.textContent      = f.role

    confirm.classList.add('is-visible')
    confirm.setAttribute('aria-hidden', 'false')

    // Reset + replay entrance animations on every open
    confirmInner.classList.remove('is-entering')
    void confirmInner.offsetWidth // force reflow so animation restarts
    confirmInner.classList.add('is-entering')
  })
})

confirmReset.addEventListener('click', () => {
  confirm.classList.remove('is-visible')
  confirm.setAttribute('aria-hidden', 'true')
  confirmInner.classList.remove('is-entering')
})

// ==========================================
// STAT ANIMATION — triggers on hover
// Bars fill 0 → value when faction goes active.
// Resets to 0 when faction becomes inactive.
// ==========================================

function animateStats(panel) {
  const fills  = panel.querySelectorAll('.stat-row__fill')
  const labels = panel.querySelectorAll('.stat-row__value')
  fills.forEach((fill, i) => {
    const val = parseInt(fill.dataset.value)
    // Stagger each row slightly after the panel starts expanding
    setTimeout(() => {
      fill.style.width = val + '%'
      countUp(labels[i], val, 720)
    }, i * 80 + 120)
  })
}

function resetStats(panel) {
  panel.querySelectorAll('.stat-row__fill').forEach(f => f.style.width = '0%')
  panel.querySelectorAll('.stat-row__value').forEach(v => v.textContent = '')
}

// Ease-out cubic counter: 0 → end over duration ms
function countUp(el, end, duration) {
  const t0 = performance.now()
  ;(function step(now) {
    const p = Math.min((now - t0) / duration, 1)
    const e = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(end * e) + '%'
    if (p < 1) requestAnimationFrame(step)
  })(t0)
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && confirm.classList.contains('is-visible')) {
    confirm.classList.remove('is-visible')
    confirm.setAttribute('aria-hidden', 'true')
  }
})
