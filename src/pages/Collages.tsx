import ImageGallery from '@/components/ImageGallery';
import collage1 from '@/assets/collage-1.jpg';

const Collages = () => {
  const images = [
    {
      src: collage1,
      alt: 'Abstract collage artwork',
      title: 'Memory Fragments #1, 2024'
    }
  ];

  return <ImageGallery images={images} title="Collages" />;
};

export default Collages;