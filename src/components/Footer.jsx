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
          Applied Security Research · Offensive Security · Intelligent Engineering. Identifying vulnerabilities, strengthening infrastructure, and building practical technology solutions.
        </p>
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
      <div>Applied Security Research · Offensive Security · Intelligent Engineering</div>
    </div>
  </div>
</footer>
  );
}
