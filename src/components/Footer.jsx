import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="site-footer">
  <div className="wrap footer-inner">
    <div className="footer-top">
      <div className="footer-brand">
        <a className="brand" href="#">
          <img className="brand-mark" src="logo/blackroot-logo.png" alt="BlackRoot Technologies Logo" />
          <div className="brand-text">
            <span className="brand-name" style={{color: '#fff'}}>BLACKROOT</span>
            <span className="brand-sub" style={{color: '#8b9098'}}>TECHNOLOGIES</span>
          </div>
        </a>
        <p className="footer-desc">
          We engineer security for systems built to matter.
        </p>
        <div className="social-links" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <a href="https://linkedin.com/company/blackroot-tech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#8b9098', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8b9098'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://x.com/blackrootnepal" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" style={{ color: '#8b9098', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8b9098'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com/blackroot.tech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#8b9098', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8b9098'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>

      <div className="footer-nav-group">
        <div>
          <div className="footer-col-title">Navigation</div>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/#methodology">Methodology</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links">
            <Link to="/services#pentesting">Penetration Testing</Link>
            <Link to="/services#ai-systems">AI & Intelligent Systems</Link>
            <Link to="/services#security-engineering">Security Engineering</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Contact Channels</div>
          <div className="footer-links">
            <a href="mailto:info@blackroot.com.np">info@blackroot.com.np</a>
            <a href="mailto:security@blackroot.com.np">security@blackroot.com.np</a>
            <a href="mailto:partners@blackroot.com.np">partners@blackroot.com.np</a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div>© 2026 BlackRoot Technologies. All rights reserved.</div>
      <div>Security Research · Intelligent Systems · Security Engineering</div>
    </div>
  </div>
</footer>
  );
}
