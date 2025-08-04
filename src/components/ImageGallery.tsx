import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextImage = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  // Preload next and previous images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    
    if (images[nextIndex]) preloadImage(images[nextIndex].src);
    if (images[prevIndex]) preloadImage(images[prevIndex].src);
  }, [currentIndex, images]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return <div className="min-h-screen flex items-center justify-center">No images to display</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-4">
            {title}
          </h1>
          <div className="text-center text-sm text-muted-foreground font-light">
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="relative flex-1 flex items-center justify-center px-6 pb-20">
        <div className="relative max-w-5xl w-full">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse">
              <div className="w-16 h-16 border-2 border-muted-foreground/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}

          {/* Image */}
          <div className={`relative transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain animate-gallery-enter"
              onLoad={handleImageLoad}
              onLoadStart={() => setIsLoading(true)}
            />
            
            {/* Image Title */}
            {currentImage.title && (
              <div className="mt-6 text-center">
                <h2 className="text-lg font-light text-muted-foreground tracking-wide">
                  {currentImage.title}
                </h2>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="lg"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            disabled={images.length <= 1}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            disabled={images.length <= 1}
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ImageGallery;