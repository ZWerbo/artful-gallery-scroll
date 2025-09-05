import ImageGallery from '@/components/ImageGallery';
import spread1 from '@/assets/Spread-1.jpg';
import gallery3 from '@/assets/Strangers-1.jpg';

const Photography = () => {
  const images = [
    {
      src: spread1,
      alt: 'Diptych1',
      title: 'CueBalls'
    },
    {
      src: gallery3,
      alt: 'Urban landscape photography',
      title: 'City Dreams, 2024'
    }
  ];

  return <ImageGallery images={images} title="Photography" />;
};

export default Photography;