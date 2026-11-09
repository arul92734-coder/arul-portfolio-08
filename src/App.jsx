import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BrainCircuit, Globe, Sparkles, MapPin,
  Download, ExternalLink, GraduationCap, BriefcaseBusiness
} from 'lucide-react';
import './App.css';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Learning', 'Contact'];

const skills = [
  { name: 'Python', group: 'Programming', icon: Code2 },
  { name: 'C Programming', group: 'Programming', icon: Code2 },
  { name: 'HTML & CSS', group: 'Web development', icon: Globe },
  { name: 'JavaScript', group: 'Web development', icon: Code2 },
  { name: 'Power BI', group: 'Data analytics', icon: Database },
  { name: 'Excel', group: 'Data analytics', icon: Database },
  { name: 'Data Science', group: 'Data', icon: BrainCircuit },
  { name: 'Git & GitHub', group: 'Tools', icon: Github },
];

const projects = [
  {
    title: 'Smart Bus Crowd Management System',
    type: 'IoT',
    number: '01',
    description: 'An IoT prototype exploring passenger entry and exit counting, bus occupancy estimation and real-time crowd-level information.',
    stack: ['ESP32', 'ESP8266', 'IR sensors', 'GPS'],
    symbol: '↗'
  },
  {
    title: 'MediWise AI',
    type: 'AI & Data',
    number: '02',
    description: 'An educational medication-information assistant concept designed to help people explore medicine information and safety topics. It is not a diagnostic tool.',
    stack: ['Python', 'Sentence Transformers', 'FAISS'],
    symbol: '✳'
  },
  {
    title: 'CampusBuddy AI',
    type: 'Web',
    number: '04',
    description: 'A student-assistant chatbot concept for accessing academic information such as attendance, timetable and assignments.',
    stack: ['Python', 'Flask', 'HTML', 'CSS'],
    symbol: '⌘'
  },
  {
    title: 'Placement Training LMS',
    type: 'Web',
    number: '05',
    description: 'A placement-preparation learning platform concept intended to bring student resources and training into one experience.',
    stack: ['React', 'JavaScript', 'CSS'],
    symbol: '↗'
  },
  {
    title: 'Smart Water Level Monitoring',
    type: 'IoT',
    number: '06',
    description: 'An IoT project concept focused on monitoring water levels and supporting more informed water usage.',
    stack: ['IoT', 'Sensors', 'Microcontroller'],
    symbol: '≈'
  },
];

const experiences = [
  {
    label: 'WEBSITE DEVELOPMENT',
    title: 'MES English High School — Live Website',
    description: 'Developed and launched a live school website, contributing to its design, layout, navigation and user interface. Focused on a professional, responsive and user-friendly experience.',
    link: 'https://mesconventtvk.com/'
  },
  {
    label: 'DATA SCIENCE INTERNSHIP',
    title: 'SkillCraft Technology',
    description: 'Built sales dashboards in Excel and interactive dashboards in Power BI. Performed data cleaning and preprocessing, analysed sales data and prepared business insights.'
  },
];

const learning = [
  'NPTEL — Research Methodology & IPR',
  'Generative AI workshop',
  'Innomatics Research Labs — Data Science training',
  'Python and Data Science learning programmes',
  'Technical workshops and hackathon participation',
];

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Home"><span className="brand-mark">A</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="availability-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <h1 className="hero-title">Hello, I'm Arul Shakthi C</h1>
            <div className="role-line">Computer Science <span>×</span> Data Science</div>
            <p className="hero-intro">Computer Science and Data Science student at Atria Institute of Technology, curious about technology and interested in software development, data science and artificial intelligence. I enjoy learning new technologies and building practical solutions.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-light" href="/Arul-Resume.pdf" download><Download size={16} /> Download resume</a>
            </div>
            <div className="hero-location"><MapPin size={15} /> Bengaluru, Karnataka, India</div>
          </div>
          <div className="portrait-area">
            <div className="portrait-blob" />
            <div className="portrait-card">
              <img src="/images/profile.jpg" alt="Arul Shakthi C profile" onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('photo-empty'); }} />
              <div className="photo-placeholder"><span>AS</span><small>ADD YOUR PHOTO</small></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip">
          <span>AI & DATA</span><i>✳</i><span>WEB DEVELOPMENT</span><i>✳</i><span>INNOVATION</span><i>✳</i><span>CONTINUOUS LEARNING</span>
        </section>

        <section className="section about-section" id="about">
          <Reveal>
            <div className="section-label">01 / ABOUT ME</div>
            <div className="about-grid">
              <h2>Learning today.<br /><em>Creating tomorrow.</em></h2>
              <div className="about-copy">
                <p className="lead">I'm a Computer Science and Data Science student at Atria Institute of Technology, Bengaluru.</p>
                <p>I’m interested in artificial intelligence, data science, software development and technology that can solve everyday problems. I enjoy learning by building, collaborating and experimenting with new tools.</p>
                <div className="education-chip"><GraduationCap size={20} /><div><b>Bachelor of Engineering</b><span>Computer Science & Data Science · Atria Institute of Technology</span></div></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section skills-section" id="skills">
          <Reveal>
            <div className="section-label">02 / MY TOOLKIT</div>
            <div className="section-heading"><h2>Skills I’m <em>growing.</em></h2><p>A snapshot of the technologies and tools I have explored.</p></div>
            <div className="skills-grid">
              {skills.map(({name, group, icon: Icon}) => <div className="skill-card" key={name}><span className="skill-icon"><Icon size={20} /></span><div><b>{name}</b><small>{group}</small></div><ArrowUpRight className="skill-arrow" size={16} /></div>)}
            </div>
          </Reveal>
        </section>

        <section className="section projects-section" id="projects">
          <Reveal>
            <div className="section-label">03 / SELECTED WORK</div>
            <div className="section-heading project-heading"><h2>Selected <em>projects.</em></h2><p>A selection of academic, personal and prototype work across IoT, AI and web development.</p></div>
            <div className="filters">{['All', 'AI & Data', 'IoT', 'Web'].map(f => <button className={filter === f ? 'filter active' : 'filter'} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div>
            <div className="projects-grid">
              {visibleProjects.map(project => <article className="project-card" key={project.number}>
                <div className="project-card-top"><span>{project.number} / PROJECT</span><span className="project-symbol">{project.symbol}</span></div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-row">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-foot"><span>PROJECT OVERVIEW</span><span className="arrow-circle"><ArrowUpRight size={17} /></span></div>
              </article>)}
            </div>
          </Reveal>
        </section>

        <section className="section experience-section" id="experience">
          <Reveal>
            <div className="section-label">04 / EXPERIENCE</div>
            <div className="section-heading"><h2>Learning by <em>doing.</em></h2><p>Practical experiences, teamwork and opportunities to apply what I learn.</p></div>
            <div className="experience-list">
              {experiences.map((item, i) => <div className="experience-item" key={item.title}><div className="experience-index">0{i+1}</div><div className="experience-main"><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p>{item.link && <a className="experience-link" href={item.link} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={13} /></a>}</div><BriefcaseBusiness className="experience-icon" /></div>)}
            </div>
          </Reveal>
        </section>

        <section className="section learning-section" id="learning">
          <Reveal>
            <div className="section-label">05 / LEARNING & RECOGNITION</div>
            <div className="section-heading"><h2>Courses & <em>workshops.</em></h2><p>Learning experiences and technical programmes I have taken part in.</p></div>
            <div className="learning-grid">{learning.map((item, i) => <div className="learning-card" key={item}><span>0{i+1}</span><p>{item}</p><Sparkles size={17} /></div>)}</div>
          </Reveal>
        </section>

        <section className="contact-section" id="contact">
          <Reveal>
            <div className="section-label">06 / SAY HELLO</div>
            <p className="contact-overline">HAVE AN IDEA, OPPORTUNITY OR JUST WANT TO CONNECT?</p>
            <h2>Let’s make something<br /><em>meaningful.</em></h2>
            <p className="contact-copy">I’m happy to connect, exchange ideas and explore opportunities to learn and grow.</p>
            <a className="button button-dark contact-button" href="mailto:arul92734@gmail.com">Get in touch <Mail size={17} /></a>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/arulshakthic08/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={13} /></a>
              <a href="https://github.com/arul92734-coder" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={13} /></a>
              <a href="mailto:arul92734@gmail.com"><Mail size={18} /> Email <ExternalLink size={13} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home" aria-label="Home"><span className="brand-mark">A</span></a><p>Designed with curiosity & care.</p><span>© {new Date().getFullYear()} Arul Shakthi C</span></footer>
    </div>
  );
}

export default App;
