import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [dots, setDots] = useState([]);

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
          "url": "https://blackroot.com.np",
          "logo": "https://blackroot.com.np/logo/blackroot-logo.png",
          "description": "BlackRoot Technologies is a security engineering and research company focused on vulnerability research, intelligent security systems, and offensive security engineering."
        }}
      />


{/*  Mobile Navigation Drawer  */}


<main>
  {/*  Hero Section  */}
  <section className="hero">
    <div className="wrap hero-inner">
      <div className="hero-copy">
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
          <button className="btn btn-primary open-modal-btn" type="button">
            <span>Start a Conversation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <a className="btn btn-secondary" href="#services">Explore Services</a>
        </div>
      </div>

      {/*  Hero Graphic  */}
      <div className="hero-graphic">
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
        <div className="about-content">
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

        <div className="focus-pills-container">
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

  {/*  Services Section  */}
  <section className="services-section section-padding" id="services">
    <div className="wrap">
      <div className="section-header">
        <span className="section-tag">Capabilities & Practice Areas</span>
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          From offensive security assessments to custom AI systems, we help organizations identify vulnerabilities, build stronger security foundations, and engineer resilient technologies.
        </p>
      </div>

      <div className="services-grid">
        {/*  Service 1: Security Research & Penetration Testing  */}
        <div className="service-card">
          <div className="service-top">
            <span className="service-badge">Pillar I</span>
            <h3 className="service-card-title">Security Research & Penetration Testing</h3>
            <p className="service-card-desc">
              We assess applications, infrastructure, APIs, and systems to identify vulnerabilities before they become real-world security incidents.
            </p>

            <div className="service-sublist-title">Core Services</div>
            <div className="service-sublist">
              <div className="service-subitem">
                <img src="/services-icons/web-app-sec.png" alt="Web Application Security" className="subservice-icon" />
                <span>Web Application Security</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/api-sec.png" alt="API Security" className="subservice-icon" />
                <span>API Security</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/infrastructure-sec.png" alt="Infrastructure & Network Security" className="subservice-icon" />
                <span>Infrastructure & Network Security</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/vulnerability.png" alt="Vulnerability Research" className="subservice-icon" />
                <span>Vulnerability Research</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/offensive.png" alt="Offensive Security Assessments" className="subservice-icon" />
                <span>Offensive Security Assessments</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/testing-validation.png" alt="Security Testing & Validation" className="subservice-icon" />
                <span>Security Testing & Validation</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/security-reviews.png" alt="Security Reviews" className="subservice-icon" />
                <span>Security Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Service 2: AI & Intelligent Systems  */}
        <div className="service-card">
          <div className="service-top">
            <span className="service-badge">Pillar II</span>
            <h3 className="service-card-title">AI & Intelligent Systems</h3>
            <p className="service-card-desc">
              We build practical AI-powered systems designed around real operational and technical requirements.
            </p>

            <div className="service-sublist-title">Core Services</div>
            <div className="service-sublist">
              <div className="service-subitem">
                <img src="/services-icons/custom-ai.png" alt="Custom AI Agents" className="subservice-icon" />
                <span>Custom AI Agents</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/ai-sec-solution.png" alt="AI-Powered Security Solutions" className="subservice-icon" />
                <span>AI-Powered Security Solutions</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/rag.png" alt="RAG" className="subservice-icon" />
                <span>Retrieval-Augmented Generation (RAG)</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/int-automation.png" alt="Intelligent Automation" className="subservice-icon" />
                <span>Intelligent Automation</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/sec-focus-ai.png" alt="Security-focused AI Research" className="subservice-icon" />
                <span>Security-focused AI Research</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/custom-software.png" alt="Custom AI & Software Systems" className="subservice-icon" />
                <span>Custom AI & Software Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Service 3: Security Engineering  */}
        <div className="service-card">
          <div className="service-top">
            <span className="service-badge">Pillar III</span>
            <h3 className="service-card-title">Security Engineering</h3>
            <p className="service-card-desc">
              Beyond identifying vulnerabilities, we help organizations build stronger security foundations.
            </p>

            <div className="service-sublist-title">Core Services</div>
            <div className="service-sublist">
              <div className="service-subitem">
                <img src="/services-icons/secure-archt-review.png" alt="Secure Architecture Reviews" className="subservice-icon" />
                <span>Secure Architecture Reviews</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/security-hardning.png" alt="Security Hardening" className="subservice-icon" />
                <span>Security Hardening</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/app-sec.png" alt="Application Security" className="subservice-icon" />
                <span>Application Security</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/security-eng.png" alt="Security Engineering" className="subservice-icon" />
                <span>Security Engineering</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/threat-analysis.png" alt="Threat & Attack Surface Analysis" className="subservice-icon" />
                <span>Threat & Attack Surface Analysis</span>
              </div>
              <div className="service-subitem">
                <img src="/services-icons/tooling-automation.png" alt="Security Tooling & Automation" className="subservice-icon" />
                <span>Security Tooling & Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Methodology Section  */}
  <section className="methodology-section section-padding" id="methodology">
    <div className="wrap">
      <div className="section-header">
        <span className="section-tag">Engineered Approach</span>
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Our methodology bridges the gap between deep adversarial research and practical software engineering.
        </p>
      </div>

      <div className="methodology-grid">
        <div className="step-card">
          <div className="step-number">01</div>
          <h4 className="step-title">Discovery & Reconnaissance</h4>
          <p className="step-desc">Deep technical analysis of target architecture, dependencies, and potential attack vectors.</p>
        </div>

        <div className="step-card">
          <div className="step-number">02</div>
          <h4 className="step-title">Offensive Assessment</h4>
          <p className="step-desc">Rigorous penetration testing and vulnerability research to expose security gaps before exploit.</p>
        </div>

        <div className="step-card">
          <div className="step-number">03</div>
          <h4 className="step-title">Intelligent Automation</h4>
          <p className="step-desc">Deploying tailored AI agents, RAG workflows, and security tools to automate detection and response.</p>
        </div>

        <div className="step-card">
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
        <div className="contact-left">
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
        <div className="contact-form-card">
          <h3 className="form-title">Send a Direct Message</h3>
          <p className="form-sub">Fill out your project details and our team will get back to you promptly.</p>

          <form id="contactForm" onSubmit={(e) => e.preventDefault()}>
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


{/*  Site Footer  */}

    </main>
  );
}
