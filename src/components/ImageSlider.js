import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageSlider = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const slides = [
    { src: '/bhairabbanner.png', alt: 'Bhairab Banner', storyId: 3 }, // Kaal Bhairab story
    { src: '/khyakbannerr.png', alt: 'Khyak Banner', storyId: 1 }, // Khyak story
    { src: '/kalibanner.png', alt: 'Kali Banner', storyId: 2 } // Kali story
  ];

  const totalSlides = slides.length;

  // Auto-play slider
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

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

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setTouchEnd(e.touches[0].clientX);
    setIsScrolling(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchCurrent = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    setTouchEnd(touchCurrent);
    
    const diffX = Math.abs(touchStart.x - touchCurrent);
    const diffY = Math.abs(touchStart.y - touchY);
    
    if (diffX > diffY) {
      setIsScrolling(false);
      e.preventDefault();
    } else {
      setIsScrolling(true);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isScrolling) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const swipeThreshold = 50;
    const diff = touchStart.x - touchEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1); // Swipe left - next slide
      } else {
        changeSlide(-1); // Swipe right - previous slide
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="slider-section">
      <div 
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Redirect to specific story if storyId exists, otherwise to stories page
                if (slide.storyId) {
                  navigate(`/story/${slide.storyId}`);
                } else {
                  navigate('/stories');
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={slide.src} 
                alt={slide.alt}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (slide.storyId) {
                    navigate(`/story/${slide.storyId}`);
                  } else {
                    navigate('/stories');
                  }
                }}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button className="slider-nav prev" onClick={() => changeSlide(-1)}>
          <span>&#10094;</span>
        </button>
        <button className="slider-nav next" onClick={() => changeSlide(1)}>
          <span>&#10095;</span>
        </button>
        
        {/* Dots Indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

