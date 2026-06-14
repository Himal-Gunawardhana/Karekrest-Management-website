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
}