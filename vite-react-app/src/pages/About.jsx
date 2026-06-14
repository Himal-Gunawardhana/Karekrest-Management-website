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
}