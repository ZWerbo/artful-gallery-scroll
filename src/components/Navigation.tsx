import { Palette, Camera, User, ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const Navigation = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const [paintingsOpen, setPaintingsOpen] = useState(true);
  const [photographyOpen, setPhotographyOpen] = useState(false);

  const collapsed = state === 'collapsed';
  const isActive = (path: string) => location.pathname === path;
  
  const paintingsItems = [
    { path: '/paintings/strangers', label: 'Sometimes I miss strangers' },
    { path: '/paintings/collages', label: 'Collages' },
  ];

  const photographyItems = [
    { path: '/photography/series-1', label: 'Series 1' },
    { path: '/photography/series-2', label: 'Series 2' },
  ];

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <h1 className={`font-light tracking-wide transition-opacity duration-200 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
            Artist Portfolio
          </h1>
        </div>

        <SidebarGroup>
          <SidebarMenu>
            {/* Paintings Section */}
            <SidebarMenuItem>
              <Collapsible open={paintingsOpen} onOpenChange={setPaintingsOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between">
                    <div className="flex items-center">
                      <Palette className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Paintings</span>}
                    </div>
                    {!collapsed && (
                      paintingsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {paintingsItems.map((item) => (
                      <SidebarMenuSubItem key={item.path}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `w-full ${isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`
                            }
                          >
                            {!collapsed && <span className="ml-4">{item.label}</span>}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Photography Section */}
            <SidebarMenuItem>
              <Collapsible open={photographyOpen} onOpenChange={setPhotographyOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between">
                    <div className="flex items-center">
                      <Camera className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Photography</span>}
                    </div>
                    {!collapsed && (
                      photographyOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {photographyItems.map((item) => (
                      <SidebarMenuSubItem key={item.path}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `w-full ${isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`
                            }
                          >
                            {!collapsed && <span className="ml-4">{item.label}</span>}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Artist CV/BIO */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/bio"
                  className={({ isActive }) =>
                    `w-full ${isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`
                  }
                >
                  <User className="mr-2 h-4 w-4" />
                  {!collapsed && <span>Artist CV/BIO</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Navigation;