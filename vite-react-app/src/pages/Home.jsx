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
}