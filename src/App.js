import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import GuideBooking from './pages/GuideBooking';
import StoryDetail from './pages/StoryDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/guide-booking" element={<GuideBooking />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

