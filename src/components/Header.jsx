import React, { useState } from "react";
import { Link } from "react-router-dom";
import InquiryModal from "./InquiryModal";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" to="/">
            <img className="brand-mark" src="/logo/blackroot-logo.png" alt="BlackRoot Technologies Logo" />
            <div className="brand-text">
              <span className="brand-name">BLACKROOT</span>
              <span className="brand-sub">TECHNOLOGIES</span>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main Navigation">
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/#methodology">Methodology</Link>
            <button className="nav-link" onClick={() => setIsModalOpen(true)} style={{background: 'none', border: 'none'}}>Contact</button>
          </nav>

          <div className="header-actions">
            <button className="get-in-touch" type="button" onClick={() => setIsModalOpen(true)}>
              <span>Start a Conversation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>

            <button className="mobile-toggle" aria-label="Toggle Navigation" onClick={() => setIsMobileOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
      
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link className="brand" to="/" onClick={() => setIsMobileOpen(false)}>
            <img className="brand-mark" src="/logo/blackroot-logo.png" alt="BlackRoot Technologies Logo" />
          </Link>
          <button className="mobile-toggle" aria-label="Close Navigation" onClick={() => setIsMobileOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <nav className="mobile-nav">
          <Link to="/about" onClick={() => setIsMobileOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsMobileOpen(false)}>Services</Link>
          <Link to="/#methodology" onClick={() => setIsMobileOpen(false)}>Methodology</Link>
          <button onClick={() => {setIsMobileOpen(false); setIsModalOpen(true);}} style={{background:'none', border:'none', textAlign:'left', padding:0, fontFamily:'var(--font-display)', fontSize:'24px', fontWeight:'700', color:'var(--ink)'}}>Contact</button>
        </nav>
        <button className="btn btn-primary" onClick={() => {setIsMobileOpen(false); setIsModalOpen(true);}}>
          Start a Conversation
        </button>
      </div>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
