import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import GuideBooking from './pages/GuideBooking';
import StoryDetail from './pages/StoryDetail';
import IdolDetector from './pages/IdolDetector';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/guide-booking" element={<GuideBooking />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        {/* Hidden internal route - not in navigation */}
        <Route path="/internal/idol-detector" element={<IdolDetector />} />
      </Routes>
    </Router>
  );
}

export default App;

