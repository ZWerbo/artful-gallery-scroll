import ImageGallery from '@/components/ImageGallery';
import collage1 from '@/assets/Comingsoon.jpg';

const Collages = () => {
  const images = [
    {
      src: collage1,
      alt: 'Abstract collage artwork',
      title: 'Almost Here'
    }
  ];

  return <ImageGallery images={images} title="Collages" />;
};

export default Collages;