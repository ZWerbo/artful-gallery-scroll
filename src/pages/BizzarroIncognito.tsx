import ImageGallery from '@/components/ImageGallery';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery3 from '@/assets/Strangers-1.jpg';

const BizzarroIncognito = () => {
  const images = [
    {
      src: gallery1,
      alt: 'Abstract architectural photography',
      title: 'Geometry of Solitude, 2024'
    },
    {
      src: gallery3,
      alt: 'Urban landscape photography',
      title: 'City Dreams, 2024'
    }
  ];

  return <ImageGallery images={images} title="Bizzarro Incognito" />;
};

export default BizzarroIncognito;