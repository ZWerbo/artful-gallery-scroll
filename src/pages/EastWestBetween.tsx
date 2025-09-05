import ImageGallery from '@/components/ImageGallery';
import spread1 from '@/assets/Spread-1.jpg';

const EastWestBetween = () => {
  const images = [
    {
      src: spread1,
      alt: 'Contemplative portrait study',
      title: 'Between Worlds, 2024'
    }
  ];

  return <ImageGallery images={images} title="East, West and In Between" />;
};

export default EastWestBetween;