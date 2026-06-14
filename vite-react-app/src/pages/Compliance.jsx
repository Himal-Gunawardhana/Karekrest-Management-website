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
}