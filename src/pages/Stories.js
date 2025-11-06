import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "The Tale of Natrajan",
      location: "Kathmandu Valley",
      image: "/natrajan.png",
      description: "Discover the ancient story of Natrajan, a masterpiece of Nepalese sculpture that has stood the test of time. This magnificent statue represents centuries of artistic tradition and spiritual devotion.",
      date: "2024"
    },
    {
      id: 2,
      title: "Swayambhu: The Self-Arisen",
      location: "Swayambhunath Stupa",
      image: "/swayambhubanner.png",
      description: "Explore the legend of Swayambhunath, one of the most sacred Buddhist sites in Nepal. The stupa's history dates back over 2,000 years, making it a symbol of Nepal's rich spiritual heritage.",
      date: "2024"
    },
    {
      id: 3,
      title: "Bhairab: The Fierce Protector",
      location: "Various Temples",
      image: "/bhairabbanner.png",
      description: "Learn about Bhairab, the fierce manifestation of Lord Shiva, who protects devotees and maintains cosmic order. These powerful statues are found throughout Nepal's sacred sites.",
      date: "2024"
    },
    {
      id: 4,
      title: "Kali: The Divine Mother",
      location: "Kali Temples",
      image: "/kalibanner.png",
      description: "Uncover the stories behind the worship of Goddess Kali in Nepal. These statues represent the divine feminine power and the cycle of creation and destruction.",
      date: "2024"
    },
    {
      id: 5,
      title: "Kageshwori: The Crow Goddess",
      location: "Kageshwori Temple",
      image: "/kageshwori.png",
      description: "Discover the unique temple of Kageshwori, where the goddess is worshipped in the form of crows. This ancient site holds deep cultural significance for the local community.",
      date: "2024"
    },
    {
      id: 6,
      title: "Tokha Heritage",
      location: "Tokha",
      image: "/tokha.png",
      description: "Explore the rich heritage of Tokha, a traditional Newari settlement that preserves ancient architectural and cultural traditions. The statues here tell stories of community and devotion.",
      date: "2024"
    }
  ];

  return (
    <div className="stories-page">
      <Navbar />
      
      <div className="stories-hero">
        <div className="stories-hero-content">
          <h1>UNTOLD <span className="accent">STORIES</span></h1>
          <p>Browse through SAALIK's ever growing database of statues and sculptures from across Nepal, where each piece carries a story of kings, gods, artisans, and civilizations.</p>
        </div>
      </div>

      <div className="stories-container">
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <div className="story-meta">
                  <span className="story-location">{story.location}</span>
                  <span className="story-date">{story.date}</span>
                </div>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-description">{story.description}</p>
                <button className="story-read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stories;

