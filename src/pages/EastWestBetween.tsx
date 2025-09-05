import ImageGallery from '@/components/ImageGallery';
import east1 from '@/assets/East-1.jpg';
import east2 from '@/assets/East-2.jpg';
import east3 from '@/assets/East-3.jpg';
import east4 from '@/assets/East-4.jpg';
import east5 from '@/assets/East-5.jpg';
import east6 from '@/assets/East-6.jpg';
import east7 from '@/assets/East-7.jpg';
import east8 from '@/assets/East-8.jpg';

const EastWestBetween = () => {
  const images = [
    { src: east1, alt: 'East-1', title: 'East-1' },
    { src: east2, alt: 'East-2', title: 'East-2' },
    { src: east3, alt: 'East-3', title: 'East-3' },
    { src: east4, alt: 'East-4', title: 'East-4' },
    { src: east5, alt: 'East-5', title: 'East-5' },
    { src: east6, alt: 'East-6', title: 'East-6' },
    { src: east7, alt: 'East-7', title: 'East-7' },
    { src: east8, alt: 'East-8', title: 'East-8' }
  ];
  return <ImageGallery images={images} title="East, West and In Between" />;
};

export default EastWestBetween;