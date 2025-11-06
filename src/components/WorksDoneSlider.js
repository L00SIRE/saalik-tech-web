import React, { useState, useEffect } from 'react';

const WorksDoneSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Sample works - replace with actual work items
  const works = [
    {
      id: 1,
      title: "Digital Heritage Documentation",
      description: "Documented and digitized over 500 historical statues and sculptures across Nepal, preserving cultural heritage for future generations.",
      image: "/natrajan.png", // Replace with actual work images
    },
    {
      id: 2,
      title: "AI-Based Statue Recognition",
      description: "Developed advanced AI technology to identify and provide detailed information about Nepal's cultural artifacts through image recognition.",
      image: "/untold.png",
    },
    {
      id: 3,
      title: "Guide Booking Platform",
      description: "Created a verified guide booking system connecting travelers with trusted local experts for authentic cultural experiences.",
      image: "/guide.png",
    },
    {
      id: 4,
      title: "Cultural Database",
      description: "Built a comprehensive digital database of Nepal's cultural heritage, making it accessible to researchers and enthusiasts worldwide.",
      image: "/bhairabbanner.png",
    }
  ];

  const totalSlides = works.length;

  // Auto-play slider
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

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
    <div className="works-done-section">
      <div className="works-done-container">
        <div className="works-done-header">
          <h2 className="works-done-title">
            <span className="primary">OUR </span>
            <span className="accent">WORKS</span>
          </h2>
          <p className="works-done-subtitle">Discover what we've accomplished in preserving Nepal's cultural heritage</p>
        </div>

        <div className="works-slider-wrapper">
          <div className="works-slider-container">
            {works.map((work, index) => (
              <div 
                key={work.id}
                className={`works-slide ${index === currentSlideIndex ? 'active' : ''}`}
              >
                <div className="works-slide-content">
                  <div className="works-slide-image">
                    <img src={work.image} alt={work.title} />
                  </div>
                  <div className="works-slide-text">
                    <h3 className="works-slide-title">{work.title}</h3>
                    <p className="works-slide-description">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="works-slider-nav prev" onClick={() => changeSlide(-1)}>
            <span>&#10094;</span>
          </button>
          <button className="works-slider-nav next" onClick={() => changeSlide(1)}>
            <span>&#10095;</span>
          </button>

          {/* Dots Indicator */}
          <div className="works-slider-dots">
            {works.map((_, index) => (
              <span 
                key={index}
                className={`works-dot ${index === currentSlideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksDoneSlider;

