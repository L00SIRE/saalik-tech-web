import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/StoryDetail.css';

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const getStoryDetails = (storyId) => {
    const stories = {
      1: {
        id: 1,
        title: "Khyāk: Guardians of Darkness",
        subtitle: "The Mysterious Protectors of Newar Homes",
        location: "Kathmandu Valley",
        image: "/sample.png",
        fullDescription: `
        In the labyrinthine alleys of Kathmandu Valley's ancient Newar settlements, where wooden houses lean toward each other and shadows stretch long after sunset, tales of supernatural beings have been whispered from generation to generation. Among these spectral entities, the Khyāk (also spelled Khyā or Khyah) stands as one of the most intriguing and multifaceted creatures in Newari folklore, a being that embodies the complex relationship between fear, protection, and prosperity in traditional Newar culture.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Nature of the Khyāk</h2>
        The Khyāk is a mythical humanoid creature deeply embedded in the folklore of the Newar people, the indigenous inhabitants of the Kathmandu Valley. Physically, it is typically described as a short, plump, hairy, and ape-like figure with a grotesque appearance, often depicted with a protruding tongue and covered in dark or white fur. Despite its frightening visage, the Khyāk occupies a unique position in Newari mythology, existing as neither purely malevolent nor entirely benevolent.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Duality and Dwelling Places</h2>
        One of the most fascinating aspects of Khyāk lore is their dual nature. A white Khyāk is believed to bring good fortune, prosperity, and well-being to a household, filling homes with goodness and positive energy. Conversely, a black Khyāk can create problems, bring illness, and invite chaos and misfortune into people's lives.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Varieties and Behavioral Patterns</h2>
        Newari folklore distinguishes several types of Khyāks, each with unique characteristics. The Dhāpalān Khyāh is distinguished by its extremely hairy appearance, while the Lanpan Khyāh is known as a mischievous figure that blocks the way of people walking along dark streets.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Divine Associations and Cultural Significance</h2>
        Perhaps most remarkably, Khyāks hold a sacred position in Newar religious iconography. They are closely associated with Lakshmi, the Hindu goddess of wealth and prosperity.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Living Tradition: Dance and Festival</h2>
        The Khyāk's presence in Newari culture extends beyond storytelling into vibrant performance traditions. During the Yenya (Indrajatra) festival in Kathmandu, performers don elaborate Khyāk costumes and present the Khyāh Pyākhan - a dance drama featuring these supernatural creatures.

        <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Cautionary Symbol and Modern Relevance</h2>
        Beyond entertainment and religious significance, the Khyāk serves a practical social function as a cautionary figure. Parents invoke these creatures to keep children away from dark, potentially dangerous places, abandoned buildings, isolated areas, and hazardous locations.
      `,
        date: "2025",
        additionalImages: []
      },
      2: {
        id: 2,
        title: "The Self Emerging Statue of Kali",
        subtitle: "The rise of the Birupakshya at Pashupatinath",
        location: "Pashupatinath",
        image: "/kalibanner.png",
        fullDescription: `
    
    <h2 style="color: #00bf63; font-size: 1.8rem; margin: 1.5rem 0;">A Sacred Mystery Spanning Millennia</h2>
    The sacred grounds of Pashupatinath Temple in Kathmandu, Nepal, harbor one of the most enigmatic and spiritually significant artifacts in Hindu and Buddhist traditions: the self-emerging statue of Birupakshya, also known as Kirateswor Mahadev or Virupaksha. This ancient statue, whose origins trace back to the 1st century BCE, represents not merely a religious icon but a profound symbol of cosmic transformation and the eternal cycle of time itself.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Historical Origins and Archaeological Significance</h2>
    Ancient Kirat Dynasty and Temple Construction
    The statue of Birupakshya was erected during the reign of the Kirat dynasty, one of Nepal's most ancient ruling families who governed the Kathmandu Valley from approximately 800 BCE to 300 CE. Archaeological evidence indicates that this sacred image dates back to the 1st century BCE, making it one of the oldest statues discovered in Nepal. The Kirat people, led by legendary kings like Yalambar, established sophisticated urban settlements and were renowned for their advanced knowledge of architecture, metallurgy, and spiritual practices.​
    The statue's construction demonstrates the sophisticated artistic and spiritual understanding of the ancient Kirat civilization. Birupakshya, meaning "the one with distorted eyes" or "odd-eyed," represents one of the eleven Rudras and embodies Shiva's fierce aspect with his distinctive three eyes.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Archaeological Dating and Evidence</h2>
    Archaeological excavations by Italian teams have confirmed ancient structures in the Pashupatinath complex dating back to the 2nd century BCE. The discovery of brick constructions and terracotta figurines supports the theory that the Kirat people possessed advanced construction knowledge. The Licchavi period (1st to 8th century CE) saw further development of the complex, though the Birupakshya statue predates these contributions.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend of the Self-Emerging Deity</h2>
    The legend of Birupakshya intertwines Hindu Puranic traditions and local Kirat mythology. According to prominent narratives, Virupaksha was a child from a poor family who embarked on a quest to find his missing father. After years of searching, he sought shelter in a cave where he unknowingly encountered his mother, leading to a relationship that, according to legend, marked the beginning of the Kali Yuga.​
    Overwhelmed by guilt and seeking redemption, Virupaksha visited the Pashupatinath temple where he encountered Lord Shiva preparing an intoxicating substance. When Shiva instructed him to open a hot vessel, Virupaksha's face was burned, turning black and earning him the name Kurup.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Buddhist Connection and Burial</h2>
    The legend continues with Virupaksha seeking solace with Buddha, who gave him a garland and instructed him to chant until it withered. When local people discovered Virupaksha meditating with Buddha's garland on the sacred grounds of Pashupati, they buried him due to his previous conflict with Shiva. According to tradition, Virupaksha will seek vengeance upon humanity when he is eventually freed from the ground.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Phenomenon of Gradual Emergence</h2>
    The statue of Birupakshya presents one of archaeology's most compelling mysteries. Currently, only half of the statue is visible above ground, with the other half remaining buried beneath the earth. The visible portion displays remarkable craftsmanship, featuring Kirat-type facial features including a distinctive nose and eyes, ornate earrings, and beautifully curled hair. The statue exhibits thick lips, sharp body texture, and most significantly features three eyes similar to Lord Shiva.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Religious and Cultural Significance</h2>
    The Birupakshya statue holds unique significance in both Hindu and Buddhist traditions. For Hindu devotees, it represents Kirateswor Mahadev, a fierce form of Shiva particularly revered by the Kirat communities. For Buddhist practitioners, the statue connects to the legend of Buddha's intervention in Virupaksha's spiritual journey.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Tourism and Cultural Heritage</h2>
    Located within the Pashupatinath Temple complex, the Birupakshya statue attracts thousands of pilgrims and tourists annually. As part of a UNESCO World Heritage Site designated in 1979, the statue contributes significantly to Nepal's cultural tourism industry. Pilgrimage tourism generates substantial economic opportunities for local communities.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Contemporary Relevance</h2>
    While the gradual emergence is traditionally attributed to supernatural forces, some researchers suggest natural geological processes like ground settlement and seismic activity in the Kathmandu Valley might contribute to the phenomenon. However, precise documentation of any actual emergence remains a subject of ongoing study.​​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Conservation Challenges</h2>
    The preservation of the Birupakshya statue faces challenges including environmental degradation, urban development pressure, and effects of natural disasters like the 2015 earthquake. UNESCO World Heritage Site status provides international recognition and support, though adequate funding remains an ongoing concern. Conservation efforts must balance scientific preservation methods with religious traditions that view the statue as a living deity.​

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Conclusion</h2>
    The self-emerging statue of Birupakshya represents far more than an ancient religious artifact. It embodies Nepal's profound spiritual and cultural heritage, serving as a bridge between ancient Kirat wisdom and contemporary religious practice. Whether understood literally or metaphorically, the statue's gradual emergence symbolizes eternal spiritual transformation and cosmic renewal central to both Hindu and Buddhist traditions.​
    As pilgrims and scholars continue to study and venerate this remarkable statue, Birupakshya remains a powerful reminder of the interconnectedness of time, spirituality, and human destiny. The mystery ultimately transcends simple archaeological or religious categorization, existing as a living symbol of Nepal's spiritual depth and the timeless human quest for understanding divine mysteries.​
  `,
        date: "2024",
        additionalImages: []
      },
      3: {
        id: 3,
        title: "The Tale of Kaal Bhairab",
        subtitle: "Kathmandu's Smiling Guardian of Justice",
        location: "Kathmandu Durbar Square",
        image: "/bhairabbanner.png",
        fullDescription: `
  
    <h2 style="color: #00bf63; font-size: 1.8rem; margin: 1.5rem 0;">The Eternal Guardian of Justice and the Legend of the Smiling God</h2>

    In the courtyards of Hanuman Dhoka Palace, Kathmandu, stands the mighty Kaal Bhairav, a fierce form of Lord Shiva carved from a single block of black stone. Towering nearly 12 feet high, this ancient deity has watched over the city for more than a millennium, serving as both protector and judge. What makes him unique among Bhairavs across the Hindu world is his smile, a mysterious grin that legend attributes to a clever woman’s wit.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Ancient Origins and Archaeological Significance</h2>
    The Licchavi Heritage
    Though traditionally linked to King Pratap Malla of the 17th century, archaeologists believe the statue dates back to the Licchavi period around the 5th–6th century CE. This was Nepal’s golden age of stone sculpture when artisans mastered carving massive icons from single stones. Kaal Bhairav’s intricate form, with six arms, skull crown, serpents, and a demon beneath his feet, reflects the advanced spiritual and artistic vision of that era.

    Discovery and Enshrinement by Pratap Malla
    After lying buried for centuries, the statue was rediscovered during Pratap Malla’s reign. Accounts vary, with some saying it was found near the palace and others near Nagarjun or Budhanilkantha. Recognizing its divine power, the king enshrined it at Hanuman Dhoka through elaborate Tantric rituals, making it the spiritual centerpiece of Kathmandu Durbar Square.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Iconography and Symbolism</h2>
    “Kaal” means time or death, and “Bhairav” means fearsome, together symbolizing the force that devours time and destroys illusion.

    Six Arms: Represent mastery over creation and destruction.

    Skull Garland: The transience of life.

    Trampling a Corpse: Victory over death and illusion.

    Serpent Ornaments: Control of primal energy.

    Blood-Red Eyes: The power to see all truth.

    Amid this terrifying imagery, the Kathmandu Bhairav smiles, making him the only known smiling Bhairav in the Hindu-Buddhist world.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Sacred Role as Guardian of Justice</h2>
    From the Malla era to the 20th century, Kaal Bhairav served as Nepal’s divine court of justice, known as Dalat Bhairav. Oaths, confessions, and official appointments took place before the deity, where lying was believed to cause instant death.
    Even royal ministers and generals swore before him, blending divine judgment with royal law. Historical photos from the early 1900s show officials taking oaths before the statue, symbolizing faith in the god’s power to uphold truth.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Legend of the Smiling Bhairav</h2>
    A Wife’s Cunning and a God’s Amusement

    Long ago, a wife accused of adultery was ordered to swear before Kaal Bhairav. Before the ritual, she visited her mother and, recalling her childhood sorrow at being childless, asked to be breastfed once more. Out of compassion, her mother agreed.

    When she stood before Kaal Bhairav, she swore, “I have done nothing immoral since drinking my mother’s milk.” The statement was technically true, and the goddess of justice spared her.

    Realizing her cleverness, Bhairav, who could see through every lie, smiled in divine amusement. Since then, the statue has been known for its eternal grin, symbolizing that even gods appreciate human intelligence.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Cultural and Spiritual Significance</h2>
    Kaal Bhairav bridges Hindu and Buddhist traditions. Hindus revere him as the guardian of Kathmandu, while Newar Buddhists honor him as a Dharmapala, a protector of the Dharma. Many Buddhists avoid walking in front of the statue, believing sacred manuscripts lie buried behind it.

    Beyond religion, Bhairav embodies the cosmic balance between creation and destruction, reminding devotees that all things are devoured by time yet renewed through it.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Festivals and Contemporary Worship</h2>
    Indra Jatra

    During Indra Jatra, the city’s grand festival, thousands gather before Kaal Bhairav with flowers, oil lamps, and vermilion. The hidden Swet Bhairav, or White Bhairav, is revealed once a year, and devotees drink rice liquor from his mouth as a form of blessing.

    Regular Worship

    Devotees visit every Tuesday and Saturday, offering red flowers, oil, and alcohol. These rituals reflect Bhairav’s Tantric roots and his acceptance of life beyond conventional purity.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Preservation and Heritage Status</h2>
    The shrine, part of UNESCO’s Kathmandu Durbar Square, was restored in 2003 by the Kathmandu Valley Preservation Trust, which strengthened the structure and documented its heritage. Remarkably, the statue survived the 2015 earthquake almost untouched, reinforcing its reputation as an indestructible protector of the valley.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Philosophical and Psychological Dimensions</h2>
    The smiling Kaal Bhairav challenges ideas of divine justice. His story shows that truth can be relative and intelligence can outwit even cosmic judgment. The smile symbolizes divine humor and acceptance of human complexity.

    Psychologically, Bhairav’s role as a judicial deity reveals how faith once served as moral enforcement. The legend also reflects timeless human emotions—love, suspicion, maternal compassion, and creativity under pressure.

    <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Conclusion</h2>
    Kaal Bhairav of Kathmandu Durbar Square is far more than a sculpture. He is the city’s eternal guardian, judge, and philosopher. From Licchavi artisans to modern worshippers, he continues to embody the union of art, spirituality, and justice. His enduring smile reminds all who stand before him that even divine power respects human wit, and that true wisdom lies not only in fear, but in understanding, compassion, and laughter.
  `,
        date: "2025",
        additionalImages: []
      },
      4: {
        id: 4,
        title: "The God who vanished for 37 years",
        subtitle: "The lost and found story of the Laxmi-Narayan statue",
        location: "Patan",
        image: "/laxminarayan.png", 
        fullDescription: `
        
The Laxmi-Narayan statue represents one of Nepal's most emotionally powerful stories of cultural theft and spiritual recovery. This isn't just about an ancient sculpture, it's about a community's faith, an 800-year devotion interrupted, and an extraordinary international effort to bring a god home.

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Goddess and God as One</h2>
The statue depicts Vaikuntha Kamalaja, an exceptionally rare androgynous form showing goddess Lakshmi on the left and god Vishnu (Narayan) on the right, literally split down the middle. This composite form symbolizes the oneness and non-duality of male and female principles in the universe, a sophisticated spiritual concept found almost exclusively in Nepal and Kashmir's medieval temples.​

The eight-armed figure is carved from grey stone, stands about 34 inches tall, and weighs 70 kilograms. Vishnu holds his traditional attributes: a mace, discus, conch, and lotus. Lakshmi carries a manuscript, mirror, jewels, and water pot. Even the garments differ, her side wears decorative pleats and scarves, while his side is simpler, reflecting their distinct divine natures united as one.​

Dating back to the 10th to 15th centuries, it was one of only a handful of Vaikuntha Kamalaja sculptures in existence, making it exceptionally precious.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Theft: One Night in 1984</h2>
For 800 years, the Laxmi-Narayan statue rested in the two-tiered Narayan Temple on Patko Tole, a narrow street in Patan behind Krishna Mandir. The community worshipped it daily. Then, one night in June or July 1984, thieves reportedly working with corrupt security forces wrenched the statue from its shrine.​

The next morning, locals arrived for prayers to find an empty niche with bricks scattered on the ground. The loss devastated the community emotionally and spiritually. One elder, Bhai Raja Shrestha, now 79, recalled the moment: "We had no hope of finding the lost god and with the disappearance of our patron deity, the community also started falling apart." Pilgrims stopped coming. Neighborhood festivals were troubled. The spiritual heart of Patko Tole had been ripped away.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Replacement Era: 1993-2015</h2>
By 1993, a replica was commissioned to replace the original in the shrine. The community worshipped it, but it was never the same. "People still came to do puja every day," recalled Bhai Raja Shrestha, "but it was not the same thing." The replica lacked the spiritual weight of a thousand-year-old deity.​

For two decades, the statue's location remained a mystery.

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Hunt: 1990-2015</h2>
In 1990, the Laxmi-Narayan appeared at Sotheby's auction in New York, just six years after theft. It was purchased by David T. Owsley, a prominent American antiquities collector. He donated it to the Dallas Museum of Art in 1993 with a 30-year loan agreement, where it remained on public display as a 15th-century "artifact".​

The statue was first documented as stolen in two crucial books: "Images of Nepal" by Krishna Deva (1984) and "Stolen Images of Nepal" by art historian Lain Singh Bangdel (1989), but it took decades for the connection to be made.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Artist's Google Search: 2015</h2>
The breakthrough came through Joy Lynn Davis, an American artist and researcher. In 2013, she had created a powerful exhibition at the Patan Museum featuring her paintings of 23-karat gold replacing stolen sculptures in their original temples, a visual repatriation of looted gods. When searching Google Images for her project "Remembering the Lost Sculptures of Kathmandu," Davis spotted a blurry photo of the Laxmi-Narayan at the Dallas Museum.​

She recognized it immediately. For the first time in decades, someone had found the missing god.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Campaign: 2020-2021</h2>
In November 2020, New York-based art crime professor Erin L Thompson raised questions about the statue's provenance through multiple Twitter posts. This sparked international attention. The FBI launched an investigation while activists, heritage advocates, and the Nepal Heritage Recovery Campaign applied diplomatic pressure.​

The Dallas Museum of Art, facing mounting scrutiny and legal questions about the statue's questionable provenance, agreed to repatriate it. After relentless media coverage, FBI investigation, and diplomatic pressure involving the US Ambassador to Nepal Randy Berry and Nepal's government, the statue was finally released.​

On March 5, 2021, the FBI handed the statue to the Nepal Embassy in Washington. On April 12, 2021, it arrived at Kathmandu airport after 37 years in American custody.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Homecoming: December 4, 2021</h2>
The reinstatement ceremony became a massive celebration. On December 4, 2021, the statue was carried in a palanquin (ornate wooden carriage) from the Patan Museum back to Patko Tole temple in a ceremonial procession with marigold garlands.​

A priest performed special rituals, including the "kshyama puja" (a ceremony seeking forgiveness for the deity's trauma and absence). Traditional music played. Community members wept. Nearly 40 years after being stolen, the Laxmi-Narayan had returned home.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Dilemma: Two Gods Now Worship the Same Shrine</h2>
But the community faced a profound spiritual dilemma. During the statue's absence, they had commissioned and worshipped the replica for 28 years. The replica had absorbed the prayers, devotion, and faith of an entire generation. What happens to a god that has been loved and prayed to, even if it's not the original?

Both statues now remain in the temple. The original, though one hand was damaged during its travels and the statue is not technically "perfect," is anchored to the altar with concealed stainless steel bars. The replica stands beside it. Both are worshipped.​

As Dilendra Shrestha, a board member of the Patan Museum, explained: "Even if it's a replica, it is still our god, and we will make arrangements to house both our gods."​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Modern Protection</h2>
The temple is now protected with laser sensors, CCTV cameras, door contact detection gadgets, and concealed stainless steel bars, measures installed by the Kathmandu Valley Preservation Trust and Kathmandu University's Department of Electrical and Electronic Engineering. The local community, once robbed of their deity, is determined it won't happen again.​

<h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">A Symbol of a Larger Crisis</h2>
The Laxmi-Narayan's recovery is celebrated, but thousands of statues remain stolen from Nepal. Since the 1950s, when Nepal opened to the outside world, countless sculptures, paintings, ornamental windows, and doors were systematically looted and sold to feed art markets in the United States, Europe, and beyond.​

Art historian Lain Singh Bangdel's 1989 book Stolen Images of Nepal documented many losses, but only a small fraction have been recovered. Many gods remain in private collections, museum storage rooms, and dealers' galleries around the world.​

The Laxmi-Narayan represents hope—that even after decades, even after being labeled a mere "artifact," a stolen god can find its way home and be restored to its living community. As US Ambassador Randy Berry said at the ceremony: "I hope this is the first of many such celebrations." `,
        date: "2025",
        additionalImages: []
      },
            5: {
        id: 5,
        title: "The self worship festival of Mha Puja",
        subtitle: "The festival of self love and inner reflection",
        location: "Nepal",
        image: "/mhabanner.png",
        fullDescription: `
In the heart of the Kathmandu Valley, as autumn's golden light filters through ancient courtyards and traditional Newar houses, one of Nepal's most profound and intimate festivals unfolds. Mha Puja, literally meaning worship of the self, represents far more than a religious observance. It embodies a philosophical celebration of individual consciousness, spiritual self-awareness, and the divine nature inherent within every human being. This sacred tradition, practiced exclusively by the Newar community for over a millennium, offers a unique perspective on personal spirituality that distinguishes it from all other festivals in the Hindu-Buddhist world.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Historical Origins and Cultural Foundation</h2>
Ancient Newar Civilization and Ritual Development

The origins of Mha Puja trace back to the golden age of Newar civilization during the Licchavi period, when the Kathmandu Valley flourished as a center of trade, art, and spiritual learning. Archaeological evidence suggests that early forms of self-worship existed even during the Kirat period, though the formalized Mha Puja ritual developed during the Malla dynasty when Newar culture reached its artistic and spiritual zenith.

The festival emerges from the unique Newar synthesis of Hindu Tantric traditions, Mahayana Buddhism, and indigenous shamanic practices. Unlike most Hindu festivals that worship external deities, Mha Puja represents the revolutionary concept that the divine resides within the individual self, making each person both devotee and deity.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Philosophical Foundations</h2>

The philosophical underpinnings of Mha Puja draw from both Hindu concepts of Atman, the individual soul, and Buddhist notions of Buddha-nature inherent in all beings. The Newar interpretation suggests that by honoring one's physical body and spiritual essence, practitioners acknowledge their divine potential and responsibility for their own spiritual evolution.

  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">The Sacred Calendar and Astronomical Significance</h2>
  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Kartik Krishna Aunsi: The New Moon of Transformation</h2>

Mha Puja occurs on Kartik Krishna Aunsi, the new moon day of the Kartik month in the Nepali calendar, typically falling in October or November. This timing holds profound astronomical and spiritual significance. The new moon represents the darkest night, symbolically suggesting that even in complete darkness, the light of self-awareness can illuminate the path forward.

The festival forms part of the five-day Tihar celebration, specifically on what most Nepalis observe as Gai Tihar, worship of cows. However, for the Newar community, this day transforms into something far more personal and introspective.

  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">The Sacred Ritual: Elements and Symbolism</h2>

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Preparation and Sacred Space</h2>

The Mha Puja ceremony begins with meticulous preparation of the ritual space, typically in the main courtyard or prayer room of Newar homes. Families create intricate mandalas using colored powders, flower petals, and sacred geometric designs. The central element is a human-shaped figure drawn on the ground using rice flour, representing the individual practitioner.

 <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Essential Ritual Elements</h2>

The ceremony incorporates specific items, each carrying deep symbolic meaning. These include beaten rice, black soybeans, dried fish, and eggs, representing the sustenance of life; baji, symbolizing purity and spiritual nourishment; garlands, representing the beauty and fragrance of a well-lived life; oil lamps for self-realization; incense for purification; and a mirror to reflect one's true divine nature.

  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">The Ceremony: Sacred Acts of Self-Honor</h2>

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Ritual Purification</h2>

The ceremony begins at sunset with ritual purification. Practitioners bathe and dress in clean, preferably new clothes. The eldest woman of the household typically leads the ceremony, though each family member performs their individual worship.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">The Sacred Drawing</h2>

The most distinctive element involves drawing a human outline on the ground using rice flour or colored powders. This figure, called Mha, represents the individual practitioner. The drawing includes detailed body parts, emphasizing the sacredness of the physical form as a temple of the divine.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Offerings to the Self</h2>
Practitioners sit beside their drawn figure and make offerings as they would to any deity. They place food items, flowers, and light lamps around their representation. This act of self-offering represents acknowledging one's own divine nature while accepting responsibility for spiritual growth.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Personal Prayers and Meditation</h2>

Each individual offers personal prayers, not to external deities but to their own higher self. They may chant mantras, meditate on personal goals, or reflect on the year's experiences. This introspective element distinguishes Mha Puja from communal religious celebrations.


  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">Contemporary Relevance and Adaptation</h2>

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Modern Interpretations</h2>

Contemporary Newar communities have adapted Mha Puja to modern lifestyles while preserving essential elements. Urban practitioners may create smaller ritual spaces in apartments, use electric lights instead of oil lamps, and incorporate modern food offerings while maintaining traditional symbolic items.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Educational and Cultural Preservation</h2>

Schools and cultural organizations in Nepal increasingly recognize Mha Puja's educational value in teaching self-respect, personal responsibility, and cultural identity. Youth programs help younger generations understand the festival's deeper meanings beyond ritual observance.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Global Newar Communities</h2>
Newar diaspora communities worldwide maintain Mha Puja traditions, adapting to local conditions while preserving cultural authenticity. These celebrations help maintain cultural identity and pass traditions to subsequent generations born outside Nepal.

  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">Challenges and Preservation Efforts</h2>

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Urbanization and Cultural Dilution</h2>

Rapid urbanization in the Kathmandu Valley threatens traditional Mha Puja practices. Smaller living spaces, busy lifestyles, and reduced joint family structures challenge elaborate celebrations. However, community organizations work to preserve essential elements while adapting to modern realities.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Documentation and Research</h2>

Academic institutions and cultural preservation organizations increasingly document Mha Puja traditions, recognizing their unique contribution to world spiritual practices. Ethnographic studies help preserve traditional knowledge while exploring contemporary relevance.

  <h2 style="color: #00bf63; font-size: 3rem; margin: 2rem 0 1rem 0;">The Universal Message</h2>
  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Self-Respect and Personal Responsibility</h2>

Mha Puja's central message of self-respect and personal spiritual responsibility transcends cultural boundaries. In an era of external validation and social media comparison, the festival's emphasis on intrinsic worth and self-acceptance offers valuable wisdom for global audiences.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Environmental Consciousness</h2>

The use of natural materials, temporary decorations, and minimal waste aligns with contemporary environmental consciousness. The festival demonstrates how traditional practices can embody sustainable values.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Mental Health and Wellness</h2>
The structured practice of self-appreciation, reflection, and goal-setting provides a traditional framework for what modern psychology recognizes as essential mental health practices.

  <h2 style="color: #00bf63; font-size: 2rem; margin: 2rem 0 1rem 0;">Conclusion</h2>

Mha Puja stands as one of humanity's most unique spiritual celebrations, offering a profound alternative to conventional religious worship through its emphasis on self-divinity and personal spiritual responsibility. This ancient Newar tradition provides a powerful reminder that the sacred is not distant or external but resides within each individual, waiting to be recognized, honored, and cultivated.

As Nepal continues to modernize and globalize, Mha Puja remains a vital cultural treasure that offers timeless wisdom about human dignity, spiritual autonomy, and the divine potential inherent in every person. The festival's message that each individual deserves respect, love, and spiritual attention provides a foundation for both personal growth and social harmony that remains as relevant today as it was centuries ago.

Through Mha Puja, the Newar community has gifted the world a unique spiritual practice that celebrates the profound truth that we are all, in our deepest essence, worthy of reverence and capable of divine realization. This sacred night of self-worship illuminates not only individual homes with flickering oil lamps but also the eternal human capacity for self-transformation and spiritual awakening. `,
        date: "2025",
        additionalImages: []
      },
    };

    return stories[storyId] || stories[1];
  };

  const story = getStoryDetails(Number(id));

  const storiesFromStoriesPage = [
    { id: 1, title: "Khyāk: Guardians of Darkness", location: "Kathmandu Valley", image: "/khyak.png" },
    { id: 2, title: "The Self Emerging Statue of Kali", location: "Pashupatinath Temple", image: "/kalii.png" },
    { id: 3, title: "Tale of Durbar Square's Kaal Bhairab", location: "Kathmandu Durbar Square", image: "/bhairab.png" },
    { id: 4, title: "The God who vanished for 37 years", location: "Lost Stories", image: "/laxmi.png" }
  ];

  const recommendedStories = storiesFromStoriesPage
    .filter(storyItem => storyItem.id !== story.id)
    .map(storyItem => ({
      id: storyItem.id,
      image: storyItem.image
    }))
    .slice(0, 3);

  return (
    <div className="story-detail-page">
      <Navbar />
      
      <div className="story-detail-container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginBottom: '2rem',
          marginTop: '2rem',
          position: 'sticky',
          top: '20px',
          zIndex: 10
        }}>
          <button 
            className="back-button" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/stories');
            }}
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
              marginTop: '20px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(5px)';
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
              style={{ marginLeft: '4px' }}
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
                      color: '#00bf63',
                      fontSize: '1.4rem',
                      marginBottom: '0.5rem',
                      fontWeight: '500'
                    }}>
                      {story.title}
                    </h4>
                    <div style={{
                      color: '#00bf63',
                      fontSize: '0.9rem'
                    }}>
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