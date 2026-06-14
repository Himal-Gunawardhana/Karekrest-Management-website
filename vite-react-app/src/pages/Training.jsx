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
}