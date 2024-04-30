import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';

const NftData = [
  {
    id: 'card1',
    imgSrc: card1, // Use imported image variable
    imgAlt: 'Abstract Colors',
    title: 'Abstract Colors',
    author: 'Esthera Jackson',
    currentBid: 0.91,
    isFavorite: false,
    time: '30s ago'
  },
  {
    id: 'card2',
    imgSrc: card2, // Use imported image variable
    imgAlt: 'ETH Brain',
    title: 'ETH Brain',
    author: 'Crypto Brain',
    currentBid: 1.2,
    isFavorite: false,
  },
  // ... and so on for the other cards
];

export default NftData;