import ImageGallery from '@/components/ImageGallery';
import gallery2 from '@/assets/gallery-2.jpg';

const EastWestBetween = () => {
  const images = [
    {
      src: gallery2,
      alt: 'Contemplative portrait study',
      title: 'Between Worlds, 2024'
    }
  ];

  return <ImageGallery images={images} title="East, West and In Between" />;
};

export default EastWestBetween;