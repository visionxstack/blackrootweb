import React from "react";

export default function InquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('modalName').value;
    const email = document.getElementById('modalEmail').value;
    const message = document.getElementById('modalMessage').value;
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
        body: JSON.stringify({ name, email, message })
      });
      btn.innerText = "Sent Successfully!";
      setTimeout(() => {
        btn.innerText = originalText;
        onClose();
      }, 1500);
    } catch (err) {
      btn.innerText = "Error Sending!";
      setTimeout(() => btn.innerText = originalText, 3000);
    }
  };

  return (
<div className="modal-backdrop active" id="inquiryModal">
  <div className="modal-box">
    <button className="modal-close" onClick={onClose} aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div style={{marginBottom: "24px"}}>
      <span className="section-tag">Direct Inquiry</span>
      <h3 style={{fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: "800", margin: "6px 0 10px"}}>Start a Conversation</h3>
      <p style={{fontSize: "14.5px", color: "var(--muted)", margin: "0"}}>
        Have a project in mind? Tell us what you're working on, what you're trying to secure, or what you're trying to build.
      </p>
    </div>

    <form id="modalForm" onSubmit={handleModalSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="modalName">Your Name</label>
        <input className="form-input" type="text" id="modalName" placeholder="Alex Vance" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="modalEmail">Your Email</label>
        <input className="form-input" type="email" id="modalEmail" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="modalMessage">What are you looking to build or secure?</label>
        <textarea className="form-textarea" id="modalMessage" placeholder="Describe your operational or security goals..." required></textarea>
      </div>
      <button className="btn btn-primary" style={{width: "100%"}} type="submit">
        <span>Send Inquiry →</span>
      </button>
    </form>
  </div>
</div>
  );
}
