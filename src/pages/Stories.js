import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Stories = () => {
  const navigate = useNavigate();
  
  const stories = [
    {
      id: 1,
      title: "Khyāk: Guardians of Darkness",
      location: "Kathmandu Valley",
      image: "/khyak.png",
      date: "2024"
    },
    {
      id: 2,
      title: "Sacred Paths of Swayambhu",
      location: "Swayambhunath Stupa",
      image: "/sample1.jpeg",
      // description: "Perched atop a hill overlooking the Kathmandu Valley, the Swayambhunath Stupa stands as one of the most ancient and sacred Buddhist sites in Nepal. Known affectionately as the 'Monkey Temple' due to the holy monkeys that inhabit the area, this UNESCO World Heritage Site has been a center of pilgrimage and devotion for over 1,500 years.",
      date: "2024"
    },
    {
      id: 3,
      title: "Mysteries of Pashupatinath",
      location: "Pashupatinath",
      image: "/sample2.jpeg",
      // description: "Nestled on the banks of the sacred Bagmati River, the Pashupatinath Temple stands as one of the most revered Hindu shrines in the world. Dedicated to Lord Shiva in his form as Pashupati, the 'Lord of Animals,' this ancient temple complex has been a center of devotion, pilgrimage, and spiritual practice for over 1,400 years.",
      date: "2024"
    },
    {
      id: 4,
      title: "THE RATO MACHHINDRANATH JATRA",
      location: "Kali Temples",
      image: "/sample3.jpeg",
      // description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024"
    // },
    // {
    //   id: 5,
    //   title: "Testing Stories",
    //   location: "Lalitpur",
    //   image: "/sample4.jpeg",
    // //  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   date: "2024"
    // },
    // {
    //   id: 6,
    //   title: "Testing Stories",
    //   location: "Tokha",
    //   image: "/sample.jpeg",
    //   description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   date: "2024"
    }
  ];

  const handleReadMore = (storyId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/story/${storyId}`);
  };

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
                <button 
                  className="story-read-more"
                  onClick={() => handleReadMore(story.id)}
                >
                  Read More
                </button>
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

