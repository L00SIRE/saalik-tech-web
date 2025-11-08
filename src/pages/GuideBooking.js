import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuideBooking = () => {
  const WAITLIST_KEY = 'guide_waitlist';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Save waitlist entry to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem(WAITLIST_KEY) || '[]');
      const entry = { id: Date.now().toString(), ...formData, timestamp: Date.now() };
      existing.unshift(entry);
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(existing));

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', specialRequests: '' });
      }, 2000);
    } catch (err) {
      console.error('Failed to save waitlist locally', err);
      alert('Failed to join list. Try again.');
    }
  };

  // optional: function to fetch waitlist entries for admin/debug
  const fetchWaitlistData = () => {
    try {
      return JSON.parse(localStorage.getItem(WAITLIST_KEY) || '[]');
    } catch (err) {
      console.error('Failed to read waitlist', err);
      return [];
    }
  };

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  return (
    <div className="guide-booking-page">
      <Navbar />
      
      <div className="booking-hero">
        <div className="booking-hero-content">
          <h1>GUIDE <span className="accent">BOOKING</span></h1>
          <p>Discover Nepal with confidence by booking verified local guides through SAALIK. Our trusted guides bring culture, history, and spirituality to life while ensuring your journey is both safe and insightful.</p>
        </div>
        <div className="booking-hero-image">
          <img src="/guide.png" alt="Guide Booking" />
        </div>
      </div>

      <div className="booking-container">
        <div className="booking-content">
          <div className="booking-info">
            <h2>Why Book with SAALIK?</h2>
            <ul className="booking-features">
              <li>
                <strong>Verified Guides</strong>
                <p>All our guides are thoroughly verified and certified, ensuring you get authentic and knowledgeable guidance.</p>
              </li>
              <li>
                <strong>Cultural Expertise</strong>
                <p>Our guides specialize in heritage sites, temples, and cultural landmarks, providing deep insights into Nepal's rich history.</p>
              </li>
              <li>
                <strong>Safety First</strong>
                <p>Your safety is our priority. All guides follow strict safety protocols and are trained in emergency response.</p>
              </li>
              <li>
                <strong>Flexible Itineraries</strong>
                <p>Customize your tour based on your interests, whether it's heritage walks, temple tours, or cultural experiences.</p>
              </li>
              <li>
                <strong>Local Insights</strong>
                <p>Experience Nepal beyond the surface with insider knowledge and hidden gems known only to locals.</p>
              </li>
            </ul>
          </div>

          <div className="booking-form-wrapper">
            <h2>Book Your Guide</h2>
            {submitted ? (
              <div className="booking-success">
                <h3>Thank You!</h3>
                <p>Your booking request has been submitted. We'll contact you shortly to confirm your guide booking.</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="saalik@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Any suggestions for us?</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about any specific suggestions, changes or special requests..."
                  />
                </div>

                <button type="submit" className="booking-submit-btn">
                  Join the Waitlist
                </button>
                <p className="form-note">
                  * The feature will be available soon. *
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideBooking;

