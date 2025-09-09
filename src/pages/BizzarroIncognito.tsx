import ImageGallery from '@/components/ImageGallery';
import spread1 from '@/assets/Spread-1.jpg';
import spread2 from '@/assets/Spread-2.jpg';
import spread3 from '@/assets/Spread-3.jpg';
import spread4 from '@/assets/Spread-4.jpg';
import spread5 from '@/assets/Spread-5.jpg';
import spread6 from '@/assets/Spread-6.jpg';
import spread7 from '@/assets/Spread-7.jpg';
import spread8 from '@/assets/Spread-8.jpg';
import spread9 from '@/assets/Spread-9.jpg';
import spread10 from '@/assets/Spread-10.jpg';
import spread11 from '@/assets/Spread-11.jpg';
import spread12 from '@/assets/Spread-12.jpg';
import spread13 from '@/assets/Spread-13.jpg';

const BizzarroIncognito = () => {
  const images = [
    {
      src: spread1,
      alt: 'CueBalls',
      title: 'Cueballs'
    },
    {
    src: spread2,
    alt: 'Astro Dance',
    title: 'Astro Dance'
    },
    {
    src: spread3,
    alt: 'Sunshine',
    title: 'Sunshine'
    },
  {
    src: spread4,
    alt: 'Fish Frenzy',
    title: 'Fish Frenzy'
  },
  {
    src: spread5,
    alt: 'Raspberry Milk',
    title: 'Raspberry Milk'
  },
  {
    src: spread6,
    alt: 'Somewhere Red',
    title: 'Somewhere Red'
  },
      {
      src: spread7,
      alt: 'Two Strangers',
      title: 'Two Strangers'
    },
    {
      src: spread8,
      alt: 'A cross in the air',
      title: 'A cross in the air'
    },
    {
      src: spread9,
      alt: 'Evil Seal',
      title: 'Evil Seal'
    },
    {
      src: spread10,
      alt: 'As I reach I go',
      title: 'As I reach I go'
    },
    {
      src: spread11,
      alt: 'Theres a Space in Nowhere',
      title: 'Theres a Space in Nowhere'
    },
    {
      src: spread12,
      alt: 'Its a trap',
      title: 'Its a trap'
    },
    {
      src: spread13,
      alt: 'Flowers',
      title: 'Flowers'
    }
  ];

  return <ImageGallery images={images} title="Bizzarro Incognito" />;
};

export default BizzarroIncognito;