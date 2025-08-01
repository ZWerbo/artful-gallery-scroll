import { Palette, Camera, User, ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

interface NavigationProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Navigation = ({ collapsed = false, onToggle }: NavigationProps) => {
  const [paintingsOpen, setPaintingsOpen] = useState(true);
  const [photographyOpen, setPhotographyOpen] = useState(false);
  
  const paintingsItems = [
    { path: '/paintings/strangers', label: 'Sometimes I miss strangers' },
    { path: '/paintings/collages', label: 'Collages' },
  ];

  const photographyItems = [
    { path: '/photography/series-1', label: 'Series 1' },
    { path: '/photography/series-2', label: 'Series 2' },
  ];

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-background border-r border-border h-full transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h1 className={`font-light tracking-wide transition-opacity duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
          Artist Portfolio
        </h1>
        {onToggle && (
          <Button variant="ghost" size="sm" onClick={onToggle} className="h-8 w-8 p-0">
            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${collapsed ? 'rotate-0' : 'rotate-180'}`} />
          </Button>
        )}
      </div>

      {/* Navigation Menu */}
      <div className="p-4 space-y-2">
        {/* Paintings Section */}
        <div>
          <Collapsible open={paintingsOpen} onOpenChange={setPaintingsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-2 h-auto">
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-2 flex-shrink-0" />
                  {!collapsed && <span className="text-sm">Paintings</span>}
                </div>
                {!collapsed && (
                  paintingsOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            {!collapsed && (
              <CollapsibleContent className="ml-6 mt-1 space-y-1">
                {paintingsItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-2 py-1 text-xs rounded transition-colors ${
                        isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        </div>

        {/* Photography Section */}
        <div>
          <Collapsible open={photographyOpen} onOpenChange={setPhotographyOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-2 h-auto">
                <div className="flex items-center">
                  <Camera className="h-4 w-4 mr-2 flex-shrink-0" />
                  {!collapsed && <span className="text-sm">Photography</span>}
                </div>
                {!collapsed && (
                  photographyOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            {!collapsed && (
              <CollapsibleContent className="ml-6 mt-1 space-y-1">
                {photographyItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-2 py-1 text-xs rounded transition-colors ${
                        isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        </div>

        {/* Artist CV/BIO */}
        <NavLink
          to="/bio"
          className={({ isActive }) =>
            `flex items-center px-2 py-2 rounded transition-colors ${
              isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
            }`
          }
        >
          <User className="h-4 w-4 mr-2 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Artist CV/BIO</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;