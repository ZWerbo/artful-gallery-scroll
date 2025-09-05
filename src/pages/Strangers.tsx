import ImageGallery from '@/components/ImageGallery';
import strangers1 from '@/assets/Strangers-1.jpg';
import strangers2 from '@/assets/Strangers-2.jpg';
import strangers3 from '@/assets/Strangers-3.jpg';
import strangers4 from '@/assets/Strangers-4.jpg';
import strangers5 from '@/assets/Strangers-5.jpg';
import strangers6 from '@/assets/Strangers-6.jpg';
import strangers7 from '@/assets/Strangers-7.jpg';
import strangers8 from '@/assets/Strangers-8.jpg';
import strangers9 from '@/assets/Strangers-9.jpg';
import strangers10 from '@/assets/Strangers-10.jpg';
import strangers11 from '@/assets/Strangers-11.jpg';
import strangers12 from '@/assets/Strangers-12.jpg';
import strangers13 from '@/assets/Strangers-13.jpg';
import strangers14 from '@/assets/Strangers-14.jpg';
import strangers15 from '@/assets/Strangers-15.jpg';

const Strangers = () => {
  const images = [
    {
      src: strangers1,
      alt: 'Swan song #1',
      title: 'Swan Song in a foreign land'
    },
    {
      src: strangers2,
      alt: 'Swan song #2',
      title: 'Swan song in the dead of winter'
    },
    {
      src: strangers3,
      alt: 'Swan Song #3',
      title: 'Swan song on the rocky seas'
    },
    {
      src: strangers4,
      alt: 'Swan Song #4',
      title: 'Swan song on while sleeping'
    },
        {
      src: strangers5,
      alt: 'Swan Song #5',
      title: 'Swan song in a red vortex'
    },
    {
      src: strangers6,
      alt: 'Swan Song #6',
      title: 'Swan song in a red vortex'
    },
    {
      src: strangers7,
      alt: 'Swan Song #7',
      title: 'Swan song in a blue haze'
    },
    {
      src: strangers8,
      alt: 'Swan Song #8',
      title: 'Swan song by the cigarette flame'
    },
    {
      src: strangers9,
      alt: 'Swan Song #9',
      title: 'Swan song in a green field'
    },
    {
      src: strangers10,
      alt: 'Swan Song #10',
      title: 'Swan song in the oregon forest'
    },
    {
      src: strangers11,
      alt: 'Swan Song #11',
      title: 'Swan song on a red throne'
    },
    {
      src: strangers12,
      alt: 'Swan Song #12',
      title: 'Swan song in a crowded place'
    },
    {
      src: strangers13,
      alt: 'Swan Song #13',
      title: 'Swan song in a dream'
    },
    {
      src: strangers14,
      alt: 'Swan Song #14',
      title: 'Swan song in a memory'
    },
        {
      src: strangers15,
      alt: 'Swan Song #15',
      title: 'Swan song wrapped in a shroud'
    }
  ];

  return <ImageGallery images={images} title="Sometimes I miss strangers" />;
};

export default Strangers;