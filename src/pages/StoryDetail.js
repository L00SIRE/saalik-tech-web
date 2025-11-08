import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/StoryDetail.css';

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // This would typically come from an API or database
  const getStoryDetails = (storyId) => {
    const stories = {
      1: {
        id: 1,
        title: "Khyāk: Guardians of Darkness in Newari Folklore",
        subtitle: "A Journey Through Time",
        location: "Kathmandu Valley",
        image: "/sample.png",
        fullDescription: `
        In the labyrinthine alleys of Kathmandu Valley's ancient Newar settlements, where wooden houses lean toward each other and shadows stretch long after sunset, tales of supernatural beings have been whispered from generation to generation. Among these spectral entities, the Khyāk (also spelled Khyā or Khyah) stands as one of the most intriguing and multifaceted creatures in Newari folklore—a being that embodies the complex relationship between fear, protection, and prosperity in traditional Newar culture.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Nature of the Khyāk</h2>
        The Khyāk is a mythical humanoid creature deeply embedded in the folklore of the Newar people, the indigenous inhabitants of the Kathmandu Valley. Physically, it is typically described as a short, plump, hairy, and ape-like figure with a grotesque appearance—often depicted with a protruding tongue and covered in dark or white fur. Despite its frightening visage, the Khyāk occupies a unique position in Newari mythology, existing as neither purely malevolent nor entirely benevolent.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Duality and Dwelling Places</h2>
        One of the most fascinating aspects of Khyāk lore is their dual nature. A white Khyāk is believed to bring good fortune, prosperity, and well-being to a household, filling homes with goodness and positive energy. Conversely, a black Khyāk can create problems, bring illness, and invite chaos and misfortune into people's lives.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Varieties and Behavioral Patterns</h2>
        Newari folklore distinguishes several types of Khyāks, each with unique characteristics. The Dhāpalān Khyāh is distinguished by its extremely hairy appearance, while the Lanpan Khyāh is known as a mischievous figure that blocks the way of people walking along dark streets.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Divine Associations and Cultural Significance</h2>
        Perhaps most remarkably, Khyāks hold a sacred position in Newar religious iconography. They are closely associated with Lakshmi, the Hindu goddess of wealth and prosperity.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Living Tradition: Dance and Festival</h2>
        The Khyāk's presence in Newari culture extends beyond storytelling into vibrant performance traditions. During the Yenya (Indrajatra) festival in Kathmandu, performers don elaborate Khyāk costumes and present the Khyāh Pyākhan—a dance drama featuring these supernatural creatures.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Cautionary Symbol and Modern Relevance</h2>
        Beyond entertainment and religious significance, the Khyāk serves a practical social function as a cautionary figure. Parents invoke these creatures to keep children away from dark, potentially dangerous places—abandoned buildings, isolated areas, and hazardous locations.
      `,
        date: "2024",
        additionalImages: [
          // "/sample1.jpeg",
          // "/sample2.jpeg",
          // "/sample3.jpeg"
        ]
      },
      2: {
        id: 2,
        title: "Sacred Paths of Swayambhu",
        subtitle: "The Ancient Wisdom Hill",
        location: "Swayambhunath Stupa",
        image: "/sample1.jpeg",
        fullDescription: `
        Perched atop a hill overlooking the Kathmandu Valley, the Swayambhunath Stupa stands as one of the most ancient and sacred Buddhist sites in Nepal. Known affectionately as the "Monkey Temple" due to the holy monkeys that inhabit the area, this UNESCO World Heritage Site has been a center of pilgrimage and devotion for over 1,500 years, drawing both Buddhist and Hindu devotees from across the world.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend of Self-Creation</h2>
        The name "Swayambhunath" translates to "Self-Created" or "Self-Existent," reflecting the ancient legend that the stupa emerged spontaneously from a lotus flower that bloomed in the primordial lake that once covered the Kathmandu Valley. According to Buddhist tradition, the valley was once a great lake, and when the bodhisattva Manjushri drained it with his sword, the lotus flower that had been floating on the water transformed into the sacred hill where the stupa now stands.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Architectural Marvel and Symbolism</h2>
        The stupa's architecture is rich with symbolic meaning. The white dome represents the earth, the square tower with the 13 golden rings symbolizes the path to enlightenment, and the umbrella at the top represents the sky. The iconic eyes painted on all four sides of the tower are the eyes of Buddha, watching over the valley in all directions, while the nose-like symbol between them is actually the Nepali number "1," representing unity and the one path to enlightenment.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Sacred Intersection</h2>
        What makes Swayambhunath particularly unique is its role as a sacred site for both Buddhists and Hindus. The complex includes not only the Buddhist stupa but also Hindu temples, shrines, and monasteries, creating a harmonious blend of religious traditions that reflects Nepal's rich cultural diversity. This syncretic nature has made it a symbol of religious tolerance and coexistence.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The 365 Steps to Enlightenment</h2>
        The traditional approach to Swayambhunath involves climbing 365 stone steps, each step representing a day of the year. This ascent is not merely physical but spiritual, as pilgrims make their way past prayer wheels, colorful prayer flags, and numerous shrines, spinning the wheels and offering prayers as they ascend toward the sacred summit.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Living Traditions and Festivals</h2>
        Throughout the year, Swayambhunath comes alive with festivals and ceremonies. During Buddha Jayanti (Buddha's birthday), thousands of devotees gather to celebrate, while the full moon nights see special pujas and rituals. The site remains an active center of worship, with monks and nuns maintaining daily practices, and the sound of mantras and the scent of incense creating an atmosphere of profound spirituality.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Guardians of the Sacred Hill</h2>
        The resident monkeys of Swayambhunath are considered sacred and are protected as guardians of the temple. These rhesus macaques have lived on the hill for centuries and are believed to be manifestations of the bodhisattva Manjushri's hair. While they add to the temple's charm, they also serve as a reminder of the wild, untamed nature that exists alongside human spirituality.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Beacon of Peace and Wisdom</h2>
        Today, Swayambhunath continues to serve as a beacon of peace, wisdom, and spiritual awakening. Whether visited at dawn when the morning light illuminates the golden spire, or at dusk when the valley below twinkles with lights, the stupa offers a timeless sanctuary for reflection, prayer, and connection with the divine. It stands as a testament to Nepal's enduring spiritual heritage and the universal quest for enlightenment.
      `,
        date: "2024",
        additionalImages: [
          // "/sample1.jpeg",
          // "/sample2.jpeg",
          // "/sample3.jpeg"
        ]
      },
      3: {
        id: 3,
        title: "Mysteries of Pashupatinath",
        subtitle: "The Sacred Abode of Lord Shiva",
        location: "Pashupatinath",
        image: "/sample2.jpeg",
        fullDescription: `
        Nestled on the banks of the sacred Bagmati River, the Pashupatinath Temple stands as one of the most revered Hindu shrines in the world. Dedicated to Lord Shiva in his form as Pashupati, the "Lord of Animals," this ancient temple complex has been a center of devotion, pilgrimage, and spiritual practice for over 1,400 years, drawing millions of devotees and seekers from across Nepal and beyond.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend of Divine Discovery</h2>
        According to ancient legend, the Pashupatinath Temple was discovered when a cow would daily visit a particular spot on the banks of the Bagmati River and pour her milk upon the ground. When the cow's owner dug at this spot, he discovered a magnificent Shiva Lingam—a representation of Lord Shiva's divine energy. This discovery led to the construction of the temple, which has since become one of the holiest sites in Hinduism.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Architectural Splendor and Sacred Geometry</h2>
        The main temple, built in the pagoda style of Nepalese architecture, features a two-tiered golden roof and four silver doors facing the cardinal directions. The temple's architecture reflects deep spiritual symbolism, with intricate wood carvings depicting various deities, celestial beings, and mythological scenes. The inner sanctum houses the sacred Shiva Lingam, which is adorned daily with flowers, milk, and sacred water by the temple priests.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Sacred Bagmati River</h2>
        The Bagmati River, flowing beside the temple, holds immense spiritual significance. It is believed that bathing in its waters purifies the soul and washes away sins. The riverbanks are lined with numerous smaller temples, shrines, and ghats (stone steps leading to the water), where devotees perform rituals, offer prayers, and cremate their departed loved ones, believing that cremation here ensures liberation of the soul.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Living Tradition of Sadhus</h2>
        Pashupatinath is home to a vibrant community of sadhus—Hindu holy men who have renounced worldly life to pursue spiritual enlightenment. These ascetics, with their distinctive appearance, painted faces, and matted hair, can be seen throughout the temple complex, meditating, performing rituals, and offering blessings to devotees. Their presence adds to the temple's mystical atmosphere and serves as a living connection to ancient spiritual traditions.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Mahashivaratri: The Great Night of Shiva</h2>
        The temple comes alive during Mahashivaratri, one of the most important Hindu festivals dedicated to Lord Shiva. On this night, hundreds of thousands of devotees gather at Pashupatinath, staying awake through the night in prayer, meditation, and celebration. The temple complex is illuminated with countless oil lamps, and the air resonates with chants, bells, and devotional songs, creating an atmosphere of profound spiritual energy.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A UNESCO World Heritage Site</h2>
        Recognized as a UNESCO World Heritage Site in 1979, Pashupatinath represents not just a place of worship but a living museum of Nepalese culture, architecture, and spirituality. The temple complex includes over 500 smaller temples, ashrams, and monuments, each with its own history and significance, creating a sacred landscape that has evolved over centuries.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Cycle of Life and Death</h2>
        Pashupatinath serves as a powerful reminder of the cycle of life, death, and rebirth—central themes in Hindu philosophy. The cremation ghats along the Bagmati River witness daily funeral ceremonies, where families bid farewell to their loved ones in the belief that their souls will find peace and liberation. This proximity of life and death, celebration and mourning, creates a unique spiritual environment that encourages reflection on the impermanent nature of existence.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Beacon of Devotion and Unity</h2>
        Today, Pashupatinath continues to serve as a beacon of devotion, drawing people from all walks of life—from humble villagers to world leaders, from devout pilgrims to curious travelers. The temple stands as a testament to the enduring power of faith and the deep spiritual heritage of Nepal, offering a sanctuary where the divine and the human meet, where ancient traditions live on, and where the mysteries of existence are contemplated in the shadow of the sacred.
      `,
        date: "2024",
        additionalImages: [
          // "/sample1.jpeg",
          // "/sample2.jpeg",
          // "/sample3.jpeg"
        ]
      },
      4: {
        id: 4,
        title: "THE RATO MACHHINDRANATH JATRA: THE LONGEST CHARIOT FESTIVAL OF NEPAL",
        subtitle: "Historical Origins and Religious Significance",
        location: "Lalitpur",
        image: "/sample3.jpeg",
        fullDescription: `
        The Rato Machhindranath Jatra stands as Nepal's longest-running chariot festival, with origins dating back approximately 1,300 years to the reign of Licchavi King Narendra Deva (643-679 CE). This month-long celebration in Lalitpur, also known as Bunga Dyah Jatra in the Newari language, honors Rato Machhindranath, the god of rain and harvest. The name "Rato" means red, referring to the deity's red-colored image, while "Machhindranath" translates to "Lord of the Fishes."

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Ancient Beginnings</h2>
        The festival holds deep religious meaning for both communities. Hindus worship Rato Machhindranath as a manifestation of the god of rain and prosperity. Buddhists venerate him as Karunamaya ("the Compassionate One"), an aspect of Avalokiteshvara, who embodies all Buddhas' compassion. This dual identity makes the festival a perfect example of Nepal's unique tradition where Hindu and Buddhist practices blend seamlessly.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend of Drought and Divine Intervention</h2>
        According to ancient legend, the Kathmandu Valley once suffered a terrible twelve-year drought. Rivers dried up, crops withered, and people faced starvation. Tantric priests discovered the cause—Guru Gorakhnath, a powerful yogi, had become angry with the valley's inhabitants. Some stories say he was offended when townspeople refused to offer him food during his visit to Patan.

        In his fury, Gorakhnath captured all the Nagas (serpent deities) responsible for bringing rain. He made these serpents into a cushion and sat on them in deep meditation, effectively blocking all rainfall. As long as Gorakhnath remained in this meditative state, the valley would receive no rain.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Quest to Bring Machhindranath</h2>
        King Narendra Deva consulted with tantric priests to find a solution. A tantric named Bandyudatta Acharya revealed that the only way to free the serpents was to bring Guru Gorakhnath's teacher, Rato Machhindranath, from Assam in India. Upon sensing his teacher's presence, Gorakhnath would have to break his meditation and stand respectfully, thereby freeing the rain-bringing Nagas.

        The king, accompanied by Tantric Bandyudatta from Kathmandu and a farmer named Lalit Jyapu from Lalitpur, embarked on a dangerous journey to Assam. They discovered that Machhindranath had been reborn as the 108th son of King Sashi. Because he was the son of a Daitya (demon), bringing him back proved extremely difficult. After many failed attempts, the tantric summoned four Bhairabs who successfully brought Machhindranath back to the valley.

        When they reached Bungamati, they took Machhindranath to where Guru Gorakhnath was meditating. Sensing his teacher's presence, Gorakhnath immediately came out of his trance and stood respectfully. The Nagas were freed, and rain poured down upon the parched valley, ending the drought. King Narendra Deva then established the annual chariot festival to honor the deity who had saved the valley.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Building the Sacred Chariot</h2>
        The construction of the Rato Machhindranath chariot begins about fifteen days before the procession. Eight specific localities in Lalitpur—Natal, Gabalal, Mekhabahal, Kusunti, Kayani, Walmaya, Dhaugol, and Sachhichhe—come together at Pulchowk to build the massive 60-foot tall wooden chariot from scratch every year using bamboo, wood, and traditional materials.

        The chariot features four large wheels, two long ropes for pulling, and is built in pagoda style. It's decorated with colorful cloth sewn by the Damai community, incense, and flags. Once complete, the idol of Rato Machhindranath is ceremonially placed inside during an auspicious time. A smaller chariot carrying Minnath (an embodiment of Lord Shiva) follows behind, pulled by young boys.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Month-Long Journey</h2>
        The festival begins on the fourth day of the bright fortnight of Bachhala, typically in late April or May, just before the monsoon season. For about a month, thousands of devotees pull the massive chariot through Lalitpur's narrow streets. The route passes through Gabahal, Mangal Bazar, Natole, Sundhara, Hakha, Chakrabahil, Kumaripati, and Lagankhel, finally ending at Jawalakhel.

        Throughout this journey, the chariot stops at different locations for special prayers and rituals. The atmosphere is charged with devotion, featuring traditional music, masked dances, and religious ceremonies. The entire Newar community participates, believing this act of devotion will bring blessings of rain, fertility, and protection.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Bhoto Jatra: The Festival's Grand Finale</h2>
        The festival concludes with Bhoto Jatra, which means "vest festival." When the chariot reaches Jawalakhel, thousands gather to witness the display of a sacred, jewel-studded black vest called the Bhoto. The ceremony includes the President, Prime Minister, Cabinet Ministers, and the living goddess Kumari of Patan.

        Senior priests climb onto the chariot and raise the Bhoto in all four cardinal directions so everyone can see it. This symbolic display represents openness, trust, and the unresolved question of ownership.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend Behind the Bhoto</h2>
        According to legend, a farmer helped cure the eye ailment of the queen of Karkotaka Nag, the serpent king of Taudaha Lake. Grateful for the healing, Karkotaka gave the farmer precious gifts including a beautiful black vest encrusted with diamonds and gems.

        One day, while the farmer worked in his field, a ghost stole the vest. Later, during the chariot festival, the farmer spotted the ghost wearing his stolen Bhoto and confronted him. The ghost claimed he had found the vest lying unused. Unable to resolve the argument, they brought the matter before King Gunakamdev (949-994 CE).

        The king listened carefully but neither could provide proof of ownership. Even when Karkotaka Nag was summoned to court, the evidence remained inconclusive. King Gunakamdev decided that until either party could produce definite proof, the Bhoto would remain in the custody of Rato Machhindranath's priests.

        From that day forward, the jeweled vest has been displayed publicly every year with the hope that the rightful owner will come forward with proof. Despite centuries passing, no one has ever successfully proven ownership, and it remains in the deity's custody to this day.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Symbol of Agricultural Prosperity</h2>
        The Rato Machhindranath Jatra is fundamentally a festival of thanksgiving for agricultural prosperity. The timing—just before the monsoon season—reflects its deep connection to farming cycles. Farmers celebrate believing that Rato Machhindranath will ensure timely rains necessary for crops. The legend of how Machhindranath ended the twelve-year drought serves as a powerful reminder of the deity's role as protector and provider.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Unity Among Communities</h2>
        Historically, the festival brought together the three kingdoms of the Kathmandu Valley—Kathmandu, Bhaktapur, and Lalitpur. Each kingdom contributed resources, manpower, and expertise to organize the festival. This collaborative effort fostered unity among the valley's diverse communities.

        Today, the festival continues bringing together people from different backgrounds. The construction requires collaboration between various castes and ethnic groups—the Manandhars, Damais, and other Newar communities each have specific responsibilities. The Nepal Army assists with logistics. This collective participation makes the festival a powerful symbol of social harmony and shared cultural identity.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Living Tradition</h2>
        The Rato Machhindranath Jatra represents far more than a colorful chariot festival. It embodies the Kathmandu Valley's deepest spiritual traditions, agricultural wisdom, and social unity. From the ancient story of Guru Gorakhnath's anger and the quest to bring his teacher from Assam, to the mysterious Bhoto that awaits its rightful owner after centuries, the festival weaves together narratives about water, food, wisdom, and gratitude.

        As the towering 60-foot chariot makes its way through Lalitpur's streets each year, pulled by thousands of devoted hands, it carries the collective hopes, prayers, and cultural identity of an entire community. When the Bhoto is displayed at Jawalakhel, held high for all to see, it symbolizes both the mysteries that remain unsolved and the enduring faith that continues to unite the people of the Kathmandu Valley generation after generation.
      `,
        date: "2024",
        additionalImages: [
          // "/sample1.jpeg",
          // "/sample2.jpeg",
          // "/sample3.jpeg"
        ]
      },
    };

    return stories[storyId] || stories[1];
  };

  const story = getStoryDetails(Number(id));

  // Generate recommended stories dynamically from uploaded stories, excluding current story
  const allStories = [1, 2, 3, 4]; // IDs of uploaded stories
  const recommendedStories = allStories
    .filter(storyId => storyId !== story.id) // Exclude current story
    .map(storyId => {
      const storyData = getStoryDetails(storyId);
      return {
        id: storyData.id,
        title: storyData.title,
        image: storyData.image,
        location: storyData.location
      };
    })
    .slice(0, 3); // Limit to 3 recommendations

  return (
    <div className="story-detail-page">
      <Navbar />
      
      <div className="story-detail-container">
        {/* Update the Back Button container styles */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginBottom: '2rem',
          marginTop: '2rem',  // Added top margin
          position: 'sticky',  // Makes button stick while scrolling
          top: '20px',        // Distance from top while sticky
          zIndex: 10         // Ensures button stays above other content
        }}>
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#00bf63',
              color: '#ffffff',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 10px rgba(0,191,99,0.2)',
              position: 'relative',
              overflow: 'hidden',
              marginTop: '20px'  // Added top margin to button itself
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(5px)'; // Changed from -5px to 5px
              e.currentTarget.style.backgroundColor = '#00a352';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.backgroundColor = '#00bf63';
            }}
          >
            Back to Stories
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: '4px' }} // Changed from marginRight to marginLeft
            >
              <path 
                d="M5 12H19M19 12L12 19M19 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        <div className="story-content-wrapper">
          <div className="story-detail-header">
            <h1 className="story-title" style={{ 
              color: '#00bf63', 
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              borderBottom: '3px solid #2E7D32',
              paddingBottom: '0.5rem'
            }}>
              {story.title}
            </h1>
            <h2 className="story-subtitle" style={{
              color: '#ffffffff',
              fontStyle: 'italic',
              marginTop: '1rem'
            }}>
              {story.subtitle}
            </h2>
            <div className="story-meta" style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '1rem'
            }}>
              <span className="location">📍 {story.location}</span>
              <span className="date">📅 {story.date}</span>
            </div>
          </div>

          <div className="story-detail-main">
            <img 
              src={story.image} 
              alt={story.title} 
              className="main-image"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
            
            <div className="story-content" style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#ffffffff'
            }}
              dangerouslySetInnerHTML={{ __html: story.fullDescription }}
            />

            <div className="additional-images" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '2rem 0'
            }}>
              {story.additionalImages.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Additional view ${index + 1}`} 
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Stories Section */}
        <div className="recommended-stories" style={{
          marginTop: '6rem',
          padding: '3rem',
          background: 'linear-gradient(180deg, #000000 0%, #001a0d 100%)',
          borderRadius: '20px',
          boxShadow: '0 4px 30px rgba(0, 191, 99, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '3rem',
            borderBottom: '2px solid #00bf63',
            paddingBottom: '1rem'
          }}>
            <h3 style={{ 
              color: '#00bf63', 
              fontSize: '2.2rem',
              fontWeight: '600',
              margin: '0'
            }}>
              Recommended Stories
            </h3>
            <div style={{
              marginLeft: 'auto',
              color: '#00bf63',
              fontSize: '0.9rem'
            }}>
            
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {recommendedStories.map(story => (
              <div 
                key={story.id} 
                className="recommended-story-card"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(145deg, #001a0d 0%, #000000 100%)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 191, 99, 0.1)',
                  position: 'relative'
                }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate(`/story/${story.id}`);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 191, 99, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '250px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={story.image} 
                    alt={story.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                    padding: '2rem 1.5rem',
                  }}>
                    <h4 style={{ 
                      color: '#ffffff',
                      fontSize: '1.4rem',
                      marginBottom: '0.5rem',
                      fontWeight: '500'
                    }}>
                      {story.title}
                    </h4>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#00bf63'
                    }}>
                      <span>📍</span>
                      <span style={{ fontSize: '0.9rem' }}>{story.location}</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    color: '#00bf63',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read Full Story
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#00bf63"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StoryDetail;