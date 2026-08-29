import { useEffect, useRef, useState } from 'react'

const LINKS = {
  email: 'mailto:ahmedhere734@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ahmedhere-x',
  github: 'https://github.com/ahmedhere-coder',
  calendly: 'https://calendly.com/aujjjksmdmd123/30min',
  cv: '/Ahmed_Nadeem_CV.pdf',
  tradeGithub: 'https://github.com/ahmedhere-coder/TradeMind',
  tradeStory: 'https://lnkd.in/p/dtbtSCHS',
  pybotGithub: 'https://github.com/ahmedhere-coder/CodeAlpha_ChatBot',
  pybotStory: 'https://lnkd.in/p/dPQH73Nz',
  stockGithub: 'https://github.com/ahmedhere-coder/CodeAlpha_StockPortfolioTracker',
  stockStory: 'https://lnkd.in/p/dg2TmeHK',
  mindstack: 'https://mindstack-ai.netlify.app/',
  mindstackLinkedIn: 'https://www.linkedin.com/company/mindstack-tech/'
}

const external = { target: '_blank', rel: 'noopener noreferrer' }

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    down: <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.36 6.8-1.64 6.8-7.2A5.6 5.6 0 0 0 19.3 3.4 5.2 5.2 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.1-.4 3.9 0 3.9 0a5.2 5.2 0 0 0-.2 3.4A5.6 5.6 0 0 0 2.2 7.3c0 5.6 3.5 6.8 6.8 7.2A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4.2-2"/></>,
    linkedin: <><rect x="4" y="9" width="4" height="11"/><rect x="4" y="4" width="4" height="2"/><path d="M12 20V9h4v2c1-1.4 2.4-2.3 4-2 1.9.3 2 2 2 4v7h-4v-6c0-1.4-.3-2-1.4-2-1.6 0-1.8 1.2-1.8 2.7V20z"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll('[data-reveal]')]
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function Cursor() {
  const cursor = useRef(null)
  const glow = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const rc = cursor.current
    const cg = glow.current
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, gx = mx, gy = my, raf

    const onMove = e => { mx = e.clientX; my = e.clientY }
    const onDown = () => rc?.classList.add('is-down')
    const onUp = () => rc?.classList.remove('is-down')
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointerup', onUp)

    const hoverables = [...document.querySelectorAll('a,button,.project-card,.note-card,.focus-card')]
    const enter = () => rc?.classList.add('is-hover')
    const leave = () => rc?.classList.remove('is-hover')
    hoverables.forEach(el => {
      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
    })

    const tick = () => {
      cx += (mx - cx) * 0.3
      cy += (my - cy) * 0.3
      gx += (mx - gx) * 0.1
      gy += (my - gy) * 0.1
      if (rc) rc.style.transform = `translate3d(${cx}px,${cy}px,0)`
      if (cg) cg.style.transform = `translate3d(${gx}px,${gy}px,0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      hoverables.forEach(el => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
      })
    }
  }, [])

  return <><div className="robot-cursor" ref={cursor} aria-hidden="true"><i/><i/><i/><i/></div><div className="cursor-glow" ref={glow} aria-hidden="true"/></>
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav-wrap">
      <nav className="nav-shell" aria-label="Primary">
        <a href="#top" className="brand" onClick={close} aria-label="Home"><span className="brand-mark">AN</span><span className="brand-dot"/></a>
        <div className="desktop-links">
          <a href="#work">Projects</a><a href="#story">Story</a><a href="#notes">Notes</a><a href="#contact">Connect</a>
        </div>
        <a className="nav-cta desktop-cta" href={LINKS.email}>Let’s talk <Icon name="arrow" size={15}/></a>
        <button className="mobile-menu-btn" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#work" onClick={close}>Projects</a><a href="#story" onClick={close}>Story</a><a href="#notes" onClick={close}>Notes</a><a href="#contact" onClick={close}>Connect</a>
        <a className="mobile-schedule" href={LINKS.calendly} {...external}>Schedule a chat <Icon name="calendar" size={16}/></a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero hero-ai" id="top">
      <div className="container ai-hero-stage">
        <div className="ai-copy">
          <div className="availability reveal" data-reveal><span className="pulse-dot"/>Currently exploring internship opportunities</div>
          <h1 className="reveal delay-1" data-reveal>From <span className="outline">concept</span><br/>to code to <span className="accent">system.</span></h1>
          <div className="lede-ghost reveal delay-2" data-reveal>Ideas become useful when they survive the build.</div>
          <figure className="hero-quote reveal delay-2" data-reveal>
            <blockquote>“Genius is 1% inspiration and 99% perspiration.”</blockquote>
            <figcaption>— Thomas Edison</figcaption>
          </figure>
          <div className="hero-actions reveal delay-3" data-reveal>
            <a className="button primary" href="#work">Explore projects <Icon name="down" size={17}/></a>
            <a className="button" href="#story">My approach</a>
            <a className="button text-button" href={LINKS.cv} download>Download CV <Icon name="external" size={15}/></a>
          </div>
          <div className="scroll-hint reveal delay-3" data-reveal><i/>Scroll to meet the builder behind the work</div>
        </div>

        <div className="ai-core-zone reveal delay-2" data-reveal aria-label="Mechanical AI system illustration">
          <div className="ai-core">
            <div className="ai-orbit"><span className="ai-orbit-dot"/></div>
            <div className="ai-orbit o2"><span className="ai-orbit-dot"/></div>
            <div className="ai-fin f1"/><div className="ai-fin f2"/><div className="ai-fin f3"/>
            <div className="ai-mecha"><div className="ai-eye"/></div>
            <div className="ai-signal"><i/><i/><i/></div>
            <div className="ai-core-label">Concept → code → system</div>
          </div>
          <div className="ai-camo-word">SYSTEM</div>
        </div>
      </div>
    </section>
  )
}

function PersonalIntro() {
  return (
    <section className="personal-intro" aria-label="About Ahmed">
      <div className="container personal-grid">
        <div className="personal-photo-stage reveal" data-reveal>
          <div className="ring"/><div className="ring r2"/>
          <figure className="personal-photo"><img src="/assets/ahmed-portrait.jpeg" alt="Ahmed Nadeem" loading="lazy"/></figure>
        </div>
        <div className="personal-copy">
          <div className="kicker reveal" data-reveal><span className="pulse-dot"/>ABOUT AHMED</div>
          <h2 className="hello-big reveal delay-1" data-reveal>Hi, I’m <span>Ahmed.</span></h2>
          <p className="intro-lede reveal delay-2" data-reveal>I’m a Computer Science student who likes turning innovative ideas into things that actually work. I build with Python, automation, APIs, and AI — then test, refine, and keep pushing until the result feels real.</p>
          <div className="intro-mini reveal delay-3" data-reveal>
            <div><small>BUILD</small><b>Practical first versions</b></div>
            <div><small>TEST</small><b>Find what actually breaks</b></div>
            <div><small>IMPROVE</small><b>Make the next version smarter</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story-top">
          <div>
            <div className="kicker reveal" data-reveal><span className="pulse-dot"/>HOW I THINK</div>
            <h2 className="story-title reveal delay-1" data-reveal>Not another portfolio full of <span>buzzwords.</span></h2>
            <p className="story-punch reveal delay-2" data-reveal>A record of what I <strong>built, tested, learned,</strong> and improved.</p>
          </div>
          <div className="story-copy">
            <p className="reveal" data-reveal>I care less about sounding technical and more about making something real. Every project here started as an idea, became a first version, exposed something I had missed, and got better because of it.</p>
            <div className="story-quote reveal delay-1" data-reveal><span aria-hidden="true">“</span><p>The interesting part is not having the idea. It is staying with it long enough to make it work.</p></div>
          </div>
        </div>
        <div className="process reveal delay-2" data-reveal>
          <article><b>01</b><div><strong>Build the first real version</strong><p>Get the idea out of your head and into something you can actually test.</p></div></article><i>→</i>
          <article><b>02</b><div><strong>Find what breaks</strong><p>Look for weak assumptions, missing evidence, awkward UX, and anything that only works on paper.</p></div></article><i>→</i>
          <article><b>03</b><div><strong>Make the next version smarter</strong><p>Use what failed as information instead of hiding it.</p></div></article>
        </div>
      </div>
    </section>
  )
}

function ProjectLinks({ github, story }) {
  return <div className="project-links"><a href={github} {...external}>GitHub <Icon name="github" size={15}/></a>{story && <a href={story} {...external}>Build story <Icon name="linkedin" size={15}/></a>}</div>
}

function Projects() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-head">
          <div><div className="kicker reveal" data-reveal><span className="pulse-dot"/>SELECTED WORK</div><h2 className="reveal delay-1" data-reveal>Three builds.<br/>One company in motion.</h2></div>
          <p className="reveal delay-2" data-reveal>Each piece gets its own space — what it does, what it proves, and where you can inspect the work yourself.</p>
        </div>

        <article className="project-card featured reveal" data-reveal>
          <div className="project-copy">
            <div><span className="project-index">PROJECT / 01</span><h3>TradeMind</h3><p>A trading-research system built around a harder question than “is the model accurate?” — does the prediction still make money after trading costs?</p><div className="facts"><span>5 YEARS BINANCE DATA</span><span>172K+ CANDLES</span><span>52.4% MODEL ACCURACY</span></div></div>
            <ProjectLinks github={LINKS.tradeGithub} story={LINKS.tradeStory}/>
          </div>
          <div className="project-media trade-media"><div className="trade-frame"><img src="/assets/trademind-dashboard.png" alt="TradeMind dashboard" loading="lazy"/></div><span className="media-badge">REAL DASHBOARD</span></div>
        </article>

        <div className="project-pair">
          <article className="project-card compact reveal" data-reveal>
            <div className="project-copy">
              <div><span className="project-index">PROJECT / 02</span><h3>Global Stock Portfolio Tracker</h3><p>A menu-driven Python CLI for US and Pakistani stocks with input validation, holdings management, invested/current value, profit/loss, percentage return, manual price updates, and portfolio summaries.</p><div className="facts"><span>PYTHON</span><span>CLI</span><span>INPUT VALIDATION</span></div></div>
              <ProjectLinks github={LINKS.stockGithub} story={LINKS.stockStory}/>
            </div>
            <div className="mini-media"><div className="stock-terminal"><strong>PORTFOLIO SUMMARY</strong><div><span>Total invested</span><em>PKR 240,000</em></div><div><span>Current value</span><em>PKR 257,340</em></div><div><span>Profit / loss</span><em className="positive">+17,340</em></div><div><span>Return</span><em className="positive">+7.22%</em></div></div></div>
          </article>

          <article className="project-card compact reveal delay-1" data-reveal>
            <div className="project-copy">
              <div><span className="project-index">PROJECT / 03</span><h3>PyBot</h3><p>A rule-based Python chatbot that maintains a continuous command-line conversation using programmed logic — no machine learning and no external APIs.</p><div className="facts"><span>PYTHON</span><span>RULE-BASED</span><span>NO ML / API</span></div></div>
              <ProjectLinks github={LINKS.pybotGithub} story={LINKS.pybotStory}/>
            </div>
            <div className="mini-media"><div className="py-terminal"><header><i/><i/><i/></header><pre><b>PyBot v1.0</b>{'\n\n'}<span>You:</span> Hi{'\n'}<b>Bot:</b> Hello! How can I help?{'\n'}<span>You:</span> Tell me a joke{'\n'}<b>Bot:</b> Why do programmers prefer dark mode?{'\n'}Because light attracts bugs. 🙂</pre></div></div>
          </article>
        </div>

        <article className="project-card mindstack reveal" data-reveal>
          <div className="project-copy">
            <div><span className="project-index">VENTURE / 04</span><h3>MindStack</h3><p>An AI startup company building practical AI, automation, and digital solutions around real business problems. MindStack already has a live public website, while the company’s first active projects are currently underway.</p><div className="facts"><span>AI STARTUP COMPANY</span><span>LIVE PUBLIC WEBSITE</span><span>PROJECTS UNDERWAY</span></div></div>
            <div className="project-links"><a href={LINKS.mindstack} {...external}>Visit company <Icon name="external" size={15}/></a><a href={LINKS.mindstackLinkedIn} {...external}>LinkedIn <Icon name="linkedin" size={15}/></a></div>
          </div>
          <div className="project-media mind-media"><img src="/assets/mindstack-logo.png" className="mind-logo" alt="MindStack logo" loading="lazy"/><div className="venture-live"><i/>Live website · active projects underway</div></div>
        </article>
      </div>
    </section>
  )
}

function Focus() {
  const cards = [
    ['Python Development','CLI tools, structured logic, validation, calculations, and practical applications.'],
    ['AI & Agents','Exploring AI systems with an emphasis on grounding, evaluation, and useful outcomes.'],
    ['Automation','n8n workflows and agentic experiments that reduce repetitive work.'],
    ['APIs & Integration','Connecting services and external data sources to make small systems more useful.']
  ]
  return (
    <section className="focus">
      <div className="container">
        <div className="section-head light-head"><div><div className="kicker reveal" data-reveal><span className="pulse-dot"/>CURRENT FOCUS</div><h2 className="reveal delay-1" data-reveal>The tools change.<br/>The habit stays.</h2></div><p className="reveal delay-2" data-reveal>I keep the stack practical: learn the tool, understand the part it plays, and use it only when it helps solve the problem.</p></div>
        <div className="focus-grid">{cards.map(([title,copy],i) => <article className={`focus-card reveal delay-${Math.min(i,3)}`} data-reveal key={title}><b>{title}</b><p>{copy}</p></article>)}</div>
      </div>
    </section>
  )
}

function Notes() {
  const notes = [
    ['TradeMind / lesson one','Being right more often does not automatically mean making more money.','Fees turned a better prediction rate into a worse trading result.'],
    ['Agent build / lesson two','If the source never said it, the system should not pretend it knows it.','Good grounding is quieter than confident guessing — and much more useful.'],
    ['Building / lesson three','The messy middle is usually where the project teaches you the most.','Build it. Break it. Understand why. Then make the next version better.']
  ]
  return (
    <section className="notes" id="notes">
      <div className="container">
        <div className="notes-head"><div><div className="kicker reveal" data-reveal><span className="pulse-dot"/>FIELD NOTES</div><h2 className="reveal delay-1" data-reveal>A few lessons I’d actually keep.</h2></div><p className="reveal delay-2" data-reveal>Short observations from real builds — the kind of thing I would pin above the desk because I learned it the hard way.</p></div>
        <div className="note-board reveal" data-reveal>{notes.map(([eyebrow,title,foot],i) => <article className={`note-card note-${i+1}`} key={title}><span className="pin"/><small>{eyebrow}</small><p>{title}</p><em>{foot}</em></article>)}</div>
        <div className="capstone reveal" data-reveal><div><div className="kicker">CAPSTONE / RESERVED</div><h3>The final build gets its own case study.</h3><p>This space will become the FlyRank capstone story once the project is completed and approved. The official completion badge will be added here when FlyRank provides it.</p></div><div className="badge-placeholder">BADGE SPACE<br/>AFTER APPROVAL</div></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div><div className="kicker reveal" data-reveal><span className="pulse-dot"/>CONTACT</div><h2 className="reveal delay-1" data-reveal>If the idea is worth discussing,<br/>it might be worth <span>building.</span></h2></div>
          <div className="contact-side reveal delay-2" data-reveal><p>Open to internships, collaborations, and conversations around interesting problems. If something here connects with what you are building, reach out.</p><div className="contact-actions"><a className="button primary" href={LINKS.email}>Start a conversation <Icon name="mail" size={16}/></a><a className="button" href={LINKS.calendly} {...external}>Schedule a chat <Icon name="calendar" size={16}/></a></div></div>
        </div>
        <footer><span>© {new Date().getFullYear()} Ahmed Nadeem</span><div className="footer-links"><a href={LINKS.linkedin} {...external}>LinkedIn</a><a href={LINKS.github} {...external}>GitHub</a><a href={LINKS.cv} download>CV</a></div></footer>
      </div>
    </section>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)
  useScrollReveal()

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive:true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  return <><Cursor/><div className="scroll-progress" style={{width:`${progress}%`}}/><div className="noise" aria-hidden="true"/><Navigation/><main><Hero/><PersonalIntro/><Story/><Projects/><Focus/><Notes/><Contact/></main></>
}
