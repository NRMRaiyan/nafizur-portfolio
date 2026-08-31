'use client';

import { ArrowDownRight, ArrowUpRight, Check, Command, Github, Mail, Menu, MoveUpRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { achievements } from '@/data/achievements';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { now } from '@/data/now';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { socialLinks } from '@/data/social';
import { CommandPalette } from './CommandPalette';
import { Section } from './Section';
import { ThemeToggle } from './ThemeToggle';

export function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  return (
    <>
      <div className="scrollProgress" style={{ width: `${progress}%` }} />
      <CommandPalette />
      <header className="navWrap">
        <nav className="nav">
          <a href="#top" className="brand" aria-label="Nafizur home">NRM<span>.</span></a>
          <div className={`navLinks ${menu ? 'open' : ''}`}>
            {nav.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}><small>0{i + 1}</small>{item}</a>)}
          </div>
          <div className="navActions"><span className="cmdHint"><Command size={12} />K</span><ThemeToggle /><button className="mobileMenu iconButton" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X size={19} /> : <Menu size={19} />}</button></div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroGrid" />
          <div className="heroGlow" />
          <div className="heroContent">
            <div className="eyebrow"><span className="statusDot" /> SYSTEM / NRM-01 <span className="muted">— {profile.status.toUpperCase()}</span></div>
            <p className="heroIntro">HI, I&apos;M</p>
            <h1><span>NAFIZUR</span><span>RAHMAN</span><span>MALLICK<span className="accent">.</span></span></h1>
            <div className="heroBottom">
              <div>
                <p className="headline">{profile.headline}</p>
                <p className="heroDescription">{profile.description}</p>
                <div className="heroCtas"><a className="primaryButton" href="#projects">Explore work <ArrowDownRight size={16} /></a><a className="textButton" href={profile.resume}>Resume <ArrowUpRight size={15} /></a></div>
              </div>
              <div className="heroTelemetry">
                <div><span>LOCATION</span><strong>{profile.location.toUpperCase()}</strong></div>
                <div><span>FOCUS</span><strong>ENGINEERING</strong></div>
                <div><span>STATUS</span><strong><i className="statusDot" /> BUILDING</strong></div>
                <div><span>VERSION</span><strong>2026.01</strong></div>
              </div>
            </div>
          </div>
          <div className="heroFooter"><span>SCROLL TO EXPLORE</span><span>01 — 07</span></div>
        </section>

        <div className="container">
          <Section id="about" index="01" label="IDENTITY / PROFILE" title="ABOUT ME">
            <div className="aboutGrid">
              <div className="statement">ENGINEER.<br /><span>BUILDER.</span><br />LEARNER.</div>
              <div className="prose"><p>I&apos;m Nafizur Rahman Mallick, a Computer Science student interested in software engineering, modern web technologies, AI/ML and building useful digital products.</p><p>I&apos;m early in my engineering journey, which means I&apos;m constantly learning, experimenting, breaking things, and rebuilding them better. I care about understanding problems before writing solutions.</p><div className="miniQuote">“Engineering is not only about writing code. It&apos;s about designing thoughtful solutions.”</div></div>
            </div>
          </Section>

          <Section id="now" index="02" label="CURRENT STATE" title="WHAT I&apos;M DOING NOW">
            <div className="nowGrid">{now.map((item, i) => <div className="nowCard" key={item.label}><span>0{i + 1}</span><small>{item.label}</small><strong>{item.value}</strong><ArrowUpRight size={17} /></div>)}</div>
          </Section>

          <Section id="skills" index="03" label="SYSTEMS / TECHNOLOGY" title="TECHNOLOGY I WORK WITH">
            <div className="skillsGrid">{skillGroups.map((group) => <div className="skillGroup" key={group.title}><span className="groupIndex">/</span><h3>{group.title}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
          </Section>

          <Section id="projects" index="04" label="DEPLOYED WORK" title="SELECTED PROJECTS">
            <div className="projectStack">{projects.filter(p => p.featured).map((project) => <article className="projectCard" key={project.id}><div className="projectTop"><span>{project.number}</span><span>{project.eyebrow}</span><span>2026</span></div><div className="projectVisual"><div className="visualGrid" /><div className="visualLabel">PROJECT / PREVIEW</div><div className="visualOrb" /></div><div className="projectInfo"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="projectSide"><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div><div className="links"><a href={project.live}>Live system <MoveUpRight size={14} /></a><a href={project.github}>Source code <Github size={14} /></a></div></div></div></article>)}</div>
          </Section>

          <Section id="experience" index="05" label="EXPERIENCE LOG" title="MY JOURNEY">
            <div className="timeline">{experience.map((item) => <article className="timelineItem" key={`${item.period}-${item.role}`}><div className="timelineDate">{item.period}</div><div className="timelineMarker"><span /></div><div><h3>{item.role}</h3><strong>{item.organization}</strong><p>{item.description}</p></div></article>)}</div>
          </Section>

          <Section id="education" index="06" label="ACADEMIC BACKGROUND" title="EDUCATION">
            <div className="educationGrid">{education.map((item) => <article className="educationCard" key={`${item.institution}-${item.period}`}><span>{item.period}</span><h3>{item.degree}</h3><p>{item.field}</p><strong>{item.institution}</strong><div className="coursework">{item.coursework.map(c => <span key={c}><Check size={12} />{c}</span>)}</div></article>)}<div className="terminal"><div className="terminalHead"><span /><span /><span /><em>nafizur@portfolio ~</em></div><div className="terminalBody"><p><b>$</b> whoami</p><p className="terminalValue">engineer</p><p><b>$</b> focus</p><p className="terminalValue">software · systems · web</p><p><b>$</b> status</p><p className="terminalValue"><i className="statusDot" /> building</p><p><b>$</b> _</p></div></div></div>
          </Section>

          <Section id="achievements" index="07" label="MILESTONES / CREDENTIALS" title="ACHIEVEMENTS">
            <div className="achievementList">{achievements.map((a) => <article key={`${a.year}-${a.title}`}><span>{a.year}</span><div><h3>{a.title}</h3><strong>{a.organization}</strong><p>{a.description}</p></div><ArrowUpRight size={17} /></article>)}</div>
          </Section>

          <section id="contact" className="contactSection">
            <div className="sectionMeta"><span>08</span><span>COMMUNICATION / CONNECT</span></div>
            <div className="contactGrid"><div><p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL.</p><h2>Have an idea?<br /><span>Let&apos;s talk.</span></h2></div><div><p className="contactText">For collaborations, internships, projects, or simply a conversation about technology, feel free to reach out.</p><a className="contactMail" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a><div className="socials">{socialLinks.map(link => <a key={link.label} href={link.href}>{link.label}<ArrowUpRight size={13} /></a>)}</div></div></div>
          </section>
        </div>
      </main>

      <footer className="footer"><div className="footerTop"><a href="#top" className="footerBrand">{profile.shortName}</a><span>ENGINEER · BUILDER · LEARNER</span><span><i className="statusDot" /> SYSTEM ONLINE</span></div><div className="footerBottom"><span>© 2026 {profile.name.toUpperCase()}</span><span>DESIGNED / ENGINEERED WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </>
  );
}
