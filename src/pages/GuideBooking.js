import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuideBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    duration: '',
    groupSize: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        date: '',
        duration: '',
        groupSize: '',
        specialRequests: ''
      });
    }, 3000);
  };

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
                    placeholder="your.email@example.com"
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
                  <label htmlFor="destination">Destination / Area of Interest *</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a destination</option>
                    <option value="kathmandu-valley">Kathmandu Valley</option>
                    <option value="swayambhunath">Swayambhunath</option>
                    <option value="pashupatinath">Pashupatinath</option>
                    <option value="boudhanath">Boudhanath</option>
                    <option value="patan">Patan Durbar Square</option>
                    <option value="bhaktapur">Bhaktapur Durbar Square</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">Duration *</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="half-day">Half Day (3-4 hours)</option>
                      <option value="full-day">Full Day (6-8 hours)</option>
                      <option value="multi-day">Multi-Day</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="groupSize">Group Size *</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select group size</option>
                    <option value="1">1 person</option>
                    <option value="2-4">2-4 people</option>
                    <option value="5-10">5-10 people</option>
                    <option value="10+">10+ people</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests or Interests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about any specific interests, accessibility needs, or special requests..."
                  />
                </div>

                <button type="submit" className="booking-submit-btn">
                  Submit Booking Request
                </button>

                <p className="form-note">
                  * Required fields. We'll contact you within 24 hours to confirm your booking.
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

