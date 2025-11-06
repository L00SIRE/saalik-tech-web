import React, { useState, useEffect } from 'react';

const OurInitiative = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const logos = [
    { src: '/brikshya.png', alt: 'Brikshya' },  
    { src: '/Dristi.png', alt: 'Dristi' },
    { src: '/MKP.png', alt: 'MKP' },
    { src: '/Openlipi.png', alt: 'Openlipi' },
    { src: '/openabhilekh.png', alt: 'Openabhilekh' },
    { src: '/sanket.png', alt: 'Sanket' }
  ];

  const totalSlides = logos.length;

  // Auto-play slider
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(autoPlayInterval);
  }, [totalSlides]);

  const changeSlide = (direction) => {
    setCurrentSlideIndex((prev) => {
      if (direction === 1) {
        return (prev + 1) % totalSlides;
      } else {
        return prev === 0 ? totalSlides - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="initiative-section">
      <div className="initiative-container">
        <div className="initiative-header">
          <h2 className="initiative-title">
            <span className="accent">OUR </span>
            <span className="primary">INITIATIVE</span>
          </h2>
          <p className="initiative-subtitle">
            Our mission is to preserve, promote, and showcase Nepal's cultural heritage through innovative technology and community engagement.
          </p>
        </div>

        <div className="initiative-slider-wrapper">
          <div className="initiative-slider-container">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`initiative-slide ${index === currentSlideIndex ? 'active' : ''}`}
              >
                <div className="initiative-logo-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="initiative-slider-nav prev" onClick={() => changeSlide(-1)}>
            <span>&#10094;</span>
          </button>
          <button className="initiative-slider-nav next" onClick={() => changeSlide(1)}>
            <span>&#10095;</span>
          </button>

          {/* Dots Indicator */}
          <div className="initiative-slider-dots">
            {logos.map((_, index) => (
              <span 
                key={index}
                className={`initiative-dot ${index === currentSlideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInitiative;
