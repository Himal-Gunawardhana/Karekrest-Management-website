const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

const pages = {
  'Home.jsx': `
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, TrendingUp, Users, Wrench } from 'lucide-react';

export default function Home() {
  const coreFocus = [
    "Compliance readiness", "Documentation control", "Quality systems", 
    "Workforce development", "Manufacturing readiness", "Operational improvement", 
    "Project coordination", "Risk management", "Business development"
  ];

  return (
    <div className="page-content">
      <section className="hero">
        <div className="container">
          <span className="hero-subtitle">Premium Operations Group</span>
          <h1>KareKRest Management LLC</h1>
          <h2>Management, Compliance, Consulting & Operational Excellence</h2>
          <p className="hero-description">
            Supporting businesses, manufacturing projects, regulated operations, and affiliated operating companies through compliance readiness, documentation systems, workforce development, quality systems, and strategic project support.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">View Our Services</Link>
            <Link to="/compliance" className="btn btn-outline-white">Compliance & Training</Link>
            <Link to="/contact" className="btn btn-outline-white">Contact KareKRest Management</Link>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="two-col-grid align-center">
            <div>
              <h3 className="section-title">Strategic Oversight & Operational Planning</h3>
              <p>
                KareKRest Management LLC provides management, compliance coordination, consulting, workforce development, documentation support, operational planning, and strategic oversight services for affiliated companies and external clients.
              </p>
              <p>The company supports businesses seeking stronger systems in:</p>
              <div className="grid-list mt-4">
                {coreFocus.map((item, idx) => (
                  <div key={idx} className="list-item">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-box">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" alt="Operational Planning" className="rounded-img shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h3 className="text-white">Our Operating Philosophy</h3>
          <p className="max-w-3xl mx-auto text-lg mt-4 text-white-80">
            KareKRest Management LLC is built around a compliance-first operating philosophy focused on accountability, documentation accuracy, workforce competency, continuous improvement, and long-term operational sustainability.
          </p>
        </div>
      </section>
    </div>
  );
}`,
  'About.jsx': `
import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

export default function About() {
  const focusAreas = [
    "Management support", "Compliance readiness", "Quality systems", 
    "Documentation control", "Workforce development", "Project coordination", 
    "Operational improvement", "Consulting services"
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>About KareKRest Management LLC</h1>
        </div>
      </header>

      <section className="section">
        <div className="container max-w-4xl">
          <p className="text-lg mb-4">
            <strong>KareKRest Management LLC</strong> is a management, compliance, consulting, workforce development, and operational excellence company supporting affiliated operating companies, manufacturing initiatives, regulated businesses, and external clients.
          </p>
          <p className="mb-5">
            The company provides centralized administrative support, compliance coordination, documentation systems, vendor coordination, workforce development support, project planning, and operational readiness services.
          </p>

          <div className="highlight-box bg-light mb-5 p-5 rounded-lg border-l-4 border-primary">
            <p className="mb-0">
              <strong>KareKRest Management LLC does not directly conduct</strong> manufacturing, food processing, bottled water production, dietary supplement manufacturing, industrial processing, or retail sales. Instead, the company provides support services to operating companies and clients that need structured management, compliance readiness, and operational improvement systems.
            </p>
          </div>

          <h3 className="mb-4 flex items-center gap-2"><Target className="text-primary"/> Core Focus Areas</h3>
          <div className="grid-list col-2">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="list-item">
                <CheckCircle className="text-primary" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Services.jsx': `
import React from 'react';
import { Briefcase, FileText, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: "Strategic Management Support",
      icon: <TrendingUp size={32} />,
      items: ["Business planning", "Project coordination", "Organizational planning", "Growth strategy", "Stakeholder coordination", "Performance tracking"]
    },
    {
      title: "Administrative Support",
      icon: <FileText size={32} />,
      items: ["Documentation systems", "Records organization", "Reporting support", "Vendor coordination", "Contract administration support"]
    },
    {
      title: "Compliance Coordination",
      icon: <ShieldCheck size={32} />,
      items: ["Compliance readiness planning", "Documentation control", "Training documentation", "Internal review preparation", "Policy and procedure development"]
    },
    {
      title: "Workforce Development",
      icon: <Users size={32} />,
      items: ["Training plan development", "Employee onboarding systems", "Workforce readiness planning", "Compliance training coordination", "Skills development support"]
    },
    {
      title: "Operational Excellence",
      icon: <Briefcase size={32} />,
      items: ["Process improvement", "Workflow development", "Internal audit preparation", "CAPA support", "Root cause analysis support", "Continuous improvement systems"]
    }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Management & Operational Support Services</h1>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container">
          <div className="services-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="service-card bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <div className="icon-wrapper bg-primary-light text-primary p-3 rounded-lg inline-block mb-4">
                  {cat.icon}
                </div>
                <h3 className="mb-3">{cat.title}</h3>
                <ul className="simple-list text-muted">
                  {cat.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Consulting.jsx': `
import React from 'react';

export default function Consulting() {
  const consultingAreas = [
    {
      title: "Compliance Readiness Consulting",
      items: ["HACCP readiness support", "GMP readiness support", "FSMA readiness support", "OSHA documentation awareness", "Inspection preparation support", "Compliance gap assessments"]
    },
    {
      title: "Quality Systems Consulting",
      items: ["SOP development", "Documentation control", "CAPA system development", "Root cause analysis support", "Internal audit preparation", "Quality manual development"]
    },
    {
      title: "Manufacturing Readiness Consulting",
      items: ["Facility readiness planning", "Production workflow documentation", "Training system development", "Supplier qualification support", "Traceability system support", "Operational planning"]
    },
    {
      title: "Healthcare Operations Consulting",
      items: ["Policy development support", "Documentation system support", "Quality improvement support", "Compliance readiness support", "Workforce training support"]
    },
    {
      title: "Business Development Consulting",
      items: ["Project planning", "Due diligence preparation", "Data room organization", "Lender-readiness support", "Economic development package support"]
    }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Consulting Services</h1>
        </div>
      </header>

      <section className="section">
        <div className="container max-w-5xl">
          <p className="text-lg mb-5">
            KareKRest Management LLC provides consulting support for businesses seeking to improve compliance readiness, documentation systems, workforce development, quality management, operational performance, and project execution.
          </p>
          
          <h3 className="mb-4">Consulting services are available for:</h3>
          <ul className="grid-list col-3 mb-5 pb-5 border-b border-gray-200">
            <li>Food and beverage startups</li>
            <li>Manufacturing businesses</li>
            <li>Healthcare organizations</li>
            <li>Agricultural processors</li>
            <li>Small businesses</li>
            <li>Regulated operations</li>
            <li>Operating companies under development</li>
          </ul>

          <h3 className="mb-4">Consulting Services May Include:</h3>
          <div className="two-col-grid mb-5">
            {consultingAreas.map((area, idx) => (
              <div key={idx} className="bg-light p-5 rounded-lg">
                <h4 className="text-primary mb-3">{area.title}</h4>
                <ul className="simple-list text-muted">
                  {area.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-secondary text-white p-5 rounded-lg mt-5">
            <h4 className="text-white mb-2">Important Notice:</h4>
            <p className="mb-0 text-white-80 text-sm">
              KareKRest Management LLC does not provide legal advice, engineering services, accounting services, regulatory approvals, or professional licensing services. Clients remain responsible for complying with all applicable laws, regulations, permits, licenses, inspections, certifications, and professional requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Compliance.jsx': `
import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function Compliance() {
  const principles = ["Documentation accuracy", "Regulatory awareness", "Risk reduction", "Workforce accountability", "Quality systems", "Traceability", "Internal auditing", "Corrective action", "Continuous improvement"];
  const supportAreas = ["HACCP readiness", "GMP readiness", "FSMA readiness", "OSHA safety awareness", "CAPA systems", "Root cause analysis", "Internal audit preparation", "Documentation control", "Supplier management", "Training records", "Risk management"];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Compliance & Operational Excellence</h1>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container max-w-5xl">
          <div className="text-center mb-5">
             <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
             <p className="text-lg max-w-3xl mx-auto">
               KareKRest Management LLC supports organizations in developing practical compliance readiness systems, documentation controls, workforce training structures, quality systems, and continuous improvement practices.
             </p>
          </div>

          <div className="two-col-grid">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4 border-b pb-3">Core Principles</h3>
              <ul className="grid-list col-1">
                {principles.map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-muted">
                    <CheckCircle size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4 border-b pb-3">Support Areas</h3>
              <ul className="grid-list col-2">
                {supportAreas.map((item, i) => (
                  <li key={i} className="flex gap-2 items-center text-muted">
                    <CheckCircle size={16} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Training.jsx': `
import React from 'react';

export default function Training() {
  const categories = [
    { title: "Food Safety & Regulatory Compliance", items: ["HACCP Fundamentals", "Advanced HACCP Training", "Managing HACCP Essentials", "FSMA Preventive Controls Qualified Individual (PCQI)", "Good Manufacturing Practices (GMP)"] },
    { title: "Quality Systems & Continuous Improvement", items: ["ISO 9001 Internal Auditor Training", "CAPA Management", "Root Cause Analysis", "Lean Six Sigma Yellow Belt"] },
    { title: "Workplace Safety", items: ["OSHA 30 General Industry", "OSHA Injury & Illness Recordkeeping"] },
    { title: "Water Industry & Manufacturing Readiness", items: ["Water Treatment Fundamentals", "Bottled Water Industry Training"] }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Professional Training & Compliance Development</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl">
          <p className="text-lg mb-5">
            KareKRest Management LLC supports continuous professional development in food safety, quality systems, workplace safety, manufacturing readiness, water industry operations, and compliance-related disciplines.
          </p>
          
          <h3 className="mb-4">Completed training areas include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-light p-5 rounded-lg">
                <h4 className="text-primary mb-3">{cat.title}</h4>
                <ul className="simple-list">
                  {cat.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary-light text-primary p-4 rounded text-center font-medium">
            This training supports the company's focus on compliance readiness, documentation control, workforce development, quality systems, and operational improvement.
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'ProjectSpring.jsx': `
import React from 'react';
import { Droplets, CheckCircle } from 'lucide-react';

export default function ProjectSpring() {
  const supportItems = ["Project coordination", "Compliance readiness", "Workforce development planning", "Vendor coordination", "Documentation systems", "Due diligence preparation", "Capital planning support", "Economic development engagement", "Operational readiness planning"];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Project Spring Support</h1>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container max-w-5xl">
          <div className="two-col-grid items-center">
            <div>
              <p className="text-lg mb-4">
                KareKRest Management LLC supports Project Spring through management, compliance coordination, workforce development, documentation systems, vendor coordination, economic development engagement, and strategic planning.
              </p>
              <div className="bg-white p-5 border-l-4 border-primary shadow-sm mb-4">
                <p className="mb-0 font-medium">
                  Project Spring is a phased manufacturing and economic development initiative beginning with Salem Purified Water LLC.
                </p>
              </div>
              <h3 className="mb-3 mt-5">KareKRest Management LLC supports the project through:</h3>
              <ul className="grid-list col-2 mt-4">
                {supportItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted">
                    <CheckCircle size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
              <Droplets size={64} className="text-primary mb-4" />
              <h3 className="text-secondary">Project Spring</h3>
              <p className="text-muted mb-0">Phase 1: Salem Purified Water LLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Workforce.jsx': `
import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';

export default function Workforce() {
  const focusAreas = ["Employee onboarding", "Compliance training", "Safety awareness", "Manufacturing readiness", "Documentation training", "Quality systems training", "Leadership development", "Skills development"];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Workforce Development</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl text-center">
          <Users size={56} className="text-primary mx-auto mb-4" />
          <p className="text-lg mb-5 max-w-3xl mx-auto">
            KareKRest Management LLC supports workforce development by helping businesses build training systems, onboarding structures, documentation processes, and operational readiness programs.
          </p>

          <div className="bg-light p-8 rounded-xl text-left mb-5">
            <h3 className="mb-4 border-b pb-3">Focus areas include:</h3>
            <div className="grid-list col-2">
              {focusAreas.map((item, i) => (
                <div key={i} className="flex gap-2 items-center text-muted">
                  <CheckCircle2 size={18} className="text-secondary" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary text-white p-5 rounded-lg font-medium">
            Workforce development is central to the company's mission because trained employees reduce operational risk, improve compliance performance, and strengthen long-term business sustainability.
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Industry.jsx': `
import React from 'react';

export default function Industry() {
  const orgs = [
    "International Bottled Water Association (IBWA)",
    "American Water Works Association (AWWA)",
    "Water Quality Association (WQA)",
    "Missouri Manufacturers Association (MMA)",
    "National Association of Manufacturers (NAM)",
    "Society of Manufacturing Engineers (SME)",
    "Missouri Enterprise",
    "American Society for Quality (ASQ)",
    "NSF International",
    "Food Safety Preventive Controls Alliance (FSPCA)",
    "SCORE",
    "Small Business Development Center (SBDC)"
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Industry Engagement & Professional Development</h1>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container max-w-4xl">
          <p className="text-lg mb-5 text-center">
            KareKRest Management LLC evaluates participation in industry organizations that support manufacturing readiness, compliance awareness, workforce development, and operational excellence.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="mb-4">Organizations under evaluation include:</h3>
            <ul className="simple-list two-cols">
              {orgs.map((org, i) => <li key={i} className="mb-2">{org}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'FAQ.jsx': `
import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "What does KareKRest Management LLC do?", a: "KareKRest Management LLC provides management, compliance coordination, consulting, workforce development, documentation support, project coordination, and operational excellence services." },
    { q: "Does KareKRest Management LLC manufacture products?", a: "No. KareKRest Management LLC does not directly manufacture products. Manufacturing and operating activities are conducted by separate operating companies." },
    { q: "Does KareKRest Management LLC provide consulting services?", a: "Yes. KareKRest Management LLC provides consulting support in compliance readiness, documentation systems, quality systems, workforce development, operational planning, and business development." },
    { q: "What industries does KareKRest Management support?", a: "The company supports manufacturing, food and beverage, healthcare, agriculture, project development, and other regulated or compliance-focused businesses." },
    { q: "Does KareKRest Management provide legal or engineering advice?", a: "No. KareKRest Management LLC does not provide legal, engineering, accounting, or professional licensing services. Clients should consult qualified professionals for those services." },
    { q: "What is Project Spring?", a: "Project Spring is a phased manufacturing and economic development initiative supported by KareKRest Management LLC. Phase 1 is Salem Purified Water LLC." },
    { q: "How does KareKRest Management support lenders and investors?", a: "The company supports due diligence preparation, documentation systems, compliance readiness, project organization, operational planning, and reporting structures that help improve transparency and project readiness." },
    { q: "How can clients contact KareKRest Management?", a: "Clients may contact KareKRest Management LLC by phone at (573) 509-5373 or by email at admin@karekrestmgmt.com." }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl">
          <div className="accordion-wrapper flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item bg-light p-5 rounded-lg border border-gray-200">
                <h4 className="text-secondary mb-2 font-bold">{faq.q}</h4>
                <p className="text-muted mb-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'Resources.jsx': `
import React from 'react';
import { Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    "Company overview",
    "Service brochure",
    "Compliance readiness checklist",
    "Project Spring overview",
    "Workforce development summary",
    "Quality systems overview",
    "Due diligence checklist"
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Resources</h1>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container max-w-4xl">
          <p className="mb-5 text-lg">Downloadable documents and viewable resources will be available here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((res, i) => (
              <div key={i} className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-center justify-between opacity-70 cursor-not-allowed">
                <span className="font-medium text-secondary">{res}</span>
                <Download size={20} className="text-gray-400" />
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted italic text-center">
            Note: Do not upload confidential documents publicly unless approved. Check back later for active downloads.
          </p>
        </div>
      </section>
    </div>
  );
}`,
  'Contact.jsx': `
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-5xl">
          <div className="two-col-grid">
            <div className="contact-info bg-secondary text-white p-8 rounded-xl">
              <h3 className="text-white mb-5">Get in Touch</h3>
              <p className="text-white-80 mb-5">KareKRest Management LLC provides support services to operating companies and clients that need structured management, compliance readiness, and operational improvement systems.</p>
              
              <div className="flex items-center gap-4 mb-4">
                <Phone size={24} className="text-primary-light" />
                <span className="text-lg">(573) 509-5373</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Mail size={24} className="text-primary-light" />
                <span className="text-lg">admin@karekrestmgmt.com</span>
              </div>
            </div>

            <div className="contact-form-wrapper bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4">Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for contacting KareKRest Management LLC. We have received your message.'); }}>
                <div className="form-group">
                  <label className="form-label">Full Name <span>*</span></label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address <span>*</span></label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Organization</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message <span>*</span></label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'PrivacyPolicy.jsx': `
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl legal-content">
          <p><strong>Effective Date:</strong> January 1, 2026</p>
          <p>KareKRest Management LLC ("Company," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website (https://karekrestmgmt.com).</p>
          
          <h4>Information Collected Through Forms</h4>
          <p>We collect personal information that you voluntarily provide to us when you fill out contact forms on the website. This may include your name, email address, phone number, company name, and the contents of your message.</p>

          <h4>Website Analytics and Cookies</h4>
          <p>Our website may use cookies and similar tracking technologies to analyze website traffic, improve functionality, and enhance user experience. You can choose to disable cookies through your browser settings.</p>

          <h4>Use of Information</h4>
          <p>We use the information collected to respond to your inquiries, communicate with you regarding our services, improve our website functionality, and comply with legal obligations.</p>

          <h4>Third-Party Services</h4>
          <p>We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, provided those parties agree to keep this information confidential.</p>

          <h4>Data Protection</h4>
          <p>We implement appropriate security measures to maintain the safety of your personal information. However, no data transmission over the Internet or electronic storage system can be guaranteed to be 100% secure.</p>

          <h4>Contact Information</h4>
          <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
          <div className="bg-light p-4 rounded mt-2">
            <strong>KareKRest Management LLC</strong><br/>
            Phone: (573) 509-5373<br/>
            Email: admin@karekrestmgmt.com
          </div>
        </div>
      </section>
    </div>
  );
}`,
  'TermsOfUse.jsx': `
import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Terms of Use</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl legal-content">
          <p><strong>Effective Date:</strong> January 1, 2026</p>
          <p>By accessing and using the KareKRest Management LLC website (https://karekrestmgmt.com), you agree to comply with and be bound by the following Terms of Use.</p>

          <h4>Website Use</h4>
          <p>The content provided on this website is for informational purposes only. KareKRest Management LLC reserves the right to modify or discontinue any part of the website without notice.</p>

          <h4>No Professional Advice</h4>
          <p>The information on this website does not constitute professional advice. Specifically:</p>
          <ul>
            <li><strong>No Legal Advice:</strong> We do not provide legal services.</li>
            <li><strong>No Engineering Advice:</strong> We do not provide engineering services.</li>
            <li><strong>No Accounting Advice:</strong> We do not provide accounting or financial services.</li>
          </ul>
          <p>Clients should consult qualified professionals for these services. We provide no guarantee of regulatory approval, financing, or funding outcomes.</p>

          <h4>Intellectual Property</h4>
          <p>All content, branding, text, and graphics on this site are the intellectual property of KareKRest Management LLC or used under license and are protected by applicable copyright and trademark laws.</p>

          <h4>External Links</h4>
          <p>Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites.</p>

          <h4>Limitation of Liability</h4>
          <p>To the maximum extent permitted by law, KareKRest Management LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of or inability to use this website or its content.</p>

          <h4>Contact Information</h4>
          <p>If you have any questions regarding these Terms of Use, please contact us at:</p>
          <div className="bg-light p-4 rounded mt-2">
            <strong>KareKRest Management LLC</strong><br/>
            Phone: (573) 509-5373<br/>
            Email: admin@karekrestmgmt.com
          </div>
        </div>
      </section>
    </div>
  );
}`
};

const components = {
  'Navbar.jsx': `
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">KM</div>
          KAREKREST
        </Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={\`nav-links \${isOpen ? 'active' : ''}\`}>
          <li><Link to="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li className="dropdown">
            <span className="cursor-pointer">Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/services" onClick={closeMenu}>Management & Support</Link></li>
              <li><Link to="/consulting" onClick={closeMenu}>Consulting</Link></li>
              <li><Link to="/compliance" onClick={closeMenu}>Compliance</Link></li>
              <li><Link to="/training" onClick={closeMenu}>Professional Training</Link></li>
              <li><Link to="/workforce" onClick={closeMenu}>Workforce Dev</Link></li>
            </ul>
          </li>
          <li><Link to="/project-spring" onClick={closeMenu} className={isActive('/project-spring') ? 'active' : ''}>Project Spring</Link></li>
          <li><Link to="/faq" onClick={closeMenu} className={isActive('/faq') ? 'active' : ''}>FAQ</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}`,
  'Footer.jsx': `
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="logo-icon w-10 h-10 text-sm">KM</div>
              <h3 className="text-white mb-0" style={{paddingBottom: 0}}>KareKRest Management LLC</h3>
            </div>
            <p className="text-white-80 text-sm max-w-md">
              Management, Compliance, Consulting & Operational Excellence. Supporting businesses, manufacturing projects, regulated operations, and affiliated operating companies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="footer-links flex flex-col gap-2 text-sm text-white-80">
              <li><Link to="/about" className="hover:text-primary-light">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-light">Services</Link></li>
              <li><Link to="/industry-engagement" className="hover:text-primary-light">Industry Engagement</Link></li>
              <li><Link to="/resources" className="hover:text-primary-light">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-primary-light">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white-80">
              <li className="flex gap-3"><Phone size={18} className="text-primary-light flex-shrink-0" /> (573) 509-5373</li>
              <li className="flex gap-3"><Mail size={18} className="text-primary-light flex-shrink-0" /> admin@karekrestmgmt.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer mb-6 text-xs text-white-50 text-center max-w-4xl mx-auto">
          KareKRest Management LLC does not provide legal services, engineering services, accounting services, regulatory approvals, or professional licensing services. Clients remain responsible for compliance with all applicable laws, regulations, permits, certifications, inspections, and professional requirements.
        </div>

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-xs text-white-50 pt-4 border-t border-gray-700">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} KareKRest Management LLC. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}`,
  'Layout.jsx': `
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}`
};

const appFile = `
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consulting from './pages/Consulting';
import Compliance from './pages/Compliance';
import Training from './pages/Training';
import ProjectSpring from './pages/ProjectSpring';
import Workforce from './pages/Workforce';
import Industry from './pages/Industry';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="training" element={<Training />} />
          <Route path="project-spring" element={<ProjectSpring />} />
          <Route path="workforce" element={<Workforce />} />
          <Route path="industry-engagement" element={<Industry />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`;

Object.entries(pages).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(pagesDir, filename), content.trim());
});

Object.entries(components).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(componentsDir, filename), content.trim());
});

fs.writeFileSync(path.join(srcDir, 'App.jsx'), appFile.trim());

console.log("Files generated successfully!");
