import React, { useEffect, useRef, useState } from "react";

export default function Services() {
  return (
    <main>


{/*  Mobile Navigation Drawer  */}
<div className="mobile-drawer" id="mobileDrawer">
  <div className="mobile-drawer-header">
    <a className="brand" href="index.html">
      <img className="brand-mark" src="logo/blackroot-logo.png" alt="BlackRoot Logo" />
      <div className="brand-text">
        <span className="brand-name">BLACKROOT</span>
        <span className="brand-sub">TECHNOLOGIES</span>
      </div>
    </a>
    <button className="mobile-toggle" id="closeDrawerBtn" aria-label="Close Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <div className="mobile-nav">
    <a href="/about" className="mobile-link">About</a>
    <a href="/services" className="mobile-link">Services</a>
    <a href="/#methodology" className="mobile-link">Methodology</a>
    <a href="/#contact" className="mobile-link">Contact</a>
  </div>
  <div>
    <button className="btn btn-primary open-modal-btn" style={{width: '100%'}}>Start a Conversation →</button>
  </div>
</div>

<main>
  {/*  Page Hero  */}
  <section className="page-hero">
    <div className="wrap">
      <div className="page-hero-inner">
        <span className="eyebrow-badge">PRACTICE AREAS & CAPABILITIES</span>
        <h1 className="page-title">Services</h1>
        <p className="page-lead">
          From offensive security assessments to custom AI systems, we help organizations identify vulnerabilities, build stronger security foundations, and engineer resilient technologies.
        </p>
      </div>
    </div>
  </section>

  {/*  Detailed Service Pillars  */}
  <section className="section-padding" style={{background: 'var(--bg)'}}>
    <div className="wrap">

      {/*  Pillar 1: Security Research & Penetration Testing  */}
      <div className="pillar-detail-card" id="pentesting">
        <div className="pillar-header">
          <div className="pillar-header-info">
            <span className="eyebrow-badge" style={{marginBottom: '8px'}}>Pillar I</span>
            <h2>Security Research & Penetration Testing</h2>
            <p>We assess applications, infrastructure, APIs, and systems to identify vulnerabilities before they become real-world security incidents.</p>
          </div>
          <button className="btn btn-primary open-modal-btn">Request Assessment →</button>
        </div>

        <div style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-2)', margin: '0 0 20px 0'}}>Specialized Service Capabilities</div>
        <div className="subservices-grid">
          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/web-app-sec.png" alt="Web Application Security" className="subservice-icon" />
              Web Application Security
            </h4>
            <p className="subservice-desc">Comprehensive black-box & white-box pentesting targeting logic flaws, OWASP Top 10 vulnerabilities, and auth bypasses.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/api-sec.png" alt="API Security" className="subservice-icon" />
              API Security
            </h4>
            <p className="subservice-desc">Deep testing of GraphQL, REST, and gRPC endpoints for BOLA/IDOR issues, rate limit flaws, and token validation bugs.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/infrastructure-sec.png" alt="Infrastructure & Network" className="subservice-icon" />
              Infrastructure & Network
            </h4>
            <p className="subservice-desc">Internal and external perimeter testing, cloud architecture auditing, and lateral movement validation.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/vulnerability.png" alt="Vulnerability Research" className="subservice-icon" />
              Vulnerability Research
            </h4>
            <p className="subservice-desc">Targeted research into zero-day attack vectors, kernel bugs, and proprietary protocol security weaknesses.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/offensive.png" alt="Offensive Assessments" className="subservice-icon" />
              Offensive Assessments
            </h4>
            <p className="subservice-desc">Simulated adversary attacks evaluating organizational readiness, detection speed, and incident response.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/testing-validation.png" alt="Testing & Validation" className="subservice-icon" />
              Testing & Validation
            </h4>
            <p className="subservice-desc">Verification of patch effectiveness, fix validation, and re-testing of identified security vulnerabilities.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/security-reviews.png" alt="Security Reviews" className="subservice-icon" />
              Security Reviews
            </h4>
            <p className="subservice-desc">Holistic security audits combining code review, configuration analysis, and operational threat modeling.</p>
          </div>
        </div>
      </div>

      {/*  Pillar 2: AI & Intelligent Systems  */}
      <div className="pillar-detail-card" id="ai-systems">
        <div className="pillar-header">
          <div className="pillar-header-info">
            <span className="eyebrow-badge" style={{marginBottom: '8px'}}>Pillar II</span>
            <h2>AI & Intelligent Systems</h2>
            <p>We build practical AI-powered systems designed around real operational and technical requirements.</p>
          </div>
          <button className="btn btn-primary open-modal-btn">Build AI Solution →</button>
        </div>

        <div style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '20px'}}>Specialized Service Capabilities</div>
        <div className="subservices-grid">
          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/custom-ai.png" alt="Custom AI Agents" className="subservice-icon" />
              Custom AI Agents
            </h4>
            <p className="subservice-desc">Autonomous intelligent agents engineered to handle complex multi-step technical workflows and analysis.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/ai-sec-solution.png" alt="AI Security Solutions" className="subservice-icon" />
              AI Security Solutions
            </h4>
            <p className="subservice-desc">AI-assisted vulnerability triage, prompt injection defense mechanisms, and secure LLM deployment guards.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/rag.png" alt="RAG" className="subservice-icon" />
              Retrieval-Augmented Generation (RAG)
            </h4>
            <p className="subservice-desc">Enterprise knowledge retrieval systems with strict access controls, vector embeddings, and zero data leakage.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/int-automation.png" alt="Intelligent Automation" className="subservice-icon" />
              Intelligent Automation
            </h4>
            <p className="subservice-desc">Streamlining technical ops, security monitoring, and report synthesis with reliable AI orchestration.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/sec-focus-ai.png" alt="Security-focused AI Research" className="subservice-icon" />
              Security-Focused AI Research
            </h4>
            <p className="subservice-desc">Investigating AI model vulnerabilities, data poisoning risks, and adversarial machine learning defenses.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/custom-software.png" alt="Custom Software Systems" className="subservice-icon" />
              Custom Software Systems
            </h4>
            <p className="subservice-desc">Full-stack software engineering designed specifically around high reliability, scale, and data security.</p>
          </div>
        </div>
      </div>

      {/*  Pillar 3: Security Engineering  */}
      <div className="pillar-detail-card" id="security-engineering">
        <div className="pillar-header">
          <div className="pillar-header-info">
            <span className="eyebrow-badge" style={{marginBottom: '8px'}}>Pillar III</span>
            <h2>Security Engineering</h2>
            <p>Beyond identifying vulnerabilities, we help organizations build stronger security foundations.</p>
          </div>
          <button className="btn btn-primary open-modal-btn">Harden Infrastructure →</button>
        </div>

        <div style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '20px'}}>Specialized Service Capabilities</div>
        <div className="subservices-grid">
          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/secure-archt-review.png" alt="Secure Architecture Reviews" className="subservice-icon" />
              Secure Architecture Reviews
            </h4>
            <p className="subservice-desc">Threat modeling and architectural evaluation prior to system production deployment.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/security-hardning.png" alt="Security Hardening" className="subservice-icon" />
              Security Hardening
            </h4>
            <p className="subservice-desc">Systematic hardening of operating systems, container environments, and cloud infrastructure.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/app-sec.png" alt="Application Security" className="subservice-icon" />
              Application Security
            </h4>
            <p className="subservice-desc">Embedding secure SDLC practices, automated SAST/DAST pipelines, and developer security training.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/security-eng.png" alt="Security Engineering" className="subservice-icon" />
              Security Engineering
            </h4>
            <p className="subservice-desc">Custom security tool development, cryptography implementation, and secure protocol design.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/threat-analysis.png" alt="Threat & Attack Surface Analysis" className="subservice-icon" />
              Threat & Attack Surface Analysis
            </h4>
            <p className="subservice-desc">Continuous mapping of external digital assets, exposed APIs, and rogue infrastructure.</p>
          </div>

          <div className="subservice-card">
            <h4 className="subservice-title">
              <img src="/services-icons/tooling-automation.png" alt="Tooling & Automation" className="subservice-icon" />
              Tooling & Automation
            </h4>
            <p className="subservice-desc">Building automated security scanners, log analysis scripts, and incident remediation software.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  Engagement Models Section  */}
  <section className="engagement-section section-padding">
    <div className="wrap">
      <div className="section-header">
        <span className="section-tag">Flexible Collaboration</span>
        <h2 className="section-title">Engagement Models</h2>
        <p className="section-subtitle">
          How we structure partnerships with technology teams, engineering leaders, and enterprises.
        </p>
      </div>

      <div className="engagement-grid">
        <div className="engagement-card">
          <span className="engagement-badge">Project-Based</span>
          <h3 className="engagement-title">Targeted Pentesting</h3>
          <p className="engagement-desc">Scoped vulnerability assessment for web apps, mobile apps, or cloud API environments with actionable remediation reports.</p>
        </div>

        <div className="engagement-card">
          <span className="engagement-badge">Custom Dev</span>
          <h3 className="engagement-title">AI & Systems Dev</h3>
          <p className="engagement-desc">End-to-end design and building of specialized AI agents, RAG workflows, or custom security tooling tailored to your codebase.</p>
        </div>

        <div className="engagement-card">
          <span className="engagement-badge">Adversarial</span>
          <h3 className="engagement-title">Red Team Operations</h3>
          <p className="engagement-desc">Objective-based offensive simulations testing your detection, SOC response, and internal security defenses against real tactics.</p>
        </div>

        <div className="engagement-card">
          <span className="engagement-badge">Continuous</span>
          <h3 className="engagement-title">Retainer & Research</h3>
          <p className="engagement-desc">Ongoing vulnerability research, architectural review support, and continuous threat surface monitoring for your systems.</p>
        </div>
      </div>
    </div>
  </section>
</main>

{/*  Modal Dialog  */}
<div className="modal-backdrop" id="inquiryModal">
  <div className="modal-box">
    <button className="modal-close" id="closeModalBtn" aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div style={{marginBottom: '24px'}}>
      <span className="section-tag">Service Inquiry</span>
      <h3 style={{fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '800', margin: '6px 0 10px'}}>Start a Conversation</h3>
      <p style={{fontSize: '14.5px', color: 'var(--muted)', margin: '0'}}>
        Tell us what you're trying to secure, what AI system you want to build, or what security assessment you need.
      </p>
    </div>

    <form id="modalForm" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label className="form-label" htmlFor="modalEmail">Your Email</label>
        <input className="form-input" type="email" id="modalEmail" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="modalMessage">Project Details</label>
        <textarea className="form-textarea" id="modalMessage" placeholder="Describe your operational or security requirements..." required></textarea>
      </div>
      <button className="btn btn-primary" style={{width: '100%'}} type="submit">
        <span>Send Service Request →</span>
      </button>
    </form>
  </div>
</div>

{/*  Footer  */}

    </main>
  );
}
