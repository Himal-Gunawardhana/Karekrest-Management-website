import React, { useState, useEffect } from 'react';
import { TrendingUp, FileText, ShieldCheck, Users, Briefcase, ArrowRight, ChevronDown, Menu, X, Phone, Mail, Droplets, Award, Target, CheckCircle2 } from 'lucide-react';
import './index.css';

const services = [
  { icon: <TrendingUp size={28}/>, title: "Strategic Management", items: ["Business planning","Project coordination","Organizational planning","Growth strategy","Stakeholder coordination","Performance tracking"] },
  { icon: <FileText size={28}/>, title: "Administrative Support", items: ["Documentation systems","Records organization","Reporting support","Vendor coordination","Contract administration"] },
  { icon: <ShieldCheck size={28}/>, title: "Compliance Coordination", items: ["Compliance readiness planning","Documentation control","Training documentation","Internal review preparation","Policy & procedure development"] },
  { icon: <Users size={28}/>, title: "Workforce Development", items: ["Training plan development","Employee onboarding systems","Workforce readiness planning","Compliance training coordination","Skills development support"] },
  { icon: <Briefcase size={28}/>, title: "Operational Excellence", items: ["Process improvement","Workflow development","Internal audit preparation","CAPA support","Root cause analysis","Continuous improvement"] },
];

const consulting = [
  { title: "Compliance Readiness", items: ["HACCP, GMP, FSMA readiness","OSHA documentation awareness","Inspection preparation","Compliance gap assessments"] },
  { title: "Quality Systems", items: ["SOP development","CAPA system development","Internal audit preparation","Quality manual development"] },
  { title: "Manufacturing Readiness", items: ["Facility readiness planning","Production workflow documentation","Supplier qualification support","Traceability system support"] },
  { title: "Healthcare Operations", items: ["Policy development support","Documentation system support","Quality improvement support","Workforce training support"] },
  { title: "Business Development", items: ["Due diligence preparation","Data room organization","Lender-readiness support","Economic development packages"] },
  { title: "Export Readiness & Market Access", items: ["U.S. market entry planning","Canadian market entry planning","Export readiness assessments","Product commercialization planning","Packaging readiness guidance","Labeling readiness guidance","Supply chain planning","Documentation systems","Quality system awareness","Food safety readiness awareness","Manufacturing readiness planning","Distribution strategy support","Trade show preparation","Buyer outreach preparation","Due diligence preparation"], clients: ["Food processors","Agricultural processors","Beverage companies","Spice exporters","Herbal product companies","Charcoal producers","Agricultural cooperatives","Manufacturers","Small and growing businesses"] },
  { title: "International Business Development Support", items: ["Strategic planning","Market evaluation","Operational readiness","Business planning","Documentation systems","Risk awareness","Investor readiness","Data room preparation","Capital readiness support","Workforce development planning"] },
];

const compliance_items = ["Documentation accuracy","Regulatory awareness","Risk reduction","Workforce accountability","Quality systems","Traceability","Internal auditing","Corrective action","Continuous improvement"];

const training_categories = [
  { title: "Food Safety & Regulatory", items: ["HACCP Fundamentals","Advanced HACCP Training","Managing HACCP Essentials","Managing HACCP Essentials (FDA Perspective)","FSPCA Preventive Controls Qualified Individual (PCQI)","FSPCA Food Defense Courses","Animal Food CGMP","Good Manufacturing Practices (GMP)"] },
  { title: "Quality Systems", items: ["ISO 9001 Foundations","ISO 9001 Internal Auditor Training","CAPA Management","Root Cause Analysis"] },
  { title: "Continuous Improvement", items: ["Lean Six Sigma Yellow Belt"] },
  { title: "Workplace Safety", items: ["OSHA 30 General Industry","OSHA Injury & Illness Recordkeeping"] },
  { title: "Environmental & Sustainability", items: ["ISO 14001 Foundations","ESG Reporting","Sustainability Management","Circular Economy"] },
  { title: "Operations & Supply Chain", items: ["Supply Chain Management","Operations Management"] },
  { title: "Water Industry", items: ["Water Treatment Fundamentals","Bottled Water Industry Training"] },
  { title: "Business & Project Management", items: ["Financial Accounting","Project Management Training","Google Project Management"] }
];

const industry_engagement = ["Lenders", "Investors", "USDA Reviewers", "SBA Reviewers", "City Officials", "State Economic Development Officials", "Manufacturing Partners", "Operating Companies", "Clients"];


const faqs = [
  { q: "What does KareKRest Management LLC do?", a: "KareKRest Management LLC provides management, compliance coordination, consulting, workforce development, documentation support, project coordination, and operational excellence services." },
  { q: "Does KareKRest manufacture products?", a: "No. KareKRest Management LLC does not directly manufacture products. Manufacturing and operating activities are conducted by separate operating companies." },
  { q: "What industries does KareKRest support?", a: "The company supports manufacturing, food and beverage, healthcare, agriculture, project development, and other regulated or compliance-focused businesses." },
  { q: "What is Project Spring?", a: "Project Spring is a phased manufacturing and economic development initiative. Phase 1 is Salem Purified Water LLC." },
  { q: "Does KareKRest provide legal or engineering advice?", a: "No. KareKRest Management LLC does not provide legal, engineering, accounting, or professional licensing services." },
  { q: "How can clients contact KareKRest Management?", a: "Call (573) 509-5373 or email admin@karekrestmgmt.com." },
  { q: "Does KareKRest Management help African companies export to the United States?", a: "Yes. KareKRest Management LLC provides export readiness, documentation support, operational planning, quality systems awareness, and market-entry consulting for businesses seeking access to North American markets." },
  { q: "Does KareKRest Management help companies export to Canada?", a: "Yes. The company supports export readiness and market-entry planning for businesses evaluating opportunities in Canada." },
  { q: "Does KareKRest Management provide consulting for U.S. companies?", a: "Yes. Services are available to U.S.-based businesses seeking support in compliance readiness, workforce development, quality systems, operational excellence, and strategic planning." },
  { q: "Does KareKRest Management provide regulatory approvals?", a: "No. KareKRest Management LLC does not issue permits, licenses, certifications, regulatory approvals, legal opinions, or engineering approvals." }
];

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className={`accordion-trigger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {title}
        <ChevronDown size={20} />
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-body-inner">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = ['about','services','consulting','compliance','industry','faq'];

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''} style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, padding: scrolled ? '12px 0' : '22px 0', background: scrolled ? undefined : 'transparent', transition:'all .35s ease' }}>
        <div className="max-w-7xl" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <button onClick={() => goto('home')} style={{ display:'flex', alignItems:'center', background:'none', border:'none', cursor:'pointer', padding: 0 }}>
            <div style={{ background: '#fff', padding: '6px 16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/karekrestlogo.svg" alt="KareKRest Logo" style={{ height: 52, width: 'auto', objectFit: 'contain' }} />
            </div>
          </button>

          <div style={{ display:'flex', gap:32, alignItems:'center' }} className="desktop-nav">
            {navItems.map(id => (
              <button key={id} onClick={() => goto(id)} style={{ background:'none', border:'none', cursor:'pointer', fontWeight:600, fontSize:'.88rem', textTransform:'uppercase', letterSpacing:'.06em', color: scrolled ? '#5A6A7E' : 'rgba(255,255,255,.8)', transition:'color .2s' }}
                onMouseEnter={e => e.target.style.color='#1A5FD4'} onMouseLeave={e => e.target.style.color= scrolled ? '#5A6A7E' : 'rgba(255,255,255,.8)'}>
                {id}
              </button>
            ))}
            <button onClick={() => goto('contact')} style={{ padding:'11px 26px', borderRadius:999, background:'linear-gradient(135deg,var(--amethyst),var(--coral))', color:'#fff', border:'none', cursor:'pointer', fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'.9rem', boxShadow:'0 6px 20px rgba(59,130,246,.4)', transition:'all .3s' }}
              onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 10px 28px rgba(96,165,250,.5)'; }}
              onMouseLeave={e => { e.target.style.transform=''; e.target.style.boxShadow='0 6px 20px rgba(59,130,246,.4)'; }}>
              Contact Us
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display:'none', background:'none', border:'none', cursor:'pointer', color: scrolled ? '#07213F' : '#fff' }} className="mobile-btn">
            {mobileOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>

        {mobileOpen && (
          <div style={{ background:'#fff', borderTop:'1px solid #eee', padding:'16px 24px', display:'flex', flexDirection:'column', gap:4 }}>
            {[...navItems,'contact'].map(id => (
              <button key={id} onClick={() => goto(id)} style={{ textAlign:'left', padding:'14px 12px', background:'none', border:'none', cursor:'pointer', fontWeight:600, fontSize:'.95rem', textTransform:'uppercase', letterSpacing:'.06em', color:'#5A6A7E', borderRadius:8 }}>
                {id}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl" style={{ position:'relative', zIndex:1, width: '100%' }}>
          <div className="hero-badge" style={{ marginBottom:28 }}>
            <span className="dot"></span>
            Premium Operations Group
          </div>
          <h1 className="hero-title" style={{ marginBottom:24 }}>
            Management,<br/>
            Compliance &<br/>
            <span className="gradient-text">Operational Excellence.</span>
          </h1>
          <p className="hero-desc" style={{ marginBottom:44 }}>
            Supporting businesses, manufacturing projects, regulated operations, and affiliated operating companies through compliance readiness, documentation systems, workforce development, and strategic project support.
          </p>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            <button className="btn-hero-primary" onClick={() => goto('services')}>
              View Our Services <ArrowRight size={18}/>
            </button>
            <button className="btn-hero-ghost" onClick={() => goto('contact')}>
              Contact KareKRest Management LLC
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="max-w-7xl">
          <div className="grid-2">
            <div style={{ position:'relative' }}>
              <div className="about-img-wrapper">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" alt="Operations"/>
              </div>
              <div className="about-float-card">
                <Target size={36} color="#3B82F6" style={{ marginBottom:12 }}/>
                <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, color:'#07213F', fontSize:'1rem', marginBottom:6 }}>Centralized Support</div>
                <div style={{ fontSize:'.82rem', color:'#5A6A7E', lineHeight:1.6 }}>Structured management, compliance readiness &amp; operational improvement systems.</div>
              </div>
            </div>

            <div>
              <div className="section-label">About Us</div>
              <h2 className="section-title" style={{ marginBottom:24 }}>About KareKRest<br/>Management LLC</h2>
              <p style={{ color:'#5A6A7E', lineHeight:1.8, marginBottom:20, fontSize:'1.05rem' }}>
                KareKRest Management LLC is a management, compliance, consulting, workforce development, and operational excellence company supporting affiliated operating companies, manufacturing initiatives, regulated businesses, and external clients.
              </p>
              <div className="quote-block" style={{ marginBottom:32 }}>
                KareKRest Management LLC does not directly conduct manufacturing, food processing, or retail sales. We provide centralized support services to operating companies seeking structured management and compliance readiness systems.
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                {["Management support","Compliance readiness","Quality systems","Documentation control","Workforce development","Project coordination"].map(item => (
                  <div key={item} className="feature-pill">
                    <CheckCircle2 size={15} color="#00E5FF"/> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="max-w-7xl">
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>What We Do</div>
            <h2 className="section-title" style={{ marginBottom:16 }}>Management & Operational<br/>Support Services</h2>
            <p className="section-desc" style={{ margin:'0 auto' }}>Comprehensive support structures designed to elevate operational efficiency, ensure compliance, and empower workforce development.</p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2rem' }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ flex:'1 1 300px', maxWidth:'400px' }}>
                <div className="service-icon-wrap">{s.icon}</div>
                <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#07213F', marginBottom:16 }}>{s.title}</h3>
                {s.items.map((item, j) => (
                  <div key={j} className="service-list-item">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section id="consulting" className="consulting-section">
        <div className="max-w-7xl">
          <div style={{ display:'flex', flexDirection:'column', gap:'3rem' }}>
            <div style={{ maxWidth: '900px' }}>
              <div className="section-label" style={{ color:'#6BABFF' }}>Expert Guidance</div>
              <h2 style={{ fontFamily:'Sora,sans-serif', fontWeight:800, fontSize:'2.4rem', color:'#fff', lineHeight:1.15, marginBottom:20 }}>International Business, Compliance & Market Entry Consulting</h2>
              <p style={{ color:'rgba(255,255,255,.6)', lineHeight:1.8, marginBottom:16, fontSize:'1rem' }}>
                KareKRest Management LLC provides consulting, compliance coordination, operational improvement, workforce development, quality systems support, and project planning services to businesses operating in the United States and internationally.
              </p>
              <p style={{ color:'rgba(255,255,255,.6)', lineHeight:1.8, marginBottom:16, fontSize:'1rem' }}>
                The company specializes in helping organizations improve operational readiness, documentation systems, quality management practices, workforce development programs, compliance awareness, and strategic planning.
              </p>
              <p style={{ color:'rgba(255,255,255,.6)', lineHeight:1.8, marginBottom:32, fontSize:'1rem' }}>
                KareKRest Management LLC also supports businesses located in Africa and West Africa that are seeking to access, export to, or better understand U.S. and Canadian markets.
              </p>
              <div className="disclaimer-card" style={{ fontSize: '.8rem', lineHeight: 1.6 }}>
                KareKRest Management LLC provides consulting, management support, operational improvement assistance, compliance coordination, workforce development support, and project planning services. The company does not provide legal advice, engineering services, accounting services, customs brokerage services, regulatory approvals, or professional licensing services. Clients remain responsible for obtaining all required permits, certifications, inspections, licenses, and professional services applicable to their operations.
              </div>
            </div>
            
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'1.5rem', alignItems:'start' }}>
              {consulting.map((c, i) => (
                <div key={i} className="consulting-area-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h4>{c.title}</h4>
                  <ul style={{ flexGrow: 1 }}>{c.items.map((item,j) => <li key={j}>{item}</li>)}</ul>
                  {c.clients && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <strong style={{ color: '#fff', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>Target Clients:</strong>
                      <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
                        {c.clients.map((client, k) => <li key={k} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '4px' }}>{client}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section style={{ padding:'100px 0', background:'#fff' }}>
        <div className="max-w-7xl">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>Target Clients</div>
            <h2 className="section-title">Who We Help</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'2rem' }}>
            <div style={{ background:'#F7F9FF', padding:'32px', borderRadius:'16px', border:'1px solid rgba(26,95,212,.08)' }}>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#07213F', marginBottom:20 }}>United States</h3>
              <ul style={{ padding:0, margin:0, listStyle:'none' }}>
                {["Manufacturing companies","Food processors","Beverage companies","Healthcare organizations","Assisted living operators","Agricultural businesses","Startups","Economic development projects"].map((item,i) => (
                  <li key={i} style={{ display:'flex', alignItems:'start', gap:10, fontSize:'.9rem', color:'#5A6A7E', marginBottom:10 }}><CheckCircle2 size={16} color="#3B82F6" style={{flexShrink:0, marginTop:2}}/> {item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background:'#F7F9FF', padding:'32px', borderRadius:'16px', border:'1px solid rgba(26,95,212,.08)' }}>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#07213F', marginBottom:20 }}>Canada</h3>
              <ul style={{ padding:0, margin:0, listStyle:'none' }}>
                {["Food and beverage companies","Agricultural processors","Importers and distributors"].map((item,i) => (
                  <li key={i} style={{ display:'flex', alignItems:'start', gap:10, fontSize:'.9rem', color:'#5A6A7E', marginBottom:10 }}><CheckCircle2 size={16} color="#3B82F6" style={{flexShrink:0, marginTop:2}}/> {item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background:'#F7F9FF', padding:'32px', borderRadius:'16px', border:'1px solid rgba(26,95,212,.08)' }}>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#07213F', marginBottom:20 }}>Africa & West Africa</h3>
              <ul style={{ padding:0, margin:0, listStyle:'none' }}>
                {["Exporters","Agricultural processors","Food manufacturers","Beverage producers","Spice companies","Herbal product companies","Charcoal producers","Cooperatives","Small and medium-sized enterprises"].map((item,i) => (
                  <li key={i} style={{ display:'flex', alignItems:'start', gap:10, fontSize:'.9rem', color:'#5A6A7E', marginBottom:10 }}><CheckCircle2 size={16} color="#3B82F6" style={{flexShrink:0, marginTop:2}}/> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & TRAINING */}
      <section id="compliance" className="compliance-section">
        <div className="max-w-7xl">
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>Standards & Education</div>
            <h2 className="section-title" style={{ marginBottom:16 }}>Compliance &<br/>Professional Training</h2>
            <p className="section-desc" style={{ margin:'0 auto' }}>Developing practical compliance readiness systems and supporting continuous professional development.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem' }}>
            <div>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, color:'#07213F', fontSize:'1.4rem', marginBottom:24 }}>Compliance Philosophy</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
                {compliance_items.map((item,i) => (
                  <div key={i} className="compliance-tab" style={{ flex:'1 1 calc(50% - 10px)', minWidth:'200px' }}>
                    <div className="tab-icon"><CheckCircle2 size={18}/></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="training">
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, color:'#07213F', fontSize:'1.4rem', marginBottom:24 }}>Professional Training</h3>
              {training_categories.map((cat, i) => (
                <Accordion key={i} title={cat.title}>
                  <ul>
                    {cat.items.map((item,j) => <li key={j}>{item}</li>)}
                  </ul>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SPRING + WORKFORCE */}
      <section style={{ padding:'120px 0', background:'linear-gradient(180deg,#F7F9FF,#EEF3FF)' }}>
        <div className="max-w-7xl">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2.5rem' }}>
            <div className="project-card" style={{ display:'flex', flexDirection:'column' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:999, background:'rgba(0,229,255,.1)', color:'#00B8D4', fontSize:'.8rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:20, border:'1px solid rgba(0,229,255,.15)', alignSelf:'flex-start' }}>
                <Droplets size={14}/> Initiative
              </div>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:800, fontSize:'1.8rem', color:'#07213F', marginBottom:16 }}>Project Spring Support</h3>
              <p style={{ color:'#5A6A7E', lineHeight:1.75, marginBottom:28, flexGrow:1 }}>
                KareKRest Management LLC supports <strong>Project Spring</strong> — a phased manufacturing and economic development initiative beginning with <strong>Salem Purified Water LLC</strong>.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:'auto' }}>
                {["Project coordination","Compliance readiness","Workforce dev. planning","Vendor coordination","Documentation systems","Due diligence prep"].map((item,i)=>(
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:8, fontSize:'.88rem', fontWeight:600, color:'#07213F' }}>
                    <CheckCircle2 size={15} color="#3B82F6"/> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="workforce-card" style={{ display:'flex', flexDirection:'column' }}>
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:800, fontSize:'1.8rem', color:'#fff', marginBottom:12, position:'relative', zIndex:1 }}>Workforce Development</h3>
              <p style={{ color:'rgba(255,255,255,.6)', lineHeight:1.75, marginBottom:28, position:'relative', zIndex:1, flexGrow:1 }}>
                Trained employees reduce operational risk, improve compliance performance, and strengthen long-term business sustainability.
              </p>
              <div style={{ position:'relative', zIndex:1, marginTop:'auto' }}>
                {["Employee onboarding","Compliance training","Safety awareness","Manufacturing readiness","Leadership development","Skills development"].map((item,i)=>(
                  <div key={i} className="workforce-item">
                    <Target size={17} color="#60A5FA"/> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY ENGAGEMENT */}
      <section id="industry" style={{ padding:'120px 0', background:'#fff' }}>
        <div className="max-w-7xl">
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>Stakeholder Focus</div>
            <h2 className="section-title">Industry Engagement</h2>
            <p className="section-desc" style={{ margin:'16px auto 0' }}>Our compliance, management, and operational systems are designed to appeal to key evaluating organizations and stakeholders.</p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', maxWidth:'800px', margin:'0 auto' }}>
            {industry_engagement.map((org, i) => (
              <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 24px', background:'#F7F9FF', borderRadius:16, border:'1.5px solid rgba(26,95,212,.12)', fontWeight:600, color:'#07213F' }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'var(--amethyst)' }}></div>
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="max-w-7xl" style={{ maxWidth:800, margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>Questions & Answers</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq,i) => (
            <Accordion key={i} title={faq.q}>
              <p style={{ color:'#5A6A7E', lineHeight:1.75, fontSize:'.95rem', margin:0 }}>{faq.a}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="max-w-7xl">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div className="section-label" style={{ justifyContent:'center' }}>Get in Touch</div>
            <h2 className="section-title">Contact Us</h2>
          </div>
          <div className="contact-card" style={{ display:'grid', gridTemplateColumns:'2fr 3fr' }}>
            <div className="contact-left">
              <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:800, fontSize:'1.8rem', color:'#fff', marginBottom:12, position:'relative', zIndex:1 }}>Let's Connect</h3>
              <p style={{ color:'rgba(255,255,255,.55)', lineHeight:1.75, marginBottom:40, position:'relative', zIndex:1, fontSize:'.95rem' }}>
                Contact KareKRest Management LLC to discuss compliance, consulting, and operational excellence services.
              </p>
              <div style={{ position:'relative', zIndex:1 }}>
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Phone size={22}/></div>
                  <div>
                    <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,.4)', marginBottom:4, fontWeight:600 }}>Phone</div>
                    <div style={{ color:'#fff', fontWeight:700, fontSize:'1.1rem' }}>(573) 509-5373</div>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Mail size={22}/></div>
                  <div>
                    <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,.4)', marginBottom:4, fontWeight:600 }}>Email</div>
                    <div style={{ color:'#fff', fontWeight:700, fontSize:'.95rem' }}>admin@karekrestmgmt.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will be in touch shortly.'); }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:0 }}>
                  <div className="form-group">
                    <label className="label">Full Name *</label>
                    <input required type="text" className="input-field" placeholder="John Doe"/>
                  </div>
                  <div className="form-group">
                    <label className="label">Email Address *</label>
                    <input required type="email" className="input-field" placeholder="john@company.com"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label">Company / Organization</label>
                  <input type="text" className="input-field" placeholder="Your Company LLC"/>
                </div>
                <div className="form-group">
                  <label className="label">Message *</label>
                  <textarea required rows={5} className="input-field" style={{ resize:'vertical' }} placeholder="How can we help you?"/>
                </div>
                <button type="submit" className="submit-btn">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="max-w-7xl">
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:'3rem', marginBottom:48 }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', marginBottom:20 }}>
                <div style={{ background: '#fff', padding: '6px 16px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/karekrestlogo.svg" alt="KareKRest Logo" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
              <p style={{ color:'rgba(255,255,255,.4)', lineHeight:1.75, fontSize:'.9rem', maxWidth:360 }}>
                Management, Compliance, Consulting & Operational Excellence — supporting businesses, manufacturing projects, regulated operations, and affiliated operating companies.
              </p>
            </div>
            <div>
              <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, color:'rgba(255,255,255,.7)', fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:20 }}>Navigation</div>
              {['home','about','services','consulting','compliance','industry','faq','contact'].map(id=>(
                <button key={id} onClick={() => goto(id)} className="footer-link" style={{ textTransform:'capitalize' }}>{id}</button>
              ))}
            </div>
            <div>
              <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, color:'rgba(255,255,255,.7)', fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:20 }}>Contact</div>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <a href="tel:5735095373" style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(255,255,255,.5)', fontSize:'.88rem', textDecoration:'none' }}><Phone size={16} color="#1A5FD4"/> (573) 509-5373</a>
                <a href="mailto:admin@karekrestmgmt.com" style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(255,255,255,.5)', fontSize:'.88rem', textDecoration:'none', wordBreak:'break-all' }}><Mail size={16} color="#1A5FD4"/> admin@karekrestmgmt.com</a>
              </div>
            </div>
          </div>
          <div className="divider"/>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
            <p className="footer-disclaimer" style={{ maxWidth:'70%' }}>
              KareKRest Management LLC provides consulting, management support, operational improvement assistance, compliance coordination, workforce development support, and project planning services. The company does not provide legal advice, engineering services, accounting services, customs brokerage services, regulatory approvals, or professional licensing services. Clients remain responsible for obtaining all required permits, certifications, inspections, licenses, and professional services applicable to their operations.
            </p>
            <p className="footer-copy">&copy; {new Date().getFullYear()} KareKRest Management LLC. Owned by Paye Holdings LLC.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          nav > div { padding: 0 1.5rem !important; }
          .grid-2, .contact-card, section > div > .grid-2 { grid-template-columns: 1fr !important; }
          section[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}