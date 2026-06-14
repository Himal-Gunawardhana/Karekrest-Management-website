import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </header>
      <section className="section">
        <div className="container max-w-5xl">
          <div className="two-col-grid">
            <div className="contact-info bg-secondary text-white p-8 rounded-xl">
              <h3 className="text-white mb-5">Get in Touch</h3>
              <p className="text-white-80 mb-5">KareKRest Management LLC provides support services to operating companies and clients that need structured management, compliance readiness, and operational improvement systems.</p>
              
              <div className="flex items-center gap-4 mb-4">
                <Phone size={24} className="text-primary-light" />
                <span className="text-lg">(573) 509-5373</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Mail size={24} className="text-primary-light" />
                <span className="text-lg">admin@karekrestmgmt.com</span>
              </div>
            </div>

            <div className="contact-form-wrapper bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4">Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for contacting KareKRest Management LLC. We have received your message.'); }}>
                <div className="form-group">
                  <label className="form-label">Full Name <span>*</span></label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address <span>*</span></label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Organization</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message <span>*</span></label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}