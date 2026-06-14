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
}