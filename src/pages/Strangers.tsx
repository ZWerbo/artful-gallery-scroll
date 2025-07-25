import ImageGallery from '@/components/ImageGallery';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const Strangers = () => {
  const images = [
    {
      src: gallery1,
      alt: 'Abstract architectural shadows',
      title: 'Untitled #1, 2024'
    },
    {
      src: gallery2,
      alt: 'Contemplative portrait study',
      title: 'Sometimes I miss strangers #2, 2024'
    },
    {
      src: gallery3,
      alt: 'Urban landscape with melancholic atmosphere',
      title: 'Empty spaces #3, 2024'
    }
  ];

  return <ImageGallery images={images} title="Sometimes I miss strangers" />;
};

export default Strangers;