import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="min-h-screen hidden md:flex w-full bg-background text-foreground">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </div>
      
      {/* Mobile Layout */}
      <div className="min-h-screen flex md:hidden flex-col w-full bg-background text-foreground">
        {/* Top Half - Navigation */}
        <div className="h-1/2 overflow-y-auto border-b border-border">
          <Navigation />
        </div>
        
        {/* Bottom Half - Content */}
        <div className="h-1/2 flex-1">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;