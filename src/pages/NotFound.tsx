import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl font-light mb-4 tracking-wide">404</h1>
        <p className="text-xl text-muted-foreground mb-8 font-light">Page not found</p>
        <a href="/" className="text-primary hover:text-foreground transition-colors duration-300 font-light tracking-wide">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
