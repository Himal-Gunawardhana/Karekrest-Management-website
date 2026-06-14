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
}