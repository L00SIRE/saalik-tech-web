import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section footer-logo">
          <img src="/saaliklogo.png" alt="Saalik Logo" />
          <p>Delivering innovative technology solutions with excellence and integrity.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Guide Booking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1DFMvc9acF/" target="_blank" rel="noopener noreferrer">Facebook /saalik</a>
            <a href="https://youtube.com/@saalik0" target="_blank" rel="noopener noreferrer">YouTube /saalik0</a>
            <a href="https://www.instagram.com/saalik0?igsh=MTJvM3pmZHJpbGdjMA==" target="_blank" rel="noopener noreferrer">Instagram /saalik0</a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        © 2025 SAALIK TECH PVT. LTD. All rights reserved. 
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </>
  );
};

export default Footer;

