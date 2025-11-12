import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection = ({ image, imageAlt, headingPrimary, headingAccent, description, buttonText, buttonLink, reverse, customContent }) => {
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
          {customContent && <div className="section-custom-content">{customContent}</div>}
          {buttonText && (
            buttonLink?.startsWith('http') ? (
              <a href={buttonLink} className="section-btn" target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            ) : (
              <Link to={buttonLink || "#"} className="section-btn">
                {buttonText}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

