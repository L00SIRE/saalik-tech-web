import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ContentSection from '../components/ContentSection';
import WorksDoneSlider from '../components/WorksDoneSlider';
import OurInitiative from '../components/OurInitiative';
import CollaborationFooter from '../components/CollaborationFooter';
import SaalikGroup from '../components/SaalikGroup';
import Footer from '../components/Footer';

function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const youtubeVideoId = 'o4jv8ZsH3Ts'; // Extracted from https://youtu.be/o4jv8ZsH3Ts

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        closeVideoModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isVideoModalOpen]);

  return (
    <div className="App">
      <Navbar />
      
      <ImageSlider />

      {/* What is SAALIK Section */}
      <ContentSection
        image="/natrajan.png"
        imageAlt="Natrajan"
        headingPrimary="WHAT IS "
        headingAccent="SAALIK?"
        description="<span class='saalik-highlight'>SAALIK</span> is a cultural tourism and heritage platform dedicated to <span class='saalik-highlight'>preserving,</span> promoting, and showcasing <span class='saalik-highlight'>Nepal's statues and sculptures/culture.</span> By blending technology with tradition, we provide travelers, researchers, and culture enthusiasts with an <span class='saalik-highlight'>authentic digital experience.</span> Our mission is to centralize and <span class='saalik-highlight'>digitalize information</span> on Nepal's cultural heritage, making it accessible worldwide. We envision becoming the leading platform for digital heritage tourism and <span class='saalik-highlight'>cultural preservation</span> in Nepal, bridging the gap between history and innovation. With features such as <span class='saalik-highlight'>AI based statue recognition,</span> a verified <span class='saalik-highlight'>guide booking system,</span> personalized <span class='saalik-highlight'>travel itineraries</span> and <span class='saalik-highlight'>emergency help support,</span> SAALIK is committed to safeguarding Nepal's timeless legacy while empowering travelers and local communities alike."
        reverse={false}
        customContent={
          <button className="section-btn watch-promo-btn" onClick={openVideoModal} aria-label="Watch Promo">
            <span className="play-icon"></span>
            <span className="play-text">WATCH PROMO</span>
          </button>
        }
      />

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" onClick={closeVideoModal} aria-label="Close video">
              ×
            </button>
            <div className="video-modal__iframe-wrapper">
              <iframe
                className="video-modal__iframe"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="SAALIK Promo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Untold Stories Section */}
      <ContentSection
        image="/untold.png"
        imageAlt="Untold"
        headingPrimary="UNTOLD "
        headingAccent="STORIES"
        description="Browse through <span class='saalik-highlight'>SAALIK's</span> ever growing <span class='saalik-highlight'>database of statues</span> and <span class='saalik-highlight'>sculptures</span> from across Nepal, where each piece carries <span class='saalik-highlight'>a story of kings, gods, artisans, and civilizations.</span> More than just stone and metal, these statues embody centuries of history, faith, and craftsmanship inviting you to <span class='saalik-highlight'>explore the cultural heartbeat of Nepal.</span>"
        buttonText="SEE OUR STORIES"
        buttonLink="/stories"
        reverse={true}
      />

      {/* Guide Booking Section */}
      <ContentSection
        image="/guide.png"
        imageAlt="guide"
        headingPrimary="GUIDE "
        headingAccent="BOOKING"
        description="Discover Nepal with confidence by <span class='saalik-highlight'>joining our waitlist for verified local guides</span> through SAALIK. Our <span class='saalik-highlight'>trusted guides</span> will bring culture, history, and spirituality to life while ensuring your journey is both <span class='saalik-highlight'>safe and insightful.</span> With expertise ranging from heritage walks to temple tours, they help you <span class='saalik-highlight'>experience Nepal beyond the surface.</span>"
        buttonText="JOIN WAITLIST"
        buttonLink="/guide-booking"
        reverse={false}
      />

      <OurInitiative />

      <WorksDoneSlider />

      <CollaborationFooter />
      
      <SaalikGroup />
      
      <Footer />
    </div>
  );
}

export default Home;

