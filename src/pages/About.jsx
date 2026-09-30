import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  
  useEffect(() => {
    const teamMembers = [
      {
        name: 'Vision KC',
        role: 'Chief Executive Officer',
        shortRole: 'CEO',
        focus: 'Strategic Leadership & Security Engineer',
        description: 'Sets BlackRoot’s direction and leads security engagements, pairing strategic leadership with hands-on offensive security work.',
        photo: '/team/vision-kc.png',
        initials: 'VK',
        imagePosition: 'center 85%',
        barColor: '#570abc',
        roleColor: '#570abc'
      },
      {
        name: 'Safal Lohani',
        role: 'Chief Technology Officer',
        shortRole: 'CTO',
        focus: 'Technology Leadership & AI Engineering',
        description: 'Owns the technical vision, architecting the AI agents and intelligent systems that power what BlackRoot ships for its clients.',
        photo: '/team/safal-lohani.png',
        initials: 'SL',
        imagePosition: 'center center',
        barColor: '#0891b2',
        roleColor: '#0891b2'
      },
      {
        name: 'Aawart KC',
        role: 'Chief Information Security Officer',
        shortRole: 'CISO',
        focus: 'Head of Cybersecurity Operations',
        description: 'Leads BlackRoot’s VAPT and security research, directing offensive security assessments and the development of capabilities across engagements.',
        photo: '/team/aawart-kc.png',
        initials: 'AK',
        imagePosition: 'center center',
        barColor: '#059669',
        roleColor: '#059669'
      },
      {
        name: 'Pratyush Poudel',
        role: 'Chief Operating Officer',
        shortRole: 'COO',
        focus: 'Operations Management & AI Researcher',
        description: 'Runs operations and applied AI research, turning security ideas into reliable delivery for every engagement.',
        photo: '/team/pratyush-poudel.png',
        initials: 'PP',
        imagePosition: 'center 20%',
        barColor: '#d97706',
        roleColor: '#d97706'
      }
    ];

    let currentTeamIdx = 0;
    let isTeamFading = false;

    function renderTeamShowcase(idx) {
      const card = document.getElementById('teamShowcaseCard');
      const member = teamMembers[idx];
      if (!card || !member) return;

      isTeamFading = true;
      card.classList.add('fading');

      setTimeout(() => {
        currentTeamIdx = idx;
        const imgEl = document.getElementById('teamShowcaseImg');
        const fallbackEl = document.getElementById('teamShowcaseFallback');
        const barEl = document.getElementById('teamShowcaseBar');
        const nameEl = document.getElementById('teamShowcaseName');
        const roleEl = document.getElementById('teamShowcaseRole');
        const focusEl = document.getElementById('teamShowcaseFocus');
        const bioEl = document.getElementById('teamShowcaseBio');

        if (member.photo) {
          imgEl.src = member.photo;
          imgEl.style.objectPosition = member.imagePosition || 'center center';
          imgEl.style.display = 'block';
          if (fallbackEl) fallbackEl.style.display = 'none';
          imgEl.onerror = () => {
            imgEl.style.display = 'none';
            if (fallbackEl) {
              fallbackEl.innerText = member.initials;
              fallbackEl.style.display = 'flex';
            }
          };
        } else if (fallbackEl) {
          imgEl.style.display = 'none';
          fallbackEl.innerText = member.initials;
          fallbackEl.style.display = 'flex';
        }

        if (barEl) barEl.style.backgroundColor = member.barColor || '#570abc';
        if (nameEl) nameEl.innerText = member.name;
        if (roleEl) {
          roleEl.innerText = member.role;
          roleEl.style.color = member.roleColor || '#570abc';
        }
        if (focusEl) focusEl.innerText = member.focus;
        if (bioEl) bioEl.innerText = member.description;

        const pillBtns = document.querySelectorAll('.team-pill-btn');
        pillBtns.forEach((btn, i) => {
          if (i === idx) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        card.classList.remove('fading');
        isTeamFading = false;
      }, 250);
    }

    function goTeam(dir) {
      if (isTeamFading) return;
      const nextIdx = (currentTeamIdx + dir + teamMembers.length) % teamMembers.length;
      renderTeamShowcase(nextIdx);
    }

    const prevBtn = document.getElementById('teamPrevBtn');
    const nextBtn = document.getElementById('teamNextBtn');
    const pillBtns = document.querySelectorAll('.team-pill-btn');

    if (prevBtn) prevBtn.onclick = () => goTeam(-1);
    if (nextBtn) nextBtn.onclick = () => goTeam(1);
    pillBtns.forEach((btn, i) => {
      btn.onclick = () => {
        if (i !== currentTeamIdx && !isTeamFading) {
          renderTeamShowcase(i);
        }
      };
    });
  }, []);

  useEffect(() => {
    function animateCounters() {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = Math.floor(current);
          }
        }, stepTime);
      });
    }

    const metricsBar = document.getElementById('metricsBar');
    if (metricsBar) {
      let animated = false;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            animateCounters();
          }
        });
      }, { threshold: 0.2 });
      observer.observe(metricsBar);
      
      return () => observer.disconnect();
    }
  }, []);


  return (
    <main>
      <SEO 
        title="About BlackRoot Technologies | Security Engineering"
        description="BlackRoot Technologies is a security-first engineering and research company. We use offensive security, applied research, and intelligent systems to strengthen modern technology."
        url="/about"
      />


{/*  Mobile Navigation Drawer  */}


<main>
  {/*  Page Hero  */}
  <section className="page-hero">
    <div className="wrap">
      <div className="page-hero-inner">
        <span className="eyebrow-badge">ABOUT BLACKROOT TECHNOLOGIES</span>
        <h1 className="page-title">Built for the problems others overlook.</h1>
        <p className="page-lead">
          BlackRoot Technologies is a cybersecurity and technology company focused on applied security research, offensive security, and intelligent software systems.
        </p>
      </div>
    </div>
  </section>

  {/*  Mission & Core Disciplines  */}
  <section className="section-padding" style={{background: 'var(--bg)'}}>
    <div className="wrap">
      <div className="mission-grid">
        <div className="mission-text">
          <span className="section-tag">Our Applied Engineering Mission</span>
          <h2 className="section-title" style={{fontSize: '32px', textAlign: 'left'}}>At the Intersection of Research & Engineering</h2>
          <p>
            We work at the intersection of cybersecurity and engineering identifying vulnerabilities, strengthening infrastructure, and building practical technologies that solve complex security problems.
          </p>
          <p>
            Our work combines rigorous security research with modern development to help organizations understand their risks and build more resilient systems.
          </p>
        </div>

        <div className="focus-pills-container">
          <div style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '20px'}}>Core Disciplines & Focus</div>
          <div className="focus-pills">
            <div className="focus-item">
              <div className="focus-icon">
                <img src="/security-research.png" alt="Applied Security Research Icon" />
              </div>
              <div className="focus-info">
                <h4>Applied Security Research</h4>
                <p>Proactive vulnerability discovery, attack vector analysis, and zero-day threat intelligence.</p>
              </div>
            </div>

            <div className="focus-item">
              <div className="focus-icon">
                <img src="/offensive-security.png" alt="Offensive Security Icon" />
              </div>
              <div className="focus-info">
                <h4>Offensive Security</h4>
                <p>Real-world adversarial simulations, penetration testing, and deep-level attack surface validation.</p>
              </div>
            </div>

            <div className="focus-item">
              <div className="focus-icon">
                <img src="/intelligent-engineering.png" alt="Intelligent Engineering Icon" />
              </div>
              <div className="focus-info">
                <h4>Intelligent Engineering</h4>
                <p>Custom AI-powered automation, RAG architectures, and secure production software systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Core Values Section  */}
  <section className="values-section section-padding">
    <div className="wrap">
      <div className="section-header">
        <span className="section-tag">Principles That Drive Us</span>
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">
          How we approach security research, systems development, and client partnerships.
        </p>
      </div>

      <div className="values-grid">
        <div className="value-card">
          <span className="value-number">01 // RIGOR</span>
          <h3 className="value-title">Adversarial Rigor</h3>
          <p className="value-desc">We test systems with true attacker mindsets. Superficial audits miss critical flaws; deep offensive research reveals true risk.</p>
        </div>

        <div className="value-card">
          <span className="value-number">02 // PRAGMATISM</span>
          <h3 className="value-title">Engineering Pragmatism</h3>
          <p className="value-desc">We build practical AI agents and software systems engineered around real operational demands, avoiding empty hype.</p>
        </div>

        <div className="value-card">
          <span className="value-number">03 // INTEGRITY</span>
          <h3 className="value-title">Responsible Disclosure</h3>
          <p className="value-desc">We adhere to strict ethical standards in vulnerability discovery, protecting client data and public security infrastructure.</p>
        </div>

        <div className="value-card">
          <span className="value-number">04 // RESILIENCE</span>
          <h3 className="value-title">Continuous Resilience</h3>
          <p className="value-desc">Security is not a one-time checkmark. We engineer systems that adapt, self-correct, and withstand evolving threat vectors.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Meet Our Team Section  */}
  <section className="team-section section-padding" id="team">
    <div className="wrap">
      <div className="section-header">
        <span className="section-tag">Our Team</span>
        <h2 className="section-title">Meet our team.</h2>
        <p className="section-subtitle">
          The same people who design our AI systems are the ones who try to break them.
        </p>
      </div>

      {/*  Interactive Featured Team Showcase Card  */}
      <div className="team-showcase-wrapper">
        <button className="team-nav-arrow prev" id="teamPrevBtn" aria-label="Previous team member">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div className="team-showcase-card" id="teamShowcaseCard">
          <div className="team-photo-container">
            <img className="team-photo-img" id="teamShowcaseImg" src="team/vision-kc.png" alt="Portrait of Vision KC" style={{objectPosition: 'center 85%'}} />
            <div className="team-avatar-fallback" id="teamShowcaseFallback" style={{display: 'none'}}>VK</div>
          </div>

          <div className="team-info-box">
            <div className="team-accent-bar" id="teamShowcaseBar"></div>
            <h3 className="team-member-name" id="teamShowcaseName">Vision KC</h3>
            <div className="team-member-role" id="teamShowcaseRole">Chief Executive Officer</div>
            <div className="team-member-focus" id="teamShowcaseFocus">Strategic Leadership & Security Engineer</div>
            <p className="team-member-bio" id="teamShowcaseBio">Sets BlackRoot’s direction and leads security engagements, pairing strategic leadership with hands-on offensive security work.</p>
          </div>
        </div>

        <button className="team-nav-arrow next" id="teamNextBtn" aria-label="Next team member">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/*  Selector Pills  */}
      <div className="team-pills-bar" id="teamPillsBar">
        <button className="team-pill-btn active">
          <div className="team-pill-avatar"><img src="team/vision-kc.png" alt="Vision KC" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 85%'}} onError={(e) => { e.currentTarget.outerHTML = "VK"; }}/></div>
          <div className="team-pill-info">
            <span className="team-pill-name">Vision KC</span>
            <span className="team-pill-role">CEO</span>
          </div>
        </button>

        <button className="team-pill-btn">
          <div className="team-pill-avatar"><img src="team/safal-lohani.png" alt="Safal Lohani" style={{width: '100%', height: '100%', objectFit: 'cover'}} onError={(e) => { e.currentTarget.outerHTML = "SL"; }}/></div>
          <div className="team-pill-info">
            <span className="team-pill-name">Safal Lohani</span>
            <span className="team-pill-role">CTO</span>
          </div>
        </button>

        <button className="team-pill-btn">
          <div className="team-pill-avatar"><img src="team/aawart-kc.png" alt="Aawart KC" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center'}} onError={(e) => { e.currentTarget.outerHTML = "AK"; }}/></div>
          <div className="team-pill-info">
            <span className="team-pill-name">Aawart KC</span>
            <span className="team-pill-role">CISO</span>
          </div>
        </button>

        <button className="team-pill-btn">
          <div className="team-pill-avatar"><img src="team/pratyush-poudel.png" alt="Pratyush Poudel" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%'}} onError={(e) => { e.currentTarget.outerHTML = "PP"; }}/></div>
          <div className="team-pill-info">
            <span className="team-pill-name">Pratyush Poudel</span>
            <span className="team-pill-role">COO</span>
          </div>
        </button>
      </div>

    </div>
  </section>

  {/*  Metrics Bar  */}
  <section className="section-padding" style={{background: 'var(--bg-soft)', borderBottom: '1px solid var(--line)'}}>
    <div className="wrap">
      <div className="metrics-bar" id="metricsBar">
        <div className="metric-card">
          <div className="metric-value text-gradient-red-black"><span className="counter" data-target="400">0</span><span className="symbol">+</span></div>
          <div className="metric-label">Vulnerabilities Identified</div>
        </div>
        <div className="metric-card">
          <div className="metric-value text-gradient-blue-black"><span className="purple-text">Applied</span></div>
          <div className="metric-label">Applied Research Focus</div>
        </div>
        <div className="metric-card">
          <div className="metric-value text-gradient-black-purple"><span className="purple-text">AI</span><span>×</span><span>SEC</span></div>
          <div className="metric-label">Engineered Security Systems</div>
        </div>
        <div className="metric-card">
          <div className="metric-value text-gradient-green-black"><span className="purple-text">Continuous</span></div>
          <div className="metric-label">Security Engineering</div>
        </div>
      </div>
    </div>
  </section>
</main>

{/*  Modal Dialog  */}


{/*  Site Footer  */}

    </main>
  );
}
