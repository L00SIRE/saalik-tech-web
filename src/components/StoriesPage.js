import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/stories.css';

const sampleStories = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: `Story Topic ${i + 1}`
}));

const StoriesPage = () => {
  return (
    <div className="stories-page">
      <div className="stories-header">
        <h1>Untold Stories</h1>
        <p><Link to="/">← Back to Home</Link></p>
      </div>

      <div className="stories-grid">
        {sampleStories.map((s) => (
          <div key={s.id} className="story-card">
            <div className="story-box" />
            <div className="story-topic">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;