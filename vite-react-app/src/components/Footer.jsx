import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="logo-icon w-10 h-10 text-sm">KM</div>
              <h3 className="text-white mb-0" style={{paddingBottom: 0}}>KareKRest Management LLC</h3>
            </div>
            <p className="text-white-80 text-sm max-w-md">
              Management, Compliance, Consulting & Operational Excellence. Supporting businesses, manufacturing projects, regulated operations, and affiliated operating companies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="footer-links flex flex-col gap-2 text-sm text-white-80">
              <li><Link to="/about" className="hover:text-primary-light">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-light">Services</Link></li>
              <li><Link to="/industry-engagement" className="hover:text-primary-light">Industry Engagement</Link></li>
              <li><Link to="/resources" className="hover:text-primary-light">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-primary-light">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white-80">
              <li className="flex gap-3"><Phone size={18} className="text-primary-light flex-shrink-0" /> (573) 509-5373</li>
              <li className="flex gap-3"><Mail size={18} className="text-primary-light flex-shrink-0" /> admin@karekrestmgmt.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer mb-6 text-xs text-white-50 text-center max-w-4xl mx-auto">
          KareKRest Management LLC does not provide legal services, engineering services, accounting services, regulatory approvals, or professional licensing services. Clients remain responsible for compliance with all applicable laws, regulations, permits, certifications, inspections, and professional requirements.
        </div>

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-xs text-white-50 pt-4 border-t border-gray-700">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} KareKRest Management LLC. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}