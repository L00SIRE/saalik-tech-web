import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/stories`);
      if (!response.ok) {
        throw new Error('Failed to fetch stories');
      }
      const data = await response.json();
      setStories(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching stories:', err);
      setError(err.message);
      // Fallback to empty array if API is not available
      setStories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stories-page">
      <Navbar />
      
      <div className="stories-hero">
        <div className="stories-hero-content">
          <h1>UNTOLD <span className="accent">STORIES</span></h1>
          <p>Browse through SAALIK's ever growing database of statues and sculptures from across Nepal, where each piece carries a story of kings, gods, artisans, and civilizations.</p>
        </div>
      </div>

      <div className="stories-container">
        {loading ? (
          <div className="loading-stories">
            <p>Loading stories...</p>
          </div>
        ) : error ? (
          <div className="error-stories">
            <p>Unable to load stories. {error}</p>
            <p className="error-hint">Make sure the backend server is running on port 5000</p>
          </div>
        ) : stories.length === 0 ? (
          <div className="no-stories">
            <p>No stories available at the moment.</p>
          </div>
        ) : (
          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story._id} className="story-card">
                <div className="story-image">
                  <img 
                    src={story.image.startsWith('http') ? story.image : `http://localhost:5000${story.image}`} 
                    alt={story.title} 
                  />
                </div>
                <div className="story-content">
                  <div className="story-meta">
                    <span className="story-location">{story.location}</span>
                    <span className="story-date">{story.date}</span>
                  </div>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-description">{story.description}</p>
                  <button className="story-read-more">Read More</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Stories;

