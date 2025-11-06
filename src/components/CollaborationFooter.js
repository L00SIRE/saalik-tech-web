import React from 'react';

const CollaborationFooter = () => {
  const collaborators = [
    { src: '/government.png', alt: 'Department of Archaeology', name: 'Department of Archaeology' },
    { src: '/government1.png', alt: 'National Archives', name: 'National Archives' },
    { src: '/kageshwori.png', alt: 'Kageshowori Manohara Municipality', name: 'Kageshowori Manohara<br>Municipality' },
    { src: '/tokha.png', alt: 'Tokha Municipality', name: 'Tokha Municipality' }
  ];

  return (
    <div className="collaboration-footer">
      <h1>
        IN <span className="collab-highlight">COLLABORATION</span> WITH
      </h1>
      <div className="collab-logos">
        {collaborators.map((collab, index) => (
          <div key={index} className="logo-block">
            <img src={collab.src} alt={collab.alt} />
            <p dangerouslySetInnerHTML={{ __html: collab.name }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationFooter;

