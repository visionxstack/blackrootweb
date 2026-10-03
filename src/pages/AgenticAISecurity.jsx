import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import InquiryModal from "../components/InquiryModal";

export default function AgenticAISecurity() {
  const visualRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 3;
    const rotateY = (x / rect.width) * 3;
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="agentic-page">
      <SEO
        title="Agentic AI Security Research | BlackRoot Technologies"
        description="BlackRoot’s agentic security system is designed to investigate applications like a security researcher — discovering attack surfaces, forming hypotheses, testing them, correlating evidence, and validating exploitable behavior."
        url="/agentic-ai"
      />

      {/* 1. HERO */}
      <section className="page-hero agentic-hero animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 className="page-title" style={{ fontSize: "56px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.1", marginBottom: "24px" }}>
              An AI Security Researcher That Investigates.
            </h1>
            <p className="page-lead" style={{ fontSize: "18px", color: "var(--muted)", lineHeight: "1.65", marginBottom: "24px" }}>
              BlackRoot’s agentic security system is designed to investigate applications like a security researcher — discovering attack surfaces, forming hypotheses, testing them, correlating evidence, and validating exploitable behavior.
            </p>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.05em", color: "var(--purple)", padding: "8px 16px", background: "var(--purple-light)", borderRadius: "20px" }}>
                Agentic Security Research • Autonomous Investigation • Evidence-Driven Validation
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bg-viz">
           <div className="viz-circle circle-1"></div>
           <div className="viz-circle circle-2"></div>
           <div className="viz-circle circle-3"></div>
        </div>
      </section>

      {/* 2. WHAT IT DOES */}
      <section className="section-padding animate-on-scroll" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
         <div className="wrap">
            <div className="section-header center-align" style={{ marginBottom: "60px" }}>
               <h2 className="section-title">From Attack Surface to Confirmed Finding</h2>
            </div>
            
            <div className="connected-points points-timeline">
               <div className="connecting-line"></div>
               <div className="animated-progress-line"></div>
               
               {[
                 { title: "DISCOVER", desc: "Maps domains, hosts, endpoints, parameters, technologies, and application behavior." },
                 { title: "UNDERSTAND", desc: "Builds context around endpoints, objects, identities, trust boundaries, and relationships." },
                 { title: "HYPOTHESIZE", desc: "Generates security hypotheses from observed application behavior rather than relying only on predefined signatures." },
                 { title: "TEST", desc: "Executes controlled security tests and exploitation attempts within the authorized scope." },
                 { title: "VALIDATE", desc: "Correlates responses, evidence, and reproducible behavior before promoting a hypothesis into a confirmed finding." }
               ].map((pt, i) => (
                 <div key={i} className={`point-node pt-${i}`}>
                    <div className="point-dot">{i+1}</div>
                    <h4 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '10px' }}>{pt.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5' }}>{pt.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. LIVE INVESTIGATION VISUALIZATION */}
      <section className="section-padding investigation-section animate-on-scroll">
        <div className="wrap agentic-grid-2col" style={{ alignItems: 'center' }}>
          {/* Left Side: The Graph */}
          <div className="attack-surface-container attack-surface-responsive">

            <svg className="connection-lines" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
               {/* Paths */}
               <path className="svg-path path-api1" d="M 500,300 L 300,150" />
               <path className="svg-path path-api2" d="M 500,300 L 700,150" />
               <path className="svg-path path-api3" d="M 500,300 L 200,400" />
               <path className="svg-path path-api4" d="M 500,300 L 500,100" />
               <path className="svg-path path-api5" d="M 500,300 L 800,400" />
               <path className="svg-path path-api6" d="M 500,300 L 500,500" />
               
               {/* Discovery particles */}
               <circle className="particle particle-1" cx="0" cy="0" r="4" fill="var(--blue)">
                 <animateMotion dur="2s" repeatCount="indefinite" path="M 500,300 L 300,150" />
               </circle>
               <circle className="particle particle-2" cx="0" cy="0" r="4" fill="var(--blue)">
                 <animateMotion dur="2.5s" repeatCount="indefinite" path="M 500,300 L 700,150" />
               </circle>
               
               {/* Test particles */}
               <circle className="particle particle-test" cx="0" cy="0" r="5" fill="var(--purple)">
                 <animateMotion dur="1.5s" repeatCount="indefinite" path="M 500,300 L 200,400" />
               </circle>
               <circle className="particle particle-test-2" cx="0" cy="0" r="5" fill="var(--purple)">
                 <animateMotion dur="1.8s" repeatCount="indefinite" path="M 500,300 L 800,400" />
               </circle>
               
               {/* Evidence loop back */}
               <circle className="particle particle-evidence" cx="0" cy="0" r="3" fill="var(--emerald)">
                 <animateMotion dur="2s" repeatCount="indefinite" path="M 200,400 L 500,300" />
               </circle>
               
               {/* Validation connections (curved) */}
               <path className="svg-path path-validate" d="M 300,150 Q 500,100 700,150" strokeDasharray="4" />
               <circle className="particle particle-validate" cx="0" cy="0" r="3" fill="var(--amber)">
                 <animateMotion dur="3s" repeatCount="indefinite" path="M 300,150 Q 500,100 700,150" />
               </circle>
            </svg>
            
            <div className="node target-node" style={{ top: '50%', left: '50%' }}>TARGET APPLICATION</div>
            
            <div className="node endpoint-node ep-1" style={{ top: '25%', left: '30%' }}>/api/users</div>
            <div className="node endpoint-node ep-2" style={{ top: '25%', left: '70%' }}>/api/users/{'{id}'}</div>
            <div className="node endpoint-node ep-3" style={{ top: '66.6%', left: '20%' }}>/api/profile/{'{id}'}</div>
            <div className="node endpoint-node ep-4" style={{ top: '16.6%', left: '50%' }}>/api/orders/{'{id}'}</div>
            <div className="node endpoint-node ep-5" style={{ top: '66.6%', left: '80%' }}>/api/auth/reset</div>
            <div className="node endpoint-node ep-6" style={{ top: '83.3%', left: '50%' }}>/api/account</div>
            
          </div>
          
          {/* Right Side: The Explanations */}
          <div className="investigation-stages-list">
            <span className="section-tag">INVESTIGATION FLOW</span>
            <h2 className="section-title" style={{ fontSize: "28px", marginBottom: "32px" }}>Real-Time Validation</h2>
            
            <div className="stages-vertical-list">
               {[
                 { title: "DISCOVERY", desc: "Mapping the live attack surface, including hidden endpoints and parameters." },
                 { title: "OBSERVATION", desc: "Analyzing normal application behavior, trust boundaries, and responses." },
                 { title: "HYPOTHESIS", desc: "Formulating potential vulnerability scenarios based on context." },
                 { title: "TEST", desc: "Executing precision probes without disrupting application stability." },
                 { title: "EVIDENCE", desc: "Capturing reproducible proofs of concept and state changes." },
                 { title: "CORRELATION", desc: "Linking related findings across multiple endpoints." },
                 { title: "VALIDATION", desc: "Confirming the vulnerability is exploitable and not a false positive." }
               ].map((st, i) => (
                  <div key={i} className={`stage-item stage-item-${i+1}`} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                     <div className="stage-index" style={{ width: '28px', height: '28px', flexShrink: 0, borderRadius: '50%', background: 'var(--purple-light)', color: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>{i+1}</div>
                     <div>
                        <div className="stage-title" style={{ fontSize: '15px', fontWeight: '800', color: 'var(--ink)', letterSpacing: '0.05em', marginBottom: '4px' }}>{st.title}</div>
                        <div className="stage-desc" style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>{st.desc}</div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. AGENTIC REASONING & 5. MULTI-AGENT SYSTEM */}
      <section className="section-padding reasoning-section animate-on-scroll" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="arch-loop-grid agentic-grid-2col">
            
            {/* 4. AGENTIC REASONING */}
            <div className="reasoning-block">
              <span className="section-tag">REASONING OVER SIGNATURES</span>
              <h2 className="section-title" style={{ fontSize: "28px", marginBottom: "16px" }}>Not Just Scanning. Investigating.</h2>
              <p style={{ fontSize: "15.5px", color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "32px" }}>
                Traditional scanners often evaluate isolated patterns. Our system is designed to maintain context across discovery, testing, exploitation, and validation so observations can become new hypotheses.
              </p>
              
              <div className="vertical-reasoning-graph">
                 <div className="vrg-line"></div>
                 {[
                   {name: "OBSERVE", color: "var(--ink)"}, 
                   {name: "UNDERSTAND", color: "var(--emerald)"}, 
                   {name: "HYPOTHESIZE", color: "var(--rose)"}, 
                   {name: "TEST", color: "var(--ink)"}, 
                   {name: "VERIFY", color: "var(--emerald)"}, 
                   {name: "CORRELATE", color: "var(--rose)"}
                 ].map((stage, i) => (
                    <div className="vrg-node" key={stage.name} style={{'--node-color': stage.color}}>
                       <div className={`vrg-dot vrg-dot-${i+1}`}></div>
                       <div className={`vrg-text vrg-text-${i+1}`}>{stage.name}</div>
                    </div>
                 ))}
              </div>
            </div>

            {/* 5. MULTI-AGENT SYSTEM */}
            <div className="agents-block">
              <span className="section-tag">MULTI-AGENT SYSTEM</span>
              <h2 className="section-title" style={{ fontSize: "28px", marginBottom: "16px" }}>Specialized Agents</h2>
              
              <div className="agent-network-viz" style={{ marginTop: '32px', position: 'relative' }}>
                 <div className="an-row">
                    <div className="an-node">RECON AGENT<span className="an-desc">Discovers and maps attack surface.</span></div>
                 </div>
                 <div className="an-flow">
                    <span className="an-stream">endpoints</span>
                    <svg height="40" width="20"><line x1="10" y1="0" x2="10" y2="40" stroke="var(--line)" strokeWidth="2" /><circle cx="10" cy="0" r="3" fill="var(--purple)"><animate attributeName="cy" values="0;40" dur="1.5s" repeatCount="indefinite" /></circle></svg>
                 </div>
                 
                 <div className="an-row">
                    <div className="an-node">ANALYSIS AGENT<span className="an-desc">Interprets behavior and generates hypotheses.</span></div>
                 </div>
                 <div className="an-flow">
                    <span className="an-stream">hypotheses</span>
                    <svg height="40" width="20"><line x1="10" y1="0" x2="10" y2="40" stroke="var(--line)" strokeWidth="2" /><circle cx="10" cy="0" r="3" fill="var(--purple)"><animate attributeName="cy" values="0;40" dur="1.5s" repeatCount="indefinite" /></circle></svg>
                 </div>
                 
                 <div className="an-row">
                    <div className="an-node">TESTING / EXPLOITATION<span className="an-desc">Execute targeted security tests.</span></div>
                 </div>
                 <div className="an-flow">
                    <span className="an-stream">evidence</span>
                    <svg height="40" width="20"><line x1="10" y1="0" x2="10" y2="40" stroke="var(--line)" strokeWidth="2" /><circle cx="10" cy="0" r="3" fill="var(--purple)"><animate attributeName="cy" values="0;40" dur="1.5s" repeatCount="indefinite" /></circle></svg>
                 </div>
                 
                 <div className="an-row">
                    <div className="an-node">VALIDATION AGENT<span className="an-desc">Correlates evidence and verifies findings.</span></div>
                 </div>
                 <div className="an-flow">
                    <span className="an-stream">confirmed</span>
                    <svg height="40" width="20"><line x1="10" y1="0" x2="10" y2="40" stroke="var(--line)" strokeWidth="2" /><circle cx="10" cy="0" r="3" fill="var(--purple)"><animate attributeName="cy" values="0;40" dur="1.5s" repeatCount="indefinite" /></circle></svg>
                 </div>
                 
                 <div className="an-row">
                    <div className="an-node">REPORTING AGENT<span className="an-desc">Transforms validated evidence into structured findings.</span></div>
                 </div>

                 {/* Feedback loops */}
                 <svg className="feedback-loops" style={{ position: 'absolute', top: '0', bottom: '0', left: '-40px', width: '40px', zIndex: 0 }}>
                    <path d="M 30,190 C -10,190 -10,100 30,100" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeDasharray="3" opacity="0.5" />
                    <circle cx="0" cy="0" r="2" fill="var(--purple)">
                       <animateMotion dur="2s" repeatCount="indefinite" path="M 30,190 C -10,190 -10,100 30,100" />
                    </circle>
                    
                    <path d="M 30,280 C -30,280 -30,190 30,190" fill="none" stroke="var(--emerald)" strokeWidth="1.5" strokeDasharray="3" opacity="0.5" />
                    <circle cx="0" cy="0" r="2" fill="var(--emerald)">
                       <animateMotion dur="2s" repeatCount="indefinite" path="M 30,280 C -30,280 -30,190 30,190" />
                    </circle>
                 </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECURITY TESTING CAPABILITIES & 8. EVIDENCE-FIRST VALIDATION */}
      <section className="section-padding capabilities-evidence-section animate-on-scroll">
         <div className="wrap agentic-grid-2col">
            
            {/* 6. CAPABILITIES */}
            <div>
               <span className="section-tag">COVERAGE FOCUS</span>
               <h2 className="section-title" style={{ fontSize: "28px", marginBottom: "24px" }}>Designed for Deep Security Testing</h2>
               <ul className="capabilities-list agentic-grid-2col-list">
                  {[
                     "Broken Access Control", "Cross Site Scripting", "Sql & NoSql Injection",
                     "Business Logic", "Supply chain Failure", "Cryptographic Failures",
                     "Remote Code Execution", "Server Side Injection", "Security Misconfigurations"
                  ].map(cap => (
                     <li key={cap} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {cap}
                     </li>
                  ))}
               </ul>
            </div>
            
            {/* 8. EVIDENCE-FIRST VALIDATION */}
            <div>
               <span className="section-tag">VERIFICATION</span>
               <h2 className="section-title" style={{ fontSize: "28px", marginBottom: "16px" }}>Evidence Before Findings</h2>
               <p style={{ fontSize: "15px", color: "var(--ink-soft)", marginBottom: "24px" }}>
                  The system treats security observations as hypotheses until reproducible technical evidence supports the finding. Evidence includes HTTP requests/responses, endpoint relationships, observed application behavior, reproduction steps, and impact validation.
               </p>
               
               <div className="evidence-flow-horizontal" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  {["Request", "Response", "Behavior", "Correlation", "Reproduction"].map(step => (
                     <React.Fragment key={step}>
                        <div className="ef-stage" style={{ fontSize: '12px', fontWeight: '700', padding: '6px 10px', background: 'var(--bg-soft)', borderRadius: '4px', border: '1px solid var(--line)' }}>{step}</div>
                        <div className="ef-arrow" style={{ color: 'var(--line)', fontSize: '12px' }}>→</div>
                     </React.Fragment>
                  ))}
                  <div className="ef-stage ef-finding" style={{ fontSize: '12px', fontWeight: '700', padding: '6px 10px', background: 'var(--purple-light)', color: 'var(--purple)', borderRadius: '4px', border: '1px solid rgba(87,10,188,0.2)' }}>Finding</div>
               </div>
            </div>

         </div>
      </section>

      {/* 7. REAL EXAMPLE — IDOR CHAIN */}
      <section className="section-padding real-output-section animate-on-scroll" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-header center-align" style={{ marginBottom: "60px" }}>
             <h2 className="section-title">From Information Disclosure to Account Takeover</h2>
             <p className="section-subtitle">
                The system can correlate individually observable weaknesses into a broader attack path when the evidence supports the relationship.
             </p>
          </div>
          
          <div className="example-chain-grid agentic-grid-chain">
             
             {/* The forming chain */}
             <div className="vertical-reasoning-graph" style={{ margin: "0 auto", padding: 0 }}>
                 <div className="fc-header" style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', marginBottom: '32px' }}>
                    <span className="fch-1" style={{'--fc-color': 'var(--blue)'}}>DISCOVER</span>
                    <span className="fch-arrow"> → </span>
                    <span className="fch-2" style={{'--fc-color': 'var(--rose)'}}>CONNECT</span>
                    <span className="fch-arrow"> → </span>
                    <span className="fch-3" style={{'--fc-color': 'var(--emerald)'}}>TEST</span>
                    <span className="fch-arrow"> → </span>
                    <span className="fch-4" style={{'--fc-color': 'var(--purple)'}}>VALIDATE</span>
                 </div>
                
                 <div className="vrg-line" style={{ top: '80px', bottom: '20px' }}></div>
                 
                 {[
                   { name: "Information Disclosure", color: "var(--blue)" },
                   { name: "User Identifier Discovered", color: "var(--rose)" },
                   { name: "IDOR / Unauthorized Object Access", color: "var(--emerald)" },
                   { name: "Account-Binding Weakness", color: "var(--purple)" },
                   { name: "Account Takeover", color: "var(--blue)", final: true }
                 ].map((node, i) => (
                    <div className="vrg-node" key={node.name} style={{'--fc-color': node.color, marginBottom: node.final ? '0' : '28px'}}>
                       <div className={`vrg-dot fcn-dot-${i+1}`}></div>
                       <div className={`vrg-text fcn-text-${i+1}`} style={{ fontWeight: node.final ? '900' : '800', fontSize: node.final ? '16px' : '15px' }}>{node.name}</div>
                    </div>
                 ))}
             </div>
             
             {/* The Output Image */}
             <div 
               className="product-visual-wrapper fc-image-reveal"
               ref={visualRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{ transform: transformStyle, transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}
             >
               <div className="product-visual-frame" style={{ boxShadow: "var(--shadow-lg)" }}>
                 <div className="visual-top-bar">
                   <div className="window-dots"><span className="dot dot-red"></span><span className="dot dot-yellow"></span><span className="dot dot-green"></span></div>
                   <div className="window-status-badge"><span className="status-dot"></span> Validated Vulnerability Chain</div>
                 </div>
                 <div className="visual-image-container">
                   <img src="/agent.png" alt="BlackRoot Autonomous AI Security Researcher Finding" className="product-visual-img" />
                 </div>
               </div>
             </div>
             
          </div>
        </div>
      </section>

      {/* 9. TECHNICAL FOUNDATION & 10. SCALE / INFRASTRUCTURE */}
      <section className="section-padding tech-foundation-section animate-on-scroll">
        <div className="wrap agentic-grid-2col">
          
          {/* 9 */}
          <div>
            <span className="section-tag">ARCHITECTURE</span>
            <h2 className="section-title" style={{ fontSize: "24px", marginBottom: "20px" }}>Built as an Agentic Security System</h2>
            <ul className="capabilities-list agentic-grid-2col-list">
               {["Agentic AI Workflows", "Security-Focused Models", "Specialized Agents", "Tool Orchestration", "Custom Security Harnesses", "Stateful Evidence Collection", "Parallel Agent Execution", "Automated Validation"].map(cap => (
                  <li key={cap} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: '600' }}>
                     <span style={{ width: '4px', height: '4px', background: 'var(--purple)', borderRadius: '50%' }}></span>{cap}
                  </li>
               ))}
            </ul>
          </div>
          
          {/* 10 */}
          <div>
            <span className="section-tag">INFRASTRUCTURE</span>
            <h2 className="section-title" style={{ fontSize: "24px", marginBottom: "20px" }}>Built for Compute-Intensive Security Research</h2>
            <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: "1.7" }}>
              Autonomous security research requires repeated reasoning, parallel testing, tool execution, evidence processing, and long-running investigation workflows. The system is designed to scale these workloads across capable compute infrastructure.
            </p>
          </div>

        </div>
      </section>

      {/* 11. FINAL VISUAL & CTA */}
      <section className="section-padding final-cta-section animate-on-scroll" style={{ padding: "120px 0", textAlign: "center", position: "relative", overflow: "hidden", background: "var(--btn-black)", color: "#fff" }}>
        <div className="wrap" style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: "2" }}>
          
          <div className="final-collapse-animation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
             {["ATTACK SURFACE", "DISCOVERY", "REASONING", "TESTING", "EVIDENCE", "VALIDATION", "CONFIRMED FINDING"].map((step, i, arr) => (
               <React.Fragment key={step}>
                 <div className={`fc-stage final-stage-${i+1}`} style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.05em', color: i === arr.length - 1 ? '#fff' : 'rgba(255,255,255,0.4)', background: i === arr.length - 1 ? 'var(--purple)' : 'transparent', padding: i === arr.length - 1 ? '6px 12px' : '0', borderRadius: '20px' }}>
                    {step}
                 </div>
                 {i < arr.length - 1 && <div className={`final-stage-arr-${i+1}`} style={{ color: 'rgba(255,255,255,0.2)' }}>↓</div>}
               </React.Fragment>
             ))}
          </div>

          <h2 className="section-title" style={{ fontSize: "48px", lineHeight: "1.1", margin: "40px 0", color: "#fff" }}>
            Investigate. Validate. Report.
          </h2>
          
          <Link to="/" className="btn btn-secondary" style={{ padding: "16px 32px", fontSize: "15px", borderRadius: "var(--radius-sm)", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
            Return to Homepage
          </Link>
        </div>
      </section>

    </main>
  );
}
