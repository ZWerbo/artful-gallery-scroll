import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-foreground font-gallery">
        <Navigation />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border bg-background">
            <SidebarTrigger className="ml-4" />
          </header>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;