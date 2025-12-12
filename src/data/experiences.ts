import { Experience } from '../types'
import { getR2Url } from '../config/r2-assets'

// La Kahina 2024 Images
const laKahinaThumb = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-06.jpg')
const laKahinaImg1 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-15-59-57.jpg')
const laKahinaImg2 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-02.jpg')
const laKahinaImg3 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-10.jpg')
const laKahinaImg4 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-15.jpg')
const laKahinaBottom = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-04-09-46-50.jpg')
const laKahinaVideo = getR2Url('7. La Kahina 24/KAHINA_16_9_1.mp4')

// Nobu Grand Opening Images
const nobuThumb = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130283.jpg')
const nobuImg1 = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130285.jpg')
const nobuImg2 = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130331.jpg')
const nobuImg3 = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130418.jpg')
const nobuImg4 = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130507.jpg')
const nobuBottom = getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130661.jpg')

// Hamadcha Whispering Images
const hamadchaThumb = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/DSC06617.jpg')
const hamadchaImg1 = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/088A2679.jpg')
const hamadchaImg2 = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/DSC06654.jpg')
const hamadchaImg3 = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/DSC07145.jpg')
const hamadchaImg4 = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/DSC08027.jpg')
const hamadchaBottom = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/Pictures/Selection/DSC08477.jpg')
const hamadchaVideo = getR2Url('OUR EXPERIENCES/4. Hamadcha wispering, Marrakech/saharartcamp v4.mp4')

// Experience House Images
const experienceHouseThumb = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-134.jpg')
const experienceHouseImg1 = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-138.jpg')
const experienceHouseImg2 = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-143.jpg')
const experienceHouseImg3 = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-151.jpg')
const experienceHouseImg4 = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-163.jpg')
const experienceHouseBottom = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/Pictures/XH 5 Morocco-164.jpg')
const experienceHouseVideo = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/XH x Sahar.mp4')

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'La Kahina 2024',
    slug: 'la-kahina-2024',
    label: 'LA KAHINA 2024',
    description:
      'Experience the spirit of the legendary Berber queen through an immersive cultural celebration. La Kahina brings together music, art, and Moroccan heritage in a unique desert gathering.',
    image: laKahinaThumb,
    video: laKahinaVideo,
    images: [laKahinaImg1, laKahinaImg2, laKahinaImg3, laKahinaImg4],
    bottomImage: laKahinaBottom,
    fullDescription: {
      subtitle: 'A Celebration of Moroccan Heritage',
      introParagraph:
        'La Kahina 2024 is an immersive cultural experience celebrating the legendary Berber warrior queen. Through music, art, and authentic Moroccan traditions, we honor the rich heritage of North Africa.',
      sections: [
        {
          title: 'The Legend of La Kahina',
          content: `La Kahina, also known as Dihya, was a 7th-century Berber warrior queen who led indigenous resistance to the Muslim conquest of the Maghreb. Her legacy lives on as a symbol of strength, independence, and cultural pride. This experience pays homage to her spirit through contemporary artistic expression rooted in traditional Moroccan culture.`,
        },
        {
          title: 'Cultural Immersion',
          content: `Immerse yourself in authentic Moroccan traditions through live performances, traditional crafts, and culinary experiences. From the rhythms of Gnawa music to the intricate patterns of Berber textiles, every element celebrates the diverse cultural heritage of Morocco.`,
        },
        {
          title: 'Music & Performance',
          content: `Experience world-class performances featuring traditional and contemporary Moroccan artists. The program includes Gnawa musicians, Amazigh singers, and modern electronic producers who blend ancestral sounds with innovative beats, creating a bridge between past and future.`,
        },
        {
          title: 'Location & Community',
          content: `Set in the stunning landscapes that inspired La Kahina's legacy, this gathering brings together a community of cultural enthusiasts, artists, and seekers. Together, we create a space where tradition meets innovation, and ancient wisdom guides modern expression.`,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Nobu Grand Opening, Marrakech',
    slug: 'nobu-marrakech',
    label: 'NOBU GRAND OPENING, MARRAKECH',
    description:
      'An unforgettable evening celebrating the grand opening of Nobu Marrakech. A fusion of Japanese elegance and Moroccan hospitality set in a stunning desert landscape.',
    image: nobuThumb,
    images: [nobuImg1, nobuImg2, nobuImg3, nobuImg4],
    bottomImage: nobuBottom,
    fullDescription: {
      subtitle: 'Where Japanese Elegance Meets Moroccan Magic',
      introParagraph:
        'The grand opening of Nobu Marrakech was a spectacular fusion of cultures, bringing together the refined elegance of Japanese cuisine with the warm hospitality and vibrant energy of Morocco.',
      sections: [
        {
          title: 'The Event',
          content: `Type of Project: Grand Opening Celebration - Designing an exclusive evening experience for VIP guests and cultural ambassadors celebrating the launch of Nobu Marrakech.

Location: Nobu Hotel Marrakech
Date: An evening of cultural fusion and culinary excellence`,
        },
        {
          title: 'Bedouin Experience',
          content: `We created an authentic Bedouin atmosphere that merged seamlessly with Nobu's sophisticated aesthetic. Traditional tents, intricate lanterns, and Moroccan carpets provided an enchanting setting for guests to experience the best of both worlds.`,
        },
        {
          title: 'Cultural Fusion',
          content: `The evening celebrated the beautiful intersection of Japanese precision and Moroccan warmth. From the architecture to the entertainment, every detail was carefully curated to honor both cultures while creating something entirely new and magical.`,
        },
        {
          title: 'Culinary Journey',
          content: `Guests were treated to Nobu's signature Japanese-Peruvian cuisine with special Moroccan-inspired touches. The culinary experience reflected the restaurant's philosophy of respecting tradition while embracing innovation and local flavors.`,
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Hamadcha Whispering, Marrakech',
    slug: 'hamadcha-whispering',
    label: 'HAMADCHA WHISPERING, MARRAKECH',
    description:
      'Dive into the mystical world of the Hamadcha brotherhood through an immersive spiritual and musical journey. Experience the power of trance, ritual, and Moroccan Sufi traditions.',
    image: hamadchaThumb,
    video: hamadchaVideo,
    images: [hamadchaImg1, hamadchaImg2, hamadchaImg3, hamadchaImg4],
    bottomImage: hamadchaBottom,
    fullDescription: {
      subtitle: 'A Journey into Moroccan Sufi Mysticism',
      introParagraph:
        'Hamadcha Whispering is an immersive experience exploring the sacred rituals and music of the Hamadcha brotherhood, one of Morocco\'s most fascinating Sufi orders known for their trance-inducing ceremonies and healing practices.',
      sections: [
        {
          title: 'The Hamadcha Tradition',
          content: `The Hamadcha are a Moroccan Sufi brotherhood known for their distinctive spiritual practices and hypnotic music. Their rituals involve intense rhythmic music, chanting, and trance states believed to have healing properties. This experience offers a respectful and authentic window into this ancient tradition.`,
        },
        {
          title: 'The Experience',
          content: `Type of Project: Immersive cultural and spiritual experience showcasing authentic Hamadcha ceremonies and contemporary interpretations.

Location: Sacred spaces in Marrakech
Setting: Intimate gatherings designed to transport participants into the mystical world of Moroccan Sufism`,
        },
        {
          title: 'Musical Journey',
          content: `Experience the powerful rhythms of traditional Hamadcha music, characterized by the ghaita (double-reed oboe), bendir drums, and hypnotic vocal chanting. The music builds in intensity, creating an atmosphere conducive to spiritual transformation and collective energy.`,
        },
        {
          title: 'Cultural Bridge',
          content: `This experience serves as a bridge between ancient spiritual practices and contemporary seekers. By honoring the authentic traditions while making them accessible to modern audiences, we create opportunities for genuine cultural exchange and spiritual exploration.`,
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Experience House, Marrakech',
    slug: 'experience-house-marrakech',
    label: 'EXPERIENCE HOUSE, MARRAKECH',
    description:
      'A unique gathering space where creativity, community, and Moroccan culture converge. Experience House Marrakech is a hub for artists, innovators, and cultural explorers.',
    image: experienceHouseThumb,
    video: experienceHouseVideo,
    images: [experienceHouseImg1, experienceHouseImg2, experienceHouseImg3, experienceHouseImg4],
    bottomImage: experienceHouseBottom,
    fullDescription: {
      subtitle: 'Where Community and Creativity Flourish',
      introParagraph:
        'Experience House Marrakech is a collaborative space dedicated to fostering creativity, cultural exchange, and meaningful connections. It serves as a gathering point for artists, entrepreneurs, and cultural enthusiasts exploring Morocco.',
      sections: [
        {
          title: 'The Vision',
          content: `Type of Project: Creating a permanent cultural hub and community space in Marrakech for artists, creators, and cultural explorers.

Location: Marrakech, Morocco
Mission: Building bridges between local Moroccan culture and global creative communities`,
        },
        {
          title: 'Community Programs',
          content: `Experience House hosts workshops, artist residencies, cultural exchanges, and creative collaborations. From traditional Moroccan crafts to contemporary digital art, the space embraces all forms of creative expression while maintaining deep respect for local traditions and knowledge.`,
        },
        {
          title: 'Cultural Exchange',
          content: `The house serves as a meeting point where international visitors can engage authentically with Moroccan culture, not as tourists but as participants. Local artists and artisans share their knowledge while learning from global creative practices, creating a true exchange of ideas and techniques.`,
        },
        {
          title: 'Ongoing Programs',
          content: `Regular events include music performances, art exhibitions, culinary experiences, and collaborative projects. The space also hosts intimate dinners, creative workshops, and cultural discussions, all designed to deepen understanding and appreciation of Moroccan heritage while fostering innovation.`,
        },
      ],
    },
  },
]
