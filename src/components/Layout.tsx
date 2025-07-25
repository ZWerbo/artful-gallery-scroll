import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground font-gallery">
      <Navigation />
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;