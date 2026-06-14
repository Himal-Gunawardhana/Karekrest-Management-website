import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "What does KareKRest Management LLC do?", a: "KareKRest Management LLC provides management, compliance coordination, consulting, workforce development, documentation support, project coordination, and operational excellence services." },
    { q: "Does KareKRest Management LLC manufacture products?", a: "No. KareKRest Management LLC does not directly manufacture products. Manufacturing and operating activities are conducted by separate operating companies." },
    { q: "Does KareKRest Management LLC provide consulting services?", a: "Yes. KareKRest Management LLC provides consulting support in compliance readiness, documentation systems, quality systems, workforce development, operational planning, and business development." },
    { q: "What industries does KareKRest Management support?", a: "The company supports manufacturing, food and beverage, healthcare, agriculture, project development, and other regulated or compliance-focused businesses." },
    { q: "Does KareKRest Management provide legal or engineering advice?", a: "No. KareKRest Management LLC does not provide legal, engineering, accounting, or professional licensing services. Clients should consult qualified professionals for those services." },
    { q: "What is Project Spring?", a: "Project Spring is a phased manufacturing and economic development initiative supported by KareKRest Management LLC. Phase 1 is Salem Purified Water LLC." },
    { q: "How does KareKRest Management support lenders and investors?", a: "The company supports due diligence preparation, documentation systems, compliance readiness, project organization, operational planning, and reporting structures that help improve transparency and project readiness." },
    { q: "How can clients contact KareKRest Management?", a: "Clients may contact KareKRest Management LLC by phone at (573) 509-5373 or by email at admin@karekrestmgmt.com." }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-4xl">
          <div className="accordion-wrapper flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item bg-light p-5 rounded-lg border border-gray-200">
                <h4 className="text-secondary mb-2 font-bold">{faq.q}</h4>
                <p className="text-muted mb-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}