import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/karekrestlogo.jpg" alt="KareKRest Logo" className="logo-icon w-10 h-10 object-cover rounded-full inline-block mr-2" />
          KAREKREST
        </Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li className="dropdown">
            <span className="cursor-pointer">Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/services" onClick={closeMenu}>Management & Support</Link></li>
              <li><Link to="/consulting" onClick={closeMenu}>Consulting</Link></li>
              <li><Link to="/compliance" onClick={closeMenu}>Compliance</Link></li>
              <li><Link to="/training" onClick={closeMenu}>Professional Training</Link></li>
              <li><Link to="/workforce" onClick={closeMenu}>Workforce Dev</Link></li>
            </ul>
          </li>
          <li><Link to="/project-spring" onClick={closeMenu} className={isActive('/project-spring') ? 'active' : ''}>Project Spring</Link></li>
          <li><Link to="/faq" onClick={closeMenu} className={isActive('/faq') ? 'active' : ''}>FAQ</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}