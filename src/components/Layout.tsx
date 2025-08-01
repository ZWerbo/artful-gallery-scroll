import { ReactNode, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background text-foreground font-gallery">
      <Navigation collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col">
        <header className="h-12 flex items-center border-b border-border bg-background px-4">
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            <Menu className="h-4 w-4" />
          </Button>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;