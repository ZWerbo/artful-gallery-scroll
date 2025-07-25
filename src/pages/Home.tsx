import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-8 leading-tight">
          Contemporary
          <br />
          Visual Artist
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Exploring the intersections of memory, place, and human connection through photography and mixed media.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <Button variant="outline" asChild className="w-full md:w-auto">
            <Link to="/strangers">View Recent Work</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full md:w-auto">
            <Link to="/bio">About the Artist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;