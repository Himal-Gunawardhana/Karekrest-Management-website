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
}