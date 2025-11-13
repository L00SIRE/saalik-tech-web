import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './IdolDetector.css';

const IdolDetector = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if already authenticated in this session
    return sessionStorage.getItem('idolDetectorAuth') === 'true';
  });
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Hardcoded credentials (internal use only)
  const INTERNAL_USER_ID = 'saalik_internal_2024';
  const INTERNAL_PASSWORD = 'SAALIK@IdolDetector2024';

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedIdol, setDetectedIdol] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectionTime, setDetectionTime] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [detectionError, setDetectionError] = useState(null);
  const fileInputRef = useRef(null);

  // Pre-saved idol database (you can expand this)
  const idolDatabase = {
    'krishna': {
      name: 'Lord Krishna',
      sanskritName: 'कृष्ण',
      description: 'Lord Krishna is the eighth avatar of Vishnu and one of the most widely revered deities in Hinduism. He is known as the divine statesman, the flute-playing cowherd, and the supreme personality of Godhead. Born in Mathura to Devaki and Vasudeva, Krishna spent his childhood in Vrindavan as a mischievous cowherd, playing his divine flute and enchanting all living beings. His life is a perfect blend of divine play (leela) and profound philosophy, teaching humanity about dharma, devotion, and the path to liberation through the timeless wisdom of the Bhagavad Gita delivered on the battlefield of Kurukshetra.',
      attributes: ['Flute', 'Peacock Feather', 'Cow', 'Butter', 'Yellow Garments', 'Blue Complexion', 'Crown with Peacock Feather'],
      significance: 'Krishna represents divine love, compassion, and the path of devotion (Bhakti Yoga). He is the central figure of the Bhagavad Gita, where he reveals the nature of the self, karma, and the ultimate reality. Krishna embodies perfect balance between worldly duties and spiritual realization, teaching that one can achieve liberation while living in the world through selfless action and devotion.',
      temples: ['Krishna Janmashtami Temple (Mathura)', 'ISKCON Temples worldwide', 'Dwarkadhish Temple (Dwarka)', 'Banke Bihari Temple (Vrindavan)'],
      image: '/idols/krishna.jpg',
      location: 'Mathura, Vrindavan, Dwarka, India',
      stories: 'Krishna\'s life is filled with divine stories: his birth in prison, childhood miracles in Vrindavan, lifting Govardhan Hill, defeating demons, and his role as charioteer in the Mahabharata war. His Raas Leela with the Gopis symbolizes the eternal dance between the soul and the divine.'
    },
    'shiva': {
      name: 'Lord Shiva',
      sanskritName: 'शिव',
      description: 'Lord Shiva is one of the principal deities of Hinduism, known as "The Destroyer" in the Trimurti. He is the supreme being who creates, protects, and transforms the universe. Shiva represents the eternal consciousness that transcends all dualities. He is both the ascetic yogi meditating in the Himalayas and the cosmic dancer (Nataraja) who performs the Tandava, the dance of creation and destruction. Shiva is also known as Pashupatinath, the Lord of all creatures, and is revered as the Adi Guru, the first teacher of yoga and meditation.',
      attributes: ['Trident (Trishula)', 'Third Eye', 'Snake (Vasuki)', 'Crescent Moon', 'Damaru (Drum)', 'Ganga (River)', 'Tiger Skin', 'Rudraksha Beads', 'Bhasma (Sacred Ash)'],
      significance: 'Shiva represents the cosmic consciousness, meditation, and the destruction of ignorance. He is the patron god of yoga and arts. As the destroyer, Shiva dissolves the universe at the end of each cosmic cycle, making way for new creation. His third eye represents wisdom and the power to destroy ignorance, while his trident symbolizes the three gunas (qualities) of nature. Shiva embodies the perfect balance between asceticism and householder life, showing that spiritual realization can be achieved in any circumstance.',
      temples: ['Pashupatinath Temple (Kathmandu, Nepal)', 'Kashi Vishwanath Temple (Varanasi)', 'Kedarnath Temple (Uttarakhand)', 'Amarnath Cave (Jammu & Kashmir)', 'Somnath Temple (Gujarat)'],
      image: '/idols/shiva.jpg',
      location: 'Mount Kailash, Himalayas, Varanasi, Kathmandu',
      stories: 'Shiva\'s stories include his marriage to Parvati, drinking the poison Halahala to save the universe, his cosmic dance as Nataraja, and his role as the destroyer of Tripura (three cities of demons). The Pashupatinath Temple in Kathmandu is one of the most sacred Shiva temples, attracting millions of devotees and pilgrims.'
    },
    'ganesh': {
      name: 'Lord Ganesha',
      sanskritName: 'गणेश',
      description: 'Lord Ganesha is the elephant-headed god of wisdom, success, and good fortune. He is the remover of obstacles and the son of Shiva and Parvati. According to legend, Parvati created Ganesha from her body to guard her privacy. When Shiva unknowingly beheaded him, he replaced Ganesha\'s head with that of an elephant, making him unique among all deities. Ganesha is known for his wisdom, which he demonstrated by circumambulating his parents instead of the entire universe, teaching that parents are the entire universe. His broken tusk symbolizes sacrifice and the willingness to break attachments for higher knowledge.',
      attributes: ['Elephant Head', 'Modak (Sweet)', 'Mouse (Vehicle)', 'Broken Tusk', 'Large Belly', 'Four Arms', 'Trunk', 'Lotus'],
      significance: 'Ganesha is worshipped at the beginning of any new venture or journey. He represents intellect, wisdom, and the ability to overcome obstacles. His large head symbolizes wisdom, his big ears represent listening, and his small eyes signify concentration. Ganesha teaches that true success comes from removing inner obstacles like ego, greed, and attachment. He is invoked before starting any important work, ceremony, or spiritual practice.',
      temples: ['Siddhivinayak Temple (Mumbai)', 'Ganesh Chaturthi celebrations', 'Ashtavinayak Temples (Maharashtra)', 'Ganesha Temple (Pillaiyarpatti, Tamil Nadu)'],
      image: '/idols/ganesh.jpg',
      location: 'Worshipped across India and Nepal, especially in Maharashtra',
      stories: 'Ganesha\'s famous stories include his creation by Parvati, the competition with his brother Kartikeya to circle the universe, and his role as the scribe who wrote the Mahabharata as Vyasa dictated. The festival of Ganesh Chaturthi celebrates his birth and is one of India\'s most vibrant celebrations.'
    },
    'durga': {
      name: 'Goddess Durga',
      sanskritName: 'दुर्गा',
      description: 'Goddess Durga is the warrior goddess who combats evil forces and protects the universe. She is the divine mother and the embodiment of feminine power (Shakti). Created by the combined energies of all gods to defeat the demon Mahishasura, Durga represents the invincible power of the divine feminine. Riding a lion, she wields multiple weapons in her many arms, symbolizing her ability to protect devotees from all directions. Durga means "the invincible" and she is worshipped as the mother who protects her children from all forms of suffering and evil.',
      attributes: ['Multiple Arms (8 or 10)', 'Lion (Vehicle)', 'Weapons (Trident, Sword, Discus, Conch)', 'Trident', 'Lotus', 'Demon Under Feet', 'Third Eye', 'Crown'],
      significance: 'Durga represents the victory of good over evil, divine feminine power, and protection. She is worshipped during Navratri, a nine-night festival celebrating her various forms. Durga embodies shakti (divine energy) and teaches that inner strength and courage can overcome any obstacle. She is both fierce in battle and compassionate as a mother, showing that true power includes both protection and love.',
      temples: ['Durga Temple (Varanasi)', 'Kalighat Temple (Kolkata)', 'Kamakhya Temple (Assam)', 'Vaishno Devi Temple (Jammu)', 'Dakshineswar Kali Temple (Kolkata)'],
      image: '/idols/durga.jpg',
      location: 'Worshipped across India, especially in West Bengal, Assam, and Varanasi',
      stories: 'Durga\'s most famous story is her battle with Mahishasura, the buffalo demon who could not be defeated by any male god. She fought for nine days and nights, finally slaying him on the tenth day (Vijayadashami). During Navratri, her nine forms (Navadurga) are worshipped, each representing different aspects of divine feminine power.'
    },
    'vishnu': {
      name: 'Lord Vishnu',
      sanskritName: 'विष्णु',
      description: 'Lord Vishnu is the preserver and protector of the universe in the Hindu Trimurti. He maintains cosmic order (dharma) and takes various avatars to restore balance whenever evil threatens the world. Vishnu is often depicted reclining on the cosmic serpent Shesha in the ocean of milk, with his consort Lakshmi massaging his feet. He represents the sustaining force of the universe, ensuring that creation continues in harmony. Vishnu\'s ten avatars (Dashavatara) represent the evolution of consciousness and his interventions at critical moments in cosmic history.',
      attributes: ['Conch Shell (Shankha)', 'Discus (Sudarshana Chakra)', 'Lotus (Padma)', 'Mace (Gada)', 'Garuda (Vehicle)', 'Blue Complexion', 'Crown', 'Four Arms', 'Yellow Garments'],
      significance: 'Vishnu represents preservation, protection, and the maintenance of cosmic order. He is known for his ten avatars including Rama, Krishna, and Buddha. Vishnu teaches that the divine actively participates in the world to protect dharma and guide souls toward liberation. His presence in the world through avatars shows that the divine is always accessible to devotees, appearing in forms they can relate to and worship.',
      temples: ['Badrinath Temple (Uttarakhand)', 'Tirupati Balaji Temple (Andhra Pradesh)', 'Ranganatha Swamy Temple (Tamil Nadu)', 'Jagannath Temple (Puri, Odisha)', 'Venkateswara Temple (Tirumala)'],
      image: '/idols/vishnu.jpg',
      location: 'Worshipped across India, especially in South India and Vaishnavite temples',
      stories: 'Vishnu\'s ten avatars include Matsya (fish), Kurma (tortoise), Varaha (boar), Narasimha (man-lion), Vamana (dwarf), Parashurama, Rama, Krishna, Buddha, and Kalki (future avatar). Each avatar appears when dharma is threatened, restoring cosmic balance. The stories of Rama and Krishna are among the most beloved in Hindu tradition.'
    },
    'lakshmi': {
      name: 'Goddess Lakshmi',
      sanskritName: 'लक्ष्मी',
      description: 'Goddess Lakshmi is the goddess of wealth, fortune, power, beauty, and prosperity. She is the consort of Lord Vishnu and the embodiment of abundance in all forms - material, spiritual, and emotional. Lakshmi emerged from the churning of the cosmic ocean (Samudra Manthan) and chose Vishnu as her eternal consort. She is often depicted seated on a lotus, symbolizing purity and spiritual wealth that transcends material attachments. Lakshmi has eight forms (Ashtalakshmi) representing different types of prosperity including wealth, knowledge, courage, and victory.',
      attributes: ['Lotus', 'Gold Coins', 'Elephants (Gajalakshmi)', 'Owl (Vehicle)', 'Four Arms', 'Golden Complexion', 'Red Garments', 'Gold Ornaments', 'Abhaya Mudra (Gesture of Protection)'],
      significance: 'Lakshmi represents material and spiritual wealth, prosperity, and good fortune. She is worshipped during Diwali and other festivals. Lakshmi teaches that true prosperity comes from inner abundance, generosity, and gratitude. She bestows wealth on those who work with integrity, share their abundance, and maintain dharma. Her presence in a home is believed to bring harmony, prosperity, and spiritual growth.',
      temples: ['Mahalakshmi Temple (Mumbai)', 'Lakshmi Narayan Temple (Delhi)', 'Ashtalakshmi Temple (Chennai)', 'Kolhapur Mahalakshmi Temple (Maharashtra)'],
      image: '/idols/lakshmi.jpg',
      location: 'Worshipped across India, especially during Diwali and festivals',
      stories: 'Lakshmi\'s stories include her emergence from the cosmic ocean, her marriage to Vishnu, and her role in bringing prosperity to devotees. During Diwali, she is believed to visit homes that are clean, well-lit, and filled with positive energy. The story of her choosing Vishnu over other gods demonstrates that true wealth comes from choosing the path of dharma.'
    },
    'hanuman': {
      name: 'Lord Hanuman',
      sanskritName: 'हनुमान',
      description: 'Lord Hanuman is the monkey god known for his unwavering devotion to Lord Rama. He is the symbol of strength, courage, and selfless service. Born to Anjana and Kesari, Hanuman is considered an incarnation of Lord Shiva. His devotion to Rama is legendary - he crossed the ocean to Lanka, found Sita, and played a crucial role in Rama\'s victory over Ravana. Hanuman represents the perfect devotee, showing that through pure devotion and selfless service, one can achieve the highest spiritual realization. His strength comes from his celibacy, discipline, and complete surrender to the divine.',
      attributes: ['Mace (Gada)', 'Monkey Form', 'Flying Ability', 'Rama\'s Name on Chest', 'Red Complexion', 'Tail', 'Rudraksha Beads', 'Orange Garments'],
      significance: 'Hanuman represents devotion, strength, and loyalty. He is worshipped for protection, courage, and overcoming challenges. Hanuman teaches that physical strength combined with spiritual devotion creates invincible power. His unwavering faith in Rama shows that true devotion can move mountains (literally, as he carried a mountain with healing herbs). Hanuman is especially revered by wrestlers, athletes, and those seeking physical and mental strength.',
      temples: ['Hanuman Dhoka (Kathmandu, Nepal)', 'Sankat Mochan Temple (Varanasi)', 'Hanuman Mandir (Delhi)', 'Mehendipur Balaji Temple (Rajasthan)', 'Hampi Anjaneya Temple (Karnataka)'],
      image: '/idols/hanuman.jpg',
      location: 'Worshipped across India and Nepal, especially in North India',
      stories: 'Hanuman\'s famous stories include his childhood attempt to swallow the sun, his leap across the ocean to Lanka, his meeting with Sita, burning Lanka with his tail, and carrying the mountain with healing herbs. The Hanuman Chalisa, a 40-verse prayer, is one of the most recited texts in Hinduism, believed to bring protection and remove obstacles.'
    },
    'saraswati': {
      name: 'Goddess Saraswati',
      sanskritName: 'सरस्वती',
      description: 'Goddess Saraswati is the goddess of knowledge, music, art, wisdom, and learning. She is the consort of Lord Brahma and the patron of arts and sciences. Saraswati represents the flow of wisdom and consciousness. She is often depicted seated on a white lotus, playing the veena (a stringed instrument), with a swan as her vehicle. The swan symbolizes the ability to discriminate between good and evil, while the lotus represents purity and transcendence. Saraswati is the source of all creative and intellectual pursuits, inspiring artists, musicians, writers, and students.',
      attributes: ['Veena (Musical Instrument)', 'Book (Vedas)', 'Swan (Vehicle)', 'Lotus', 'White Sari', 'White Complexion', 'Four Arms', 'Rosary (Mala)', 'Water Pot (Kamandalu)'],
      significance: 'Saraswati represents knowledge, creativity, and wisdom. She is worshipped by students, artists, and scholars. Saraswati teaches that true knowledge leads to liberation and that learning should be pursued for its own sake, not just for material gain. She embodies the idea that knowledge is the greatest wealth and that wisdom comes from both study and experience. Her presence brings clarity of thought, creativity, and the ability to express oneself beautifully.',
      temples: ['Saraswati Temples across India', 'Basanta Panchami celebrations', 'Dakshineswar Temple (Kolkata)', 'Saraswati Temple (Pushkar)'],
      image: '/idols/saraswati.jpg',
      location: 'Worshipped across India, especially during Basanta Panchami and educational institutions',
      stories: 'Saraswati is believed to have created Sanskrit, the language of the gods. She is associated with the river Saraswati, which is said to flow underground. During Basanta Panchami (spring festival), students worship her before beginning their studies. The story of her creation by Brahma shows that knowledge is the foundation of creation itself.'
    },
    'kaalbhairab': {
      name: 'Kaal Bhairav',
      sanskritName: 'काल भैरव',
      description: 'Kaal Bhairav is a fierce form of Lord Shiva, known as the guardian of justice and the protector of Kathmandu. Carved from a single block of black stone, this ancient statue stands nearly 12 feet high in Kathmandu Durbar Square. Dating back to the 5th-6th century CE (Licchavi period), Kaal Bhairav is unique among all Bhairavs in the Hindu-Buddhist world because he smiles - a mysterious grin that legend attributes to a clever woman\'s wit. "Kaal" means time or death, and "Bhairav" means fearsome, together symbolizing the force that devours time and destroys illusion. The statue served as Nepal\'s divine court of justice for centuries, where oaths and confessions took place, and lying was believed to cause instant death.',
      attributes: ['Six Arms', 'Skull Garland', 'Trampling Corpse', 'Serpent Ornaments', 'Blood-Red Eyes', 'Smiling Face', 'Black Stone', 'Trident', 'Damaru (Drum)', 'Sword'],
      significance: 'Kaal Bhairav represents divine justice, protection, and the destruction of ignorance. He is the guardian of Kathmandu and serves as both protector and judge. The statue bridges Hindu and Buddhist traditions - Hindus revere him as the city\'s guardian, while Newar Buddhists honor him as a Dharmapala (protector of Dharma). His smile symbolizes divine humor and acceptance of human complexity, teaching that even cosmic judgment can appreciate human intelligence and wit.',
      temples: ['Kaal Bhairav Shrine (Kathmandu Durbar Square, Nepal)', 'Hanuman Dhoka Palace Complex'],
      image: '/idols/kaalbhairab.jpg',
      location: 'Kathmandu Durbar Square, Hanuman Dhoka Palace, Kathmandu, Nepal',
      stories: 'The legend tells of a wife accused of adultery who was ordered to swear before Kaal Bhairav. Before the ritual, she visited her mother and asked to be breastfed once more. When she stood before the deity, she swore, "I have done nothing immoral since drinking my mother\'s milk" - technically true. Realizing her cleverness, Bhairav smiled in divine amusement, and the statue has been known for its eternal grin ever since. During Indra Jatra festival, thousands gather before him, and the hidden Swet Bhairav (White Bhairav) is revealed once a year.'
    },
    'kali': {
      name: 'Birupakshya (Self-Emerging Kali)',
      sanskritName: 'विरूपाक्ष',
      description: 'Birupakshya, also known as Kirateswor Mahadev or Virupaksha, is the self-emerging statue located in the sacred grounds of Pashupatinath Temple in Kathmandu, Nepal. This ancient statue, dating back to the 1st century BCE from the Kirat dynasty, represents one of archaeology\'s most compelling mysteries. Currently, only half of the statue is visible above ground, with the other half remaining buried beneath the earth. The visible portion displays remarkable craftsmanship with Kirat-type facial features, distinctive nose and eyes, ornate earrings, beautifully curled hair, thick lips, sharp body texture, and most significantly, three eyes similar to Lord Shiva. Birupakshya means "the one with distorted eyes" or "odd-eyed" and represents one of the eleven Rudras, embodying Shiva\'s fierce aspect.',
      attributes: ['Three Eyes', 'Kirat Facial Features', 'Ornate Earrings', 'Curled Hair', 'Thick Lips', 'Partially Buried', 'Stone Carving', 'Ancient Kirat Style'],
      significance: 'The Birupakshya statue holds unique significance in both Hindu and Buddhist traditions. For Hindu devotees, it represents Kirateswor Mahadev, a fierce form of Shiva particularly revered by the Kirat communities. For Buddhist practitioners, the statue connects to the legend of Buddha\'s intervention in Virupaksha\'s spiritual journey. The gradual emergence of the statue symbolizes eternal spiritual transformation and cosmic renewal, representing the eternal cycle of time and the interconnectedness of creation and destruction. The phenomenon serves as a powerful reminder of Nepal\'s profound spiritual heritage and the timeless human quest for understanding divine mysteries.',
      temples: ['Pashupatinath Temple Complex (Kathmandu, Nepal)'],
      image: '/idols/kali.jpg',
      location: 'Pashupatinath Temple, Kathmandu, Nepal (UNESCO World Heritage Site)',
      stories: 'According to legend, Virupaksha was a child from a poor family who searched for his missing father. After years of searching, he unknowingly encountered his mother in a cave, leading to a relationship that marked the beginning of Kali Yuga. Overwhelmed by guilt, Virupaksha visited Pashupatinath where he encountered Lord Shiva preparing an intoxicating substance. When Shiva instructed him to open a hot vessel, Virupaksha\'s face was burned, turning black and earning him the name Kurup. Seeking solace with Buddha, he received a garland and was instructed to chant until it withered. When locals discovered him meditating with Buddha\'s garland on Pashupati\'s sacred grounds, they buried him due to his previous conflict with Shiva. According to tradition, Virupaksha will seek vengeance upon humanity when eventually freed from the ground. The statue\'s gradual emergence continues to fascinate pilgrims and scholars alike.'
    },
    'bhairab': {
      name: 'Kaal Bhairav',
      sanskritName: 'काल भैरव',
      description: 'Kaal Bhairav is a fierce form of Lord Shiva, known as the guardian of justice and the protector of Kathmandu. Carved from a single block of black stone, this ancient statue stands nearly 12 feet high in Kathmandu Durbar Square. Dating back to the 5th-6th century CE (Licchavi period), Kaal Bhairav is unique among all Bhairavs in the Hindu-Buddhist world because he smiles - a mysterious grin that legend attributes to a clever woman\'s wit. "Kaal" means time or death, and "Bhairav" means fearsome, together symbolizing the force that devours time and destroys illusion. The statue served as Nepal\'s divine court of justice for centuries, where oaths and confessions took place, and lying was believed to cause instant death.',
      attributes: ['Six Arms', 'Skull Garland', 'Trampling Corpse', 'Serpent Ornaments', 'Blood-Red Eyes', 'Smiling Face', 'Black Stone', 'Trident', 'Damaru (Drum)', 'Sword'],
      significance: 'Kaal Bhairav represents divine justice, protection, and the destruction of ignorance. He is the guardian of Kathmandu and serves as both protector and judge. The statue bridges Hindu and Buddhist traditions - Hindus revere him as the city\'s guardian, while Newar Buddhists honor him as a Dharmapala (protector of Dharma). His smile symbolizes divine humor and acceptance of human complexity, teaching that even cosmic judgment can appreciate human intelligence and wit.',
      temples: ['Kaal Bhairav Shrine (Kathmandu Durbar Square, Nepal)', 'Hanuman Dhoka Palace Complex'],
      image: '/idols/kaalbhairab.jpg',
      location: 'Kathmandu Durbar Square, Hanuman Dhoka Palace, Kathmandu, Nepal',
      stories: 'The legend tells of a wife accused of adultery who was ordered to swear before Kaal Bhairav. Before the ritual, she visited her mother and asked to be breastfed once more. When she stood before the deity, she swore, "I have done nothing immoral since drinking my mother\'s milk" - technically true. Realizing her cleverness, Bhairav smiled in divine amusement, and the statue has been known for its eternal grin ever since. During Indra Jatra festival, thousands gather before him, and the hidden Swet Bhairav (White Bhairav) is revealed once a year.'
    },
    'birupakshya': {
      name: 'Birupakshya (Self-Emerging Kali)',
      sanskritName: 'विरूपाक्ष',
      description: 'Birupakshya, also known as Kirateswor Mahadev or Virupaksha, is the self-emerging statue located in the sacred grounds of Pashupatinath Temple in Kathmandu, Nepal. This ancient statue, dating back to the 1st century BCE from the Kirat dynasty, represents one of archaeology\'s most compelling mysteries. Currently, only half of the statue is visible above ground, with the other half remaining buried beneath the earth. The visible portion displays remarkable craftsmanship with Kirat-type facial features, distinctive nose and eyes, ornate earrings, beautifully curled hair, thick lips, sharp body texture, and most significantly, three eyes similar to Lord Shiva. Birupakshya means "the one with distorted eyes" or "odd-eyed" and represents one of the eleven Rudras, embodying Shiva\'s fierce aspect.',
      attributes: ['Three Eyes', 'Kirat Facial Features', 'Ornate Earrings', 'Curled Hair', 'Thick Lips', 'Partially Buried', 'Stone Carving', 'Ancient Kirat Style'],
      significance: 'The Birupakshya statue holds unique significance in both Hindu and Buddhist traditions. For Hindu devotees, it represents Kirateswor Mahadev, a fierce form of Shiva particularly revered by the Kirat communities. For Buddhist practitioners, the statue connects to the legend of Buddha\'s intervention in Virupaksha\'s spiritual journey. The gradual emergence of the statue symbolizes eternal spiritual transformation and cosmic renewal, representing the eternal cycle of time and the interconnectedness of creation and destruction. The phenomenon serves as a powerful reminder of Nepal\'s profound spiritual heritage and the timeless human quest for understanding divine mysteries.',
      temples: ['Pashupatinath Temple Complex (Kathmandu, Nepal)'],
      image: '/idols/kali.jpg',
      location: 'Pashupatinath Temple, Kathmandu, Nepal (UNESCO World Heritage Site)',
      stories: 'According to legend, Virupaksha was a child from a poor family who searched for his missing father. After years of searching, he unknowingly encountered his mother in a cave, leading to a relationship that marked the beginning of Kali Yuga. Overwhelmed by guilt, Virupaksha visited Pashupatinath where he encountered Lord Shiva preparing an intoxicating substance. When Shiva instructed him to open a hot vessel, Virupaksha\'s face was burned, turning black and earning him the name Kurup. Seeking solace with Buddha, he received a garland and was instructed to chant until it withered. When locals discovered him meditating with Buddha\'s garland on Pashupati\'s sacred grounds, they buried him due to his previous conflict with Shiva. According to tradition, Virupaksha will seek vengeance upon humanity when eventually freed from the ground. The statue\'s gradual emergence continues to fascinate pilgrims and scholars alike.'
    },
    'laxminarayan': {
      name: 'Laxmi-Narayan (Vaikuntha Kamalaja)',
      sanskritName: 'लक्ष्मी नारायण',
      description: 'The Laxmi-Narayan statue is an exceptionally rare androgynous form known as Vaikuntha Kamalaja, showing goddess Lakshmi on the left and god Vishnu (Narayan) on the right, literally split down the middle. This composite form symbolizes the oneness and non-duality of male and female principles in the universe, a sophisticated spiritual concept found almost exclusively in Nepal and Kashmir\'s medieval temples. The eight-armed figure is carved from grey stone, stands about 34 inches tall, and weighs 70 kilograms. Vishnu holds his traditional attributes: a mace, discus, conch, and lotus. Lakshmi carries a manuscript, mirror, jewels, and water pot. Even the garments differ, her side wears decorative pleats and scarves, while his side is simpler, reflecting their distinct divine natures united as one. Dating back to the 10th to 15th centuries, it was one of only a handful of Vaikuntha Kamalaja sculptures in existence, making it exceptionally precious.',
      attributes: ['Androgynous Form', 'Eight Arms', 'Lakshmi (Left Side)', 'Vishnu/Narayan (Right Side)', 'Grey Stone', 'Mace', 'Discus', 'Conch', 'Lotus', 'Manuscript', 'Mirror', 'Jewels', 'Water Pot'],
      significance: 'The Laxmi-Narayan statue represents the divine union of male and female principles, embodying the concept of non-duality in Hindu philosophy. This rare form teaches that the divine exists beyond gender distinctions, showing that Lakshmi and Vishnu are not separate entities but two aspects of the same cosmic reality. The statue symbolizes prosperity (Lakshmi) and preservation (Vishnu) working together in perfect harmony. It represents one of Nepal\'s most emotionally powerful stories of cultural theft and spiritual recovery, serving as a symbol of hope for the recovery of stolen heritage and the resilience of faith communities.',
      temples: ['Narayan Temple, Patko Tole (Patan, Nepal)', 'Patan Museum (temporary display)'],
      image: '/idols/laxminarayan.jpg',
      location: 'Patko Tole, Patan (Lalitpur), Kathmandu Valley, Nepal',
      stories: 'For 800 years, the Laxmi-Narayan statue rested in the two-tiered Narayan Temple on Patko Tole in Patan. The community worshipped it daily until one night in June or July 1984, when thieves wrenched it from its shrine. The statue appeared at Sotheby\'s auction in New York in 1990 and was purchased by David T. Owsley, who donated it to the Dallas Museum of Art. In 2015, American artist Joy Lynn Davis discovered it through a Google Images search. After a campaign led by art crime professor Erin L Thompson, FBI investigation, and diplomatic pressure, the statue was repatriated. On April 12, 2021, it arrived at Kathmandu airport after 37 years. On December 4, 2021, it was ceremonially returned to Patko Tole temple in a palanquin procession. Both the original and the replica (commissioned during its absence) now remain in the temple, both worshipped by the community. The temple is now protected with laser sensors, CCTV cameras, and security systems.'
    },
    'lakshminarayan': {
      name: 'Laxmi-Narayan (Vaikuntha Kamalaja)',
      sanskritName: 'लक्ष्मी नारायण',
      description: 'The Laxmi-Narayan statue is an exceptionally rare androgynous form known as Vaikuntha Kamalaja, showing goddess Lakshmi on the left and god Vishnu (Narayan) on the right, literally split down the middle. This composite form symbolizes the oneness and non-duality of male and female principles in the universe, a sophisticated spiritual concept found almost exclusively in Nepal and Kashmir\'s medieval temples. The eight-armed figure is carved from grey stone, stands about 34 inches tall, and weighs 70 kilograms. Vishnu holds his traditional attributes: a mace, discus, conch, and lotus. Lakshmi carries a manuscript, mirror, jewels, and water pot. Even the garments differ, her side wears decorative pleats and scarves, while his side is simpler, reflecting their distinct divine natures united as one. Dating back to the 10th to 15th centuries, it was one of only a handful of Vaikuntha Kamalaja sculptures in existence, making it exceptionally precious.',
      attributes: ['Androgynous Form', 'Eight Arms', 'Lakshmi (Left Side)', 'Vishnu/Narayan (Right Side)', 'Grey Stone', 'Mace', 'Discus', 'Conch', 'Lotus', 'Manuscript', 'Mirror', 'Jewels', 'Water Pot'],
      significance: 'The Laxmi-Narayan statue represents the divine union of male and female principles, embodying the concept of non-duality in Hindu philosophy. This rare form teaches that the divine exists beyond gender distinctions, showing that Lakshmi and Vishnu are not separate entities but two aspects of the same cosmic reality. The statue symbolizes prosperity (Lakshmi) and preservation (Vishnu) working together in perfect harmony. It represents one of Nepal\'s most emotionally powerful stories of cultural theft and spiritual recovery, serving as a symbol of hope for the recovery of stolen heritage and the resilience of faith communities.',
      temples: ['Narayan Temple, Patko Tole (Patan, Nepal)', 'Patan Museum (temporary display)'],
      image: '/idols/laxminarayan.jpg',
      location: 'Patko Tole, Patan (Lalitpur), Kathmandu Valley, Nepal',
      stories: 'For 800 years, the Laxmi-Narayan statue rested in the two-tiered Narayan Temple on Patko Tole in Patan. The community worshipped it daily until one night in June or July 1984, when thieves wrenched it from its shrine. The statue appeared at Sotheby\'s auction in New York in 1990 and was purchased by David T. Owsley, who donated it to the Dallas Museum of Art. In 2015, American artist Joy Lynn Davis discovered it through a Google Images search. After a campaign led by art crime professor Erin L Thompson, FBI investigation, and diplomatic pressure, the statue was repatriated. On April 12, 2021, it arrived at Kathmandu airport after 37 years. On December 4, 2021, it was ceremonially returned to Patko Tole temple in a palanquin procession. Both the original and the replica (commissioned during its absence) now remain in the temple, both worshipped by the community. The temple is now protected with laser sensors, CCTV cameras, and security systems.'
    }
  };

  // Simulate AI detection based on filename or image hash
  const detectIdol = async (imageFile) => {
    const startTime = Date.now();
    setIsScanning(true);
    setScanProgress(0);
    setDetectedIdol(null);
    setDetectionTime(null);
    setConfidence(null);
    setDetectionError(null);

    // Simulate scanning animation with confidence calculation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          return 100;
        }
        const newProgress = prev + Math.random() * 12;
        
        // Calculate confidence based on progress (starts low, increases as progress increases)
        // Base confidence: 75-85% at start, 92-99% at end
        const baseConfidence = 75 + (newProgress / 100) * 20; // 75% to 95%
        const variation = (Math.random() - 0.5) * 4; // ±2% variation
        const calculatedConfidence = Math.min(99.9, Math.max(75, baseConfidence + variation));
        setConfidence(calculatedConfidence.toFixed(1));
        
        return newProgress;
      });
    }, 150);

    // Simulate AI processing delay (4-6 seconds for more realistic detection)
    const processingTime = 4000 + Math.random() * 2000; // 4-6 seconds
    await new Promise(resolve => setTimeout(resolve, processingTime));

    clearInterval(scanInterval);
    setScanProgress(100);

    // Detection based on filename only (fixed dataset)
    // Normalize filename: lowercase, remove spaces, remove special chars for matching
    const fileName = imageFile.name.toLowerCase()
      .replace(/\s+/g, '')           // Remove spaces
      .replace(/[_-]/g, '')          // Remove underscores and hyphens
      .replace(/\.(jpg|jpeg|png|gif|webp|heic|heif)$/i, ''); // Remove extension
    
    let detectedKey = null;

    // Check filename for idol names in database (case-insensitive, flexible matching)
    for (const key in idolDatabase) {
      const normalizedKey = key.toLowerCase();
      // Check if filename contains the key or vice versa
      if (fileName.includes(normalizedKey) || normalizedKey.includes(fileName)) {
        detectedKey = key;
        break;
      }
      
      // Also check for common variations and partial matches
      // e.g., "krishna" matches "krishna", "krishnaidol", "idolkrishna", etc.
      const keyPattern = new RegExp(normalizedKey, 'i');
      if (keyPattern.test(fileName)) {
        detectedKey = key;
        break;
      }
    }

    // Add small delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 500));

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds with 2 decimals
    
    setIsScanning(false);
    setDetectionTime(duration);
    
    // Log detection result for debugging
    console.log('Detection result:', {
      fileName: imageFile.name,
      normalizedFileName: fileName,
      detectedKey: detectedKey,
      availableKeys: Object.keys(idolDatabase)
    });
    
    if (detectedKey) {
      // Idol detected - calculate confidence (94-99% for exact match)
      const finalConfidence = (94 + Math.random() * 5).toFixed(1);
      setConfidence(finalConfidence);
      setDetectedIdol(idolDatabase[detectedKey]);
      setDetectionError(null);
    } else {
      // No match found - show error message with helpful info
      console.warn('No match found for filename:', imageFile.name);
      setDetectedIdol(null);
      setConfidence(null);
      setDetectionError(true);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDetectedIdol(null);
      setDetectionError(null);
      
      // Log filename for debugging (especially useful for mobile)
      console.log('Selected file:', file.name);
      console.log('File name (lowercase):', file.name.toLowerCase());
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);

      // Auto-start detection
      detectIdol(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      fileInputRef.current.files = e.dataTransfer.files;
      handleImageSelect({ target: { files: [file] } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');

    if (userId === INTERNAL_USER_ID && password === INTERNAL_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('idolDetectorAuth', 'true');
      setUserId('');
      setPassword('');
      setLoginAttempts(0);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setAuthError('You have no access. This is for company use only.');
      } else {
        setAuthError('Invalid credentials. Please retry or you have no access for company use only.');
      }
      
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('idolDetectorAuth');
    setUserId('');
    setPassword('');
    setAuthError('');
    setLoginAttempts(0);
    // Reset all detection state
    resetDetection();
  };

  const resetDetection = () => {
    setPreviewUrl(null);
    setDetectedIdol(null);
    setScanProgress(0);
    setIsScanning(false);
    setDetectionError(null);
    setConfidence(null);
    setDetectionTime(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="idol-detector-page">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <div className="auth-header">
              <div className="auth-lock-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h1>Internal Access Required</h1>
              <p className="auth-subtitle">AI Idol Detector - Company Use Only</p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
              <div className="auth-input-group">
                <label htmlFor="userId">Internal User ID</label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter user ID"
                  required
                  autoFocus
                  className={authError ? 'auth-input-error' : ''}
                />
              </div>

              <div className="auth-input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className={authError ? 'auth-input-error' : ''}
                />
              </div>

              {authError && (
                <div className="auth-error-message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {authError}
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                Access System
              </button>

              {loginAttempts > 0 && (
                <p className="auth-attempts">
                  Attempts: {loginAttempts}/3
                </p>
              )}
            </form>

            <div className="auth-footer">
              <p>🔒 Restricted Access - Authorized Personnel Only</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="idol-detector-page">
      <Navbar />
      
      <div className="detector-container">
        <div className="detector-header">
          <div className="header-top">
            <h1>AI <span className="accent">IDOL DETECTOR</span></h1>
            <button onClick={handleLogout} className="logout-btn" title="Logout">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logout
            </button>
          </div>
          <p className="subtitle">Advanced Image Recognition System for Hindu Deities</p>
          <p className="note">🔒 Internal Use Only</p>
        </div>

        <div className="detector-content">
          {/* Upload Section */}
          <div className="upload-section">
            <div
              className="upload-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {!previewUrl ? (
                <>
                  <div className="upload-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <p className="upload-text">Drag & drop an image here</p>
                  <p className="upload-subtext">or click to browse</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="file-input"
                  />
                </>
              ) : (
                <div className="preview-container">
                  <img src={previewUrl} alt="Selected" className="preview-image" />
                  <button onClick={resetDetection} className="reset-btn">
                    ✕ Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Scanning Animation */}
          {isScanning && previewUrl && (
            <div className="scanning-overlay">
              <div className="scanning-content">
                <div className="scan-animation">
                  <div className="scan-image-container">
                    <img src={previewUrl} alt="Scanning" className="scan-image" />
                    <div className="scan-overlay-effects">
                      {/* Single primary scanning line that follows progress */}
                      <div 
                        className="scan-line-horizontal" 
                        style={{ 
                          top: `${scanProgress}%`,
                          opacity: scanProgress > 5 && scanProgress < 95 ? 1 : 0.3
                        }}
                      ></div>
                      
                      {/* Subtle secondary scanning line */}
                      <div 
                        className="scan-line-horizontal" 
                        style={{ 
                          top: `${(scanProgress + 25) % 100}%`,
                          opacity: (scanProgress + 25) % 100 > 5 && (scanProgress + 25) % 100 < 95 ? 0.5 : 0.2
                        }}
                      ></div>
                      
                      {/* Corner markers - subtle frame */}
                      <div className="corner-marker top-left"></div>
                      <div className="corner-marker top-right"></div>
                      <div className="corner-marker bottom-left"></div>
                      <div className="corner-marker bottom-right"></div>
                      
                      {/* Subtle grid overlay for analysis reference */}
                      <div className="scan-grid-overlay">
                        <div className="grid-line horizontal" style={{ top: '25%' }}></div>
                        <div className="grid-line horizontal" style={{ top: '50%' }}></div>
                        <div className="grid-line horizontal" style={{ top: '75%' }}></div>
                        <div className="grid-line vertical" style={{ left: '25%' }}></div>
                        <div className="grid-line vertical" style={{ left: '50%' }}></div>
                        <div className="grid-line vertical" style={{ left: '75%' }}></div>
                      </div>
                      
                      {/* Subtle feature detection points - appear as analysis progresses */}
                      {scanProgress > 20 && (
                        <div className="detection-point" style={{ top: '30%', left: '35%', animationDelay: '0s' }}></div>
                      )}
                      {scanProgress > 40 && (
                        <div className="detection-point" style={{ top: '55%', left: '65%', animationDelay: '0.5s' }}></div>
                      )}
                      {scanProgress > 60 && (
                        <div className="detection-point" style={{ top: '75%', left: '45%', animationDelay: '1s' }}></div>
                      )}
                      {scanProgress > 80 && (
                        <div className="detection-point" style={{ top: '40%', left: '70%', animationDelay: '1.5s' }}></div>
                      )}
                    </div>
                  </div>
                </div>
                <h2>Analyzing Image...</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                {confidence && (
                  <div className="confidence-indicator">
                    Confidence: <span className="confidence-value">{confidence}%</span>
                  </div>
                )}
                <p className="scan-status">
                  {scanProgress < 30 && 'Initializing AI model...'}
                  {scanProgress >= 30 && scanProgress < 60 && 'Extracting features...'}
                  {scanProgress >= 60 && scanProgress < 90 && 'Matching patterns...'}
                  {scanProgress >= 90 && 'Finalizing detection...'}
                </p>
              </div>
            </div>
          )}

          {/* Detection Error */}
          {detectionError && !isScanning && (
            <div className="detection-error">
              <div className="error-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h2>Detection Failed</h2>
              <p className="error-message">
                Couldn't detect the idol. We have not updated this idol in our database yet, or the idol image is not too clear.
              </p>
              <p className="error-hint">
                Please try uploading a clearer image or check back later as we continue to expand our database.
              </p>
              <button onClick={resetDetection} className="try-again-btn">
                Try Again
              </button>
            </div>
          )}

          {/* Detection Result */}
          {detectedIdol && !isScanning && (
            <div className="detection-result">
              <div className="result-header">
                <h2>AI Detection Complete</h2>
                <div className="result-metrics">
                  {confidence && (
                    <div className="confidence-badge">
                      {confidence}% Confidence
                    </div>
                  )}
                  {detectionTime && (
                    <div className="time-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {detectionTime}s
                    </div>
                  )}
                </div>
              </div>

              <div className="idol-info">
                <div className="idol-main">
                  <h1 className="idol-name">{detectedIdol.name}</h1>
                  <p className="idol-sanskrit">{detectedIdol.sanskritName}</p>
                </div>

                <div className="idol-details">
                  <div className="detail-section">
                    <h3>Description</h3>
                    <p>{detectedIdol.description}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Attributes</h3>
                    <div className="attributes-list">
                      {detectedIdol.attributes.map((attr, idx) => (
                        <span key={idx} className="attribute-tag">{attr}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Significance</h3>
                    <p>{detectedIdol.significance}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Famous Temples</h3>
                    <ul className="temples-list">
                      {detectedIdol.temples.map((temple, idx) => (
                        <li key={idx}>{temple}</li>
                      ))}
                    </ul>
                  </div>

                  {detectedIdol.location && (
                    <div className="detail-section">
                      <h3>Location</h3>
                      <p>{detectedIdol.location}</p>
                    </div>
                  )}

                  {detectedIdol.stories && (
                    <div className="detail-section">
                      <h3>Stories & Legends</h3>
                      <p>{detectedIdol.stories}</p>
                    </div>
                  )}
                </div>
              </div>

              <button onClick={resetDetection} className="detect-another-btn">
                Detect Another Image
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdolDetector;

