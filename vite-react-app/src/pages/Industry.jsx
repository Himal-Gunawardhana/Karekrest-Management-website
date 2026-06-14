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
}