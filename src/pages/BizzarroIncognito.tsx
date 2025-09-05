import ImageGallery from '@/components/ImageGallery';
import spread1 from '@/assets/Spread-1.jpg';
import spread2 from '@/assets/Spread-2.jpg';
import spread3 from '@/assets/Spread-3.jpg';
import spread4 from '@/assets/Spread-4.jpg';
import spread5 from '@/assets/Spread-5.jpg';
import spread6 from '@/assets/Spread-6.jpg';

const BizzarroIncognito = () => {
  const images = [
    {
      src: spread1,
      alt: 'CueBalls',
      title: 'Cueballs'
    },
    {
    src: spread2,
    alt: 'spread-2',
    title: 'Spread 2'
    },
    {
    src: spread3,
    alt: 'spread-3',
    title: 'Spread 3'
    },
  {
    src: spread4,
    alt: 'spread-4',
    title: 'Spread 4'
  },
  {
    src: spread5,
    alt: 'spread-5',
    title: 'Spread 5'
  },
  {
    src: spread6,
    alt: 'spread-6',
    title: 'Spread 6'
  }
  ];

  return <ImageGallery images={images} title="Bizzarro Incognito" />;
};

export default BizzarroIncognito;