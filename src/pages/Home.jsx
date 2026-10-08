import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from "react";
import InquiryModal from '../components/InquiryModal';

export default function Home() {
  const [dots, setDots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const randomizeDots = () => {
    const colors = ['#10b981', '#ef4444', '#eab308'];
    const newDots = Array.from({ length: 12 }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      top: `${Math.floor(Math.random() * 80) + 10}%`,
      left: `${Math.floor(Math.random() * 80) + 10}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 1.5}s`
    }));
    setDots(newDots);
  };

  useEffect(() => {
    randomizeDots();
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


  useEffect(() => {
    const marqueeTrack = document.getElementById('marqueeTrack');
    const prevLogo = document.getElementById('prevLogo');
    const nextLogo = document.getElementById('nextLogo');

    if (prevLogo && marqueeTrack) {
      prevLogo.addEventListener('click', () => {
        marqueeTrack.style.animationPlayState = 'paused';
        const transform = window.getComputedStyle(marqueeTrack).transform;
        const matrix = new DOMMatrix(transform);
        marqueeTrack.style.transform = `translateX(${Math.min(0, matrix.m41 + 200)}px)`;
      });
    }

    if (nextLogo && marqueeTrack) {
      nextLogo.addEventListener('click', () => {
        marqueeTrack.style.animationPlayState = 'paused';
        const transform = window.getComputedStyle(marqueeTrack).transform;
        const matrix = new DOMMatrix(transform);
        marqueeTrack.style.transform = `translateX(${matrix.m41 - 200}px)`;
      });
    }
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const category = document.getElementById('contactCategory').value;
    const message = document.getElementById('contactMessage').value;
    const btn = e.target.querySelector('button[type="submit"] span');
    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    try {
      await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, category, message })
      });
      btn.innerText = "Sent Successfully!";
      e.target.reset();
      setTimeout(() => btn.innerText = originalText, 3000);
    } catch (err) {
      btn.innerText = "Error Sending!";
      setTimeout(() => btn.innerText = originalText, 3000);
    }
  };

  return (
    <main>
      <SEO 
        title="BlackRoot Technologies | Security Engineering & Research"
        description="BlackRoot Technologies is a security engineering and research company focused on vulnerability research, intelligent security systems, and offensive security engineering."
        url="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BlackRoot Technologies",
          "url": "https://www.blackroot.com.np",
          "logo": "https://www.blackroot.com.np/logo/blackroot-logo.png",
          "description": "BlackRoot Technologies is a security engineering and research company focused on vulnerability research, intelligent security systems, and offensive security engineering."
        }}
      />


{/*  Mobile Navigation Drawer  */}


<main>
  {/*  Hero Section  */}
  <section className="hero">
    <div className="wrap hero-inner">
      <div className="hero-copy reveal-3d">
        <div className="eyebrow">
          <span className="eyebrow-badge">Cybersecurity & Intelligent Engineering</span>
          <div className="eyebrow-line"></div>
        </div>

        <h1 className="hero-title">
          We Engineer <span className="accent">Security.</span>
        </h1>

        <p className="hero-desc">
          BlackRoot Technologies is a cybersecurity and technology company focused on applied security research, offensive security, and intelligent software systems.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary open-modal-btn" type="button" onClick={() => setIsModalOpen(true)}>
            <span>Start a Conversation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <Link className="btn btn-secondary" to="/services">Explore Services</Link>
        </div>
      </div>

      {/*  Hero Graphic  */}
      <div className="hero-graphic reveal-up reveal-delay-2">
        <div className="radar-container" onMouseEnter={randomizeDots}>
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="230" stroke="#e3e4e6" strokeWidth="1.5" strokeDasharray="4 4"/>
            <circle cx="250" cy="250" r="170" stroke="#e3e4e6" strokeWidth="1.5"/>
            <circle cx="250" cy="250" r="110" stroke="#e3e4e6" strokeWidth="1.5" strokeDasharray="6 6"/>
            <line x1="250" y1="20" x2="250" y2="480" stroke="#ececed" strokeWidth="1.5"/>
            <line x1="20" y1="250" x2="480" y2="250" stroke="#ececed" strokeWidth="1.5"/>
            {/*  Outer scanner arc  */}
            <path d="M 250 20 A 230 230 0 0 1 480 250" stroke="url(#sweepGradient)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#570abc" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#570abc" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="center-node-box">
            <img className="center-node-logo" src="logo/blackroot-logo.png" alt="BlackRoot Logo" style={{height: '44px', width: 'auto', flexShrink: '0'}} />
            <div className="center-node-info">
              <span className="center-node-title">BLACKROOT TECHNOLOGIES</span>
              <span className="center-node-status"><span className="status-dot"></span> Active Defense Node</span>
            </div>
          </div>

          <div className="telemetry-card pos-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#570abc" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>Vulnerability Discovered: CVE-2026-62364</span>
          </div>

          <div className="telemetry-card pos-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Infrastructure Hardened</span>
          </div>

          {dots.map((dot) => (
            <div 
              key={dot.id} 
              className="radar-dot" 
              style={{
                top: dot.top,
                left: dot.left,
                color: dot.color,
                background: dot.color,
                animationDelay: dot.delay
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/*  Logos Marquee Showcase  */}
  <section className="logos-bar">
    <div className="wrap">
      <div className="logos-header" style={{ justifyContent: 'center', marginBottom: '30px' }}>
        <span className="logos-label">Organizations We Have Helped Secure</span>
      </div>

      <div className="marquee-viewport" id="marqueeViewport">
        <div className="marquee-track" id="marqueeTrack">
          {/*  All 16 Transparent PNG Logos from logo/ folder  */}
          <div className="logo-card" title="Meta"><img src="logo/Meta.png" alt="Meta Logo" /></div>
          <div className="logo-card" title="Anthropic"><img src="logo/anthropic.png" alt="Anthropic Logo" /></div>
          <div className="logo-card" title="Cisco"><img src="logo/cisco.png" alt="Cisco Logo" /></div>
          <div className="logo-card" title="F5"><img src="logo/f5.png" alt="F5 Logo" /></div>
          <div className="logo-card" title="Lenovo"><img src="logo/lenovo.png" alt="Lenovo Logo" /></div>
          <div className="logo-card" title="Mastercard"><img src="logo/mastercard.png" alt="Mastercard Logo" /></div>
          <div className="logo-card" title="New Balance"><img src="logo/new-balance.png" alt="New Balance Logo" /></div>
          <div className="logo-card" title="PayPal"><img src="logo/paypal.png" alt="PayPal Logo" /></div>
          <div className="logo-card" title="PortSwigger"><img src="logo/portswigger.png" alt="PortSwigger Logo" /></div>
          <div className="logo-card" title="Red Hat"><img src="logo/redhat.png" alt="Red Hat Logo" /></div>
          <div className="logo-card" title="Remitly"><img src="logo/remitly.png" alt="Remitly Logo" /></div>
          <div className="logo-card" title="Sony"><img src="logo/sony.png" alt="Sony Logo" /></div>
          <div className="logo-card" title="US Department"><img src="logo/us-department.png" alt="US Department Logo" /></div>
          <div className="logo-card" title="Vodafone"><img src="logo/vodafone.png" alt="Vodafone Logo" /></div>
          <div className="logo-card" title="Weblate"><img src="logo/weblate.png" alt="Weblate Logo" /></div>
          <div className="logo-card" title="Zurich"><img src="logo/zurich.png" alt="Zurich Logo" /></div>
          <div className="logo-card" title="NASA"><img src="logo/nasa.png" alt="NASA Logo" /></div>
          <div className="logo-card" title="Amazon"><img src="logo/amazon.png" alt="Amazon Logo" /></div>

          {/*  Duplicate loop for seamless infinite marquee  */}
          <div className="logo-card" title="Meta"><img src="logo/Meta.png" alt="Meta Logo" /></div>
          <div className="logo-card" title="Anthropic"><img src="logo/anthropic.png" alt="Anthropic Logo" /></div>
          <div className="logo-card" title="Cisco"><img src="logo/cisco.png" alt="Cisco Logo" /></div>
          <div className="logo-card" title="F5"><img src="logo/f5.png" alt="F5 Logo" /></div>
          <div className="logo-card" title="Lenovo"><img src="logo/lenovo.png" alt="Lenovo Logo" /></div>
          <div className="logo-card" title="Mastercard"><img src="logo/mastercard.png" alt="Mastercard Logo" /></div>
          <div className="logo-card" title="New Balance"><img src="logo/new-balance.png" alt="New Balance Logo" /></div>
          <div className="logo-card" title="PayPal"><img src="logo/paypal.png" alt="PayPal Logo" /></div>
          <div className="logo-card" title="PortSwigger"><img src="logo/portswigger.png" alt="PortSwigger Logo" /></div>
          <div className="logo-card" title="Red Hat"><img src="logo/redhat.png" alt="Red Hat Logo" /></div>
          <div className="logo-card" title="Remitly"><img src="logo/remitly.png" alt="Remitly Logo" /></div>
          <div className="logo-card" title="Sony"><img src="logo/sony.png" alt="Sony Logo" /></div>
          <div className="logo-card" title="US Department"><img src="logo/us-department.png" alt="US Department Logo" /></div>
          <div className="logo-card" title="Vodafone"><img src="logo/vodafone.png" alt="Vodafone Logo" /></div>
          <div className="logo-card" title="Weblate"><img src="logo/weblate.png" alt="Weblate Logo" /></div>
          <div className="logo-card" title="Zurich"><img src="logo/zurich.png" alt="Zurich Logo" /></div>
          <div className="logo-card" title="NASA"><img src="logo/nasa.png" alt="NASA Logo" /></div>
          <div className="logo-card" title="Amazon"><img src="logo/amazon.png" alt="Amazon Logo" /></div>
        </div>
      </div>
    </div>
  </section>

  {/*  About Section  */}
  <section className="about-section section-padding" id="about">
    <div className="wrap">
      <div className="about-grid">
        <div className="about-content reveal-3d">
          <span className="section-tag">About BlackRoot</span>
          <h3>Built for the problems others overlook.</h3>
          <div className="about-paragraphs">
            <p>
              BlackRoot Technologies is a cybersecurity and technology company focused on applied security research, offensive security, and intelligent software systems.
            </p>
            <p>
              We work at the intersection of cybersecurity and engineering identifying vulnerabilities, strengthening infrastructure, and building practical technologies that solve complex security problems.
            </p>
            <p>
              Our work combines rigorous security research with modern development to help organizations understand their risks and build more resilient systems.
            </p>
          </div>
        </div>

        <div className="focus-pills-container reveal-up reveal-delay-2">
          <div className="focus-pills-title">Core Disciplines & Focus</div>
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

      {/*  Metrics Bar with Animated Counters  */}
      <div className="metrics-bar reveal-3d" id="metricsBar">
        <div className="metric-card">
          <div className="metric-value"><span className="counter" data-target="400">0</span><span>+</span></div>
          <div className="metric-label">Vulnerabilities Identified</div>
        </div>
        <div className="metric-card">
          <div className="metric-value"><span>Applied</span></div>
          <div className="metric-label">Applied Research Focus</div>
        </div>
        <div className="metric-card">
          <div className="metric-value"><span>AI</span><span>×</span><span>SEC</span></div>
          <div className="metric-label">Engineered Security Systems</div>
        </div>
        <div className="metric-card">
          <div className="metric-value"><span>Continuous</span></div>
          <div className="metric-label">Security Engineering</div>
        </div>
      </div>
    </div>
  </section>

  {/* Agentic AI Introduction Section */}
  <section className="section-padding agentic-intro-section" style={{ background: "var(--bg-soft)", borderBottom: "1px solid var(--line)" }}>
    <div className="wrap">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
        <div style={{ flex: '1', minWidth: '320px' }} className="reveal-3d">
          <span className="section-tag">AI-POWERED AUTONOMY</span>
          <h2 className="section-title" style={{ fontSize: "36px", marginBottom: "20px" }}>Security Research, Engineered to Investigate.</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px" }}>
            Our proprietary agentic AI system autonomously explores attack surfaces, forms security hypotheses, executes controlled tests, correlates evidence, and validates findings before reporting them.
          </p>
          <ul className="agentic-intro-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px', listStyle: 'none', padding: 0 }}>
            {['Autonomous Recon', 'Security Reasoning', 'Multi-Agent Testing', 'Evidence Correlation', 'Automated Validation'].map(cap => (
              <li key={cap} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', fontWeight: '600', color: 'var(--ink)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--purple)' }}></span>
                {cap}
              </li>
            ))}
          </ul>
          <Link to="/agentic-ai" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            <span>Explore Our Agentic AI</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px", width: "16px", height: "16px" }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
        
        <div style={{ flex: '1', minWidth: '320px', display: 'flex', justifyContent: 'center' }} className="reveal-up reveal-delay-2">
           <div style={{ background: 'var(--card-bg)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', width: '100%', maxWidth: '400px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {['RECON', 'ANALYZE', 'TEST', 'VALIDATE', 'REPORT'].map((step, i) => (
                    <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                       <div style={{ padding: '8px 16px', background: 'var(--bg-soft)', borderRadius: '6px', fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', border: '1px solid var(--line-soft)', width: '120px', textAlign: 'center', color: 'var(--ink)' }} className={`home-agent-step home-step-${i}`}>
                          {step}
                       </div>
                       {i < 4 && <div style={{ height: '16px', width: '2px', background: 'var(--line)', margin: '4px 0' }}></div>}
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>




  {/*  Methodology Section  */}
  <section className="methodology-section section-padding" id="methodology">
    <div className="wrap">
      <div className="section-header reveal-fade">
        <span className="section-tag">Engineered Approach</span>
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Our methodology bridges the gap between deep adversarial research and practical software engineering.
        </p>
      </div>

      <div className="methodology-grid">
        <div className="step-card reveal-up reveal-delay-1">
          <div className="step-number">01</div>
          <h4 className="step-title">Discovery & Reconnaissance</h4>
          <p className="step-desc">Deep technical analysis of target architecture, dependencies, and potential attack vectors.</p>
        </div>

        <div className="step-card reveal-up reveal-delay-2">
          <div className="step-number">02</div>
          <h4 className="step-title">Offensive Assessment</h4>
          <p className="step-desc">Rigorous penetration testing and vulnerability research to expose security gaps before exploit.</p>
        </div>

        <div className="step-card reveal-up reveal-delay-3">
          <div className="step-number">03</div>
          <h4 className="step-title">Intelligent Automation</h4>
          <p className="step-desc">Deploying tailored AI agents, RAG workflows, and security tools to automate detection and response.</p>
        </div>

        <div className="step-card reveal-up reveal-delay-4">
          <div className="step-number">04</div>
          <h4 className="step-title">System Hardening</h4>
          <p className="step-desc">Implementing architectural fixes, configuration hardening, and long-term security resilience.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Contact Section  */}
  <section className="contact-section section-padding" id="contact">
    <div className="wrap">
      <div className="contact-wrapper">
        <div className="contact-left reveal-3d">
          <span className="section-tag">Start a Conversation</span>
          <h2>Let's work on something that matters.</h2>
          <p className="contact-lead">
            Whether you need a security assessment, have a research collaboration in mind, or want to build a security-focused technology solution, we'd like to hear from you.
          </p>

          <div className="project-prompt-box">
            <h4 className="project-prompt-title">Have a project in mind?</h4>
            <p className="project-prompt-text">
              Tell us what you're working on, what you're trying to secure, or what you're trying to build.
            </p>
          </div>

          <div className="email-cards-grid">
            <a href="mailto:info@blackroot.com.np" className="email-card">
              <div className="email-card-info">
                <span className="email-card-label">General Inquiries</span>
                <span className="email-card-address">info@blackroot.com.np</span>
              </div>
              <div className="email-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
            </a>

            <a href="mailto:security@blackroot.com.np" className="email-card">
              <div className="email-card-info">
                <span className="email-card-label">Security Disclosures & Audits</span>
                <span className="email-card-address">security@blackroot.com.np</span>
              </div>
              <div className="email-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </a>

            <a href="mailto:partners@blackroot.com.np" className="email-card">
              <div className="email-card-info">
                <span className="email-card-label">Partnerships & Collaborations</span>
                <span className="email-card-address">partners@blackroot.com.np</span>
              </div>
              <div className="email-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
            </a>
          </div>
        </div>

        {/*  Interactive Contact Form  */}
        <div className="contact-form-card reveal-up reveal-delay-2">
          <h3 className="form-title">Send a Direct Message</h3>
          <p className="form-sub">Fill out your project details and our team will get back to you promptly.</p>

          <form id="contactForm" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contactName">Your Name / Organization</label>
              <input className="form-input" type="text" id="contactName" placeholder="e.g. Alex Vance / Enterprise Tech" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactEmail">Email Address</label>
              <input className="form-input" type="email" id="contactEmail" placeholder="name@company.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactCategory">Area of Interest</label>
              <select className="form-select" id="contactCategory">
                <option value="Security Assessment">Security Research & Penetration Testing</option>
                <option value="AI & Intelligent Systems">AI & Intelligent Systems / RAG</option>
                <option value="Security Engineering">Security Engineering & Hardening</option>
                <option value="Research Collaboration">Research Collaboration</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactMessage">Project Details</label>
              <textarea className="form-textarea" id="contactMessage" placeholder="Tell us what you're working on, what you're trying to secure, or what you're trying to build..." required></textarea>
            </div>

            <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}} type="submit">
              <span>Start a Conversation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

{/*  Interactive Modal  */}
<InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


{/*  Site Footer  */}

    </main>
  );
}
