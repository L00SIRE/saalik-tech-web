import React, { useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scrolling on mobile
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`contact-modal ${isOpen ? 'active' : ''}`} id="contactModal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Contact Information</h2>
            <button className="modal-close" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="contact-section">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">saalik130@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">PHONE</span>
                <span className="contact-value">+977-9840836892</span>
              </div>
            </div>
            <div className="social-section">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/share/1DFMvc9acF/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-platform">Facebook</span>
                  <span className="social-handle">/saalik</span>
                </a>
                <a href="https://youtube.com/@saalik0" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-platform">YouTube</span>
                  <span className="social-handle">/saalik0</span>
                </a>
                <a href="https://www.instagram.com/saalik0?igsh=MTJvM3pmZHJpbGdjMA==" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">/saalik0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

