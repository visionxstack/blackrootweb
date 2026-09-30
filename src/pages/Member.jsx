import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import styles from './Member.module.css';
import * as LucideIcons from 'lucide-react';

export default function Member() {
  const { name } = useParams();
  const key = (name || '').replace('.html', '').replace('-kc', '').replace('-lohani', '').replace('-poudel', '').toLowerCase();
  const member = portfolioData[key] || portfolioData[name] || portfolioData['vision'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  const IconComponent = ({ name }) => {
    const Icon = LucideIcons[name];
    return Icon ? <Icon size={20} /> : <LucideIcons.Award size={20} />;
  };

  return (
    <div className={styles.memberPage}>
      {/* Nav Crumb */}
      <div className={styles.navCrumb}>
        <div className={styles.wrap}>
          <Link to="/about" className={styles.crumbLink}>
            <LucideIcons.ArrowLeft size={14} />
            <span>Back to BlackRoot Technologies</span>
          </Link>
        </div>
      </div>

      {/* Navigation Header */}
      <header className={styles.navHeader}>
        <div className={styles.wrap}>
          <Link to="/" className={styles.brand}>
            <div className={styles.mark}>{member.initials || 'BR'}</div>
            <div className={styles.brandId}>
              <span className={styles.brandName}>{member.name}</span>
              <span className={styles.brandSub}>{member.brandSub}</span>
            </div>
          </Link>

          <nav className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.navActions}>
            <a href="#" className={`${styles.btn} ${styles.btnGhost}`}>Resume</a>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>Get in touch</a>
          </div>
        </div>
      </header>

      <main className={styles.wrap}>
        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>
                <span>Portfolio, 2026</span>
                <span className={styles.eyebrowLine}></span>
              </div>

              <div className={styles.badge}>
                <LucideIcons.Crown size={14} />
                <span>{member.roleLabel || member.role}</span>
              </div>

              <h1 className={styles.heroName}>{member.name}</h1>

              {member.focusTags && (
                <div className={styles.roleTags}>
                  {member.focusTags.map((tag, idx) => (
                    <span key={idx} className={styles.roleTag}>{tag}</span>
                  ))}
                </div>
              )}

              <p className={styles.heroBio}>{member.heroBio}</p>

              <div className={styles.ctaRow}>
                <a href="#achievements" className={`${styles.btn} ${styles.btnPrimary}`}>
                  <span>View achievements</span>
                  <LucideIcons.ArrowRight size={16} />
                </a>
                <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>Contact me</a>
              </div>

              <div className={styles.socialRow}>
                {member.githubUrl && member.githubUrl !== '#' && (
                  <a href={member.githubUrl} target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z"/></svg>
                  </a>
                )}
                {member.linkedinUrl && member.linkedinUrl !== '#' && (
                  <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.6H3.5V21h3.4V8.6zM5.2 3c-1.2 0-2 .8-2 1.9 0 1 .8 1.9 2 1.9 1.2 0 2-.9 2-1.9C7.2 3.8 6.4 3 5.2 3zM21 21v-6.8c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.1-3.5 1.9V8.6H9.6c0 .1 0 12 0 12H13v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V21H21z"/></svg>
                  </a>
                )}
                <a href={`mailto:${member.email}`} className={styles.socialBtn} aria-label="Email">
                  <LucideIcons.Mail size={18} />
                </a>
              </div>
            </div>

            {/* Photo Frame & Floating Chips */}
            <div className={styles.heroPhoto}>
              <div className={styles.photoFrame}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ objectPosition: member.imagePosition || 'center center' }}
                />
              </div>
              {member.chipBL && (
                <div className={`${styles.floatChip} ${styles.chipBL}`}>
                  <div className={styles.chipK}>{member.chipBL.k}</div>
                  <div className={styles.chipV}>{member.chipBL.v}</div>
                </div>
              )}
              {member.chipTR && (
                <div className={`${styles.floatChip} ${styles.chipTR}`}>
                  <div className={styles.chipK}>{member.chipTR.k}</div>
                  <div className={styles.chipV}>{member.chipTR.v}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 01 / About me */}
        <section className={styles.section} id="about">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>01</span>
            <h2>About me</h2>
          </div>

          <div className={styles.aboutBody}>
            {typeof member.bio === 'string' ? (
              member.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))
            ) : (
              <p>{member.bio}</p>
            )}
          </div>

          {member.stats && (
            <div className={styles.statRow}>
              {member.stats.map((st, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statNum}>{st.num}</div>
                  <div className={styles.statLbl}>{st.lbl}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 02 / Skills */}
        {member.skillBars && (
          <section className={styles.section} id="skills">
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>02</span>
              <h2>Skills</h2>
            </div>

            <div className={styles.skillGrid}>
              {member.skillBars.map((sk, i) => (
                <div key={i} className={styles.skillItem}>
                  <div className={styles.skillTop}>
                    <span>{sk.title}</span>
                    <span>{sk.pct}</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: sk.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 03 / Achievements */}
        {member.achievements && (
          <section className={styles.section} id="achievements">
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>03</span>
              <h2>Achievements</h2>
            </div>

            <div className={styles.achieveGrid}>
              {member.achievements.map((ach, i) => (
                <div key={i} className={styles.achieveCard}>
                  <div className={styles.achieveIcon}>
                    <IconComponent name={ach.iconName} />
                  </div>
                  <h3 className={styles.achieveTitle}>{ach.title}</h3>
                  <p className={styles.achieveSub}>{ach.sub || ach.l1}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 04 / Get in touch */}
        <section className={styles.section} id="contact">
          <div className={styles.sectionHead}>
            <span className={styles.sectionNum}>04</span>
            <h2>Get in touch</h2>
          </div>

          <div className={styles.contactGrid}>
            <div>
              <p className={styles.contactLead}>
                Open to security research, applied engineering, or direct collaboration conversations.
              </p>
              <ul className={styles.contactInfo}>
                <li>
                  <LucideIcons.Mail size={18} />
                  <span>{member.email}</span>
                </li>
                <li>
                  <LucideIcons.Phone size={18} />
                  <span>Available on request</span>
                </li>
                <li>
                  <LucideIcons.MapPin size={18} />
                  <span>Kathmandu, Nepal</span>
                </li>
              </ul>
            </div>

            <form className={styles.formCard} onSubmit={(e) => e.preventDefault()}>
              <input type="text" className={styles.inputField} placeholder="Your name" required />
              <input type="email" className={styles.inputField} placeholder="your@email.com" required />
              <textarea className={styles.textareaField} placeholder="Message" required></textarea>
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} style={{ justifyContent: 'center' }}>
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <p>{member.name} — part of the team at BlackRoot Technologies</p>
        </div>
      </footer>
    </div>
  );
}
