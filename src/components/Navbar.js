import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

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

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/saalikicon.png" alt="Saalik Logo" align="left" height="40px" width="40px"/>
          <span align="center" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--primary-green)', letterSpacing: '1px', paddingTop: '5px' }}>SAALIK</span>
        </div>

        <nav className="nav-links">
          <a href="#" className="active">HOME</a>
          <a href="#">STORIES</a>
          <a href="#">GUIDE BOOKING</a>
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
        <a href="#" onClick={toggleMobileNav}>HOME</a>
        <a href="#" onClick={toggleMobileNav}>STORIES</a>
        <a href="#" onClick={toggleMobileNav}>GUIDE BOOKING</a>
        <button className="buttoncontact" onClick={() => { openContactModal(); toggleMobileNav(); }}>CONTACT</button>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default Navbar;

