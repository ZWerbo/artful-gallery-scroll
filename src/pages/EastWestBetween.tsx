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
    { src: east1, alt: 'Tonopah Morning', title: 'Tonopah Morning' },
    { src: east2, alt: 'Arizona Stray', title: 'Arizona Stray' },
    { src: east3, alt: 'Fastfood Cowboy', title: 'Fastfood Cowboy' },
    { src: east4, alt: 'Roswell', title: 'Roswell' },
    { src: east5, alt: 'South Horse', title: 'South Horse' },
    { src: east6, alt: 'Traveler in Mississippi', title: 'Traveler in Mississippi' },
    { src: east7, alt: 'Jeanie in sedona', title: 'Jeanie in sedona' },
    { src: east8, alt: 'Amarillo', title: 'Amarillo' }
  ];
  return <ImageGallery images={images} title="East, West and In Between" />;
};

export default EastWestBetween;