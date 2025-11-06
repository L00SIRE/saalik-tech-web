import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    // Prevent body scroll when mobile nav is open
    if (!mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const openContactModal = () => {
    setContactModalOpen(true);
    setMobileNavOpen(false); // Close mobile nav if open
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = () => {
    setMobileNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <img src="/saalikicon.png" alt="Saalik Logo" align="left" height="40px" width="40px"/>
          <span align="center" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--primary-green)', letterSpacing: '1px', paddingTop: '5px' }}>SAALIK</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={isActive('/') && location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <Link to="/stories" className={isActive('/stories') ? 'active' : ''}>STORIES</Link>
          <Link to="/guide-booking" className={isActive('/guide-booking') ? 'active' : ''}>GUIDE BOOKING</Link>
          <button className="buttoncontact" onClick={openContactModal}>CONTACT</button>
        </nav>

        <div className="menu-icon" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`} id="mobileNav">
        <div className="close-mobile" onClick={toggleMobileNav}>&times;</div>
        <Link to="/" onClick={handleNavClick}>HOME</Link>
        <Link to="/stories" onClick={handleNavClick}>STORIES</Link>
        <Link to="/guide-booking" onClick={handleNavClick}>GUIDE BOOKING</Link>
        <button className="buttoncontact" onClick={() => { openContactModal(); toggleMobileNav(); }}>CONTACT</button>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default Navbar;

