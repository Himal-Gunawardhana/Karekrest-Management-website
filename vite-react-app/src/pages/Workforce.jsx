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
}