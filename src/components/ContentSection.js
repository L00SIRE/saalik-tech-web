import React from 'react';

const ContentSection = ({ image, imageAlt, headingPrimary, headingAccent, description, buttonText, buttonLink, reverse }) => {
  return (
    <div className="content-section">
      <div className={`section-wrapper ${reverse ? 'reverse' : ''}`}>
        <div className="section-image">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="section-content">
          <div className="section-heading">
            <span className={reverse ? "accent" : "primary"}>{headingPrimary}</span>
            <span className={reverse ? "primary" : "accent"}> {headingAccent}</span>
          </div>
          <p className="section-desc" dangerouslySetInnerHTML={{ __html: description }}></p>
          {buttonText && (
            <a href={buttonLink || "#"} className="section-btn" target={buttonLink?.startsWith('http') ? '_blank' : '_self'} rel={buttonLink?.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

