
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Navigation = ({ collapsed = false }: NavigationProps) => {
  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-background border-r border-border h-screen sticky top-0 transition-all duration-300 overflow-y-auto`}>
      <div className="p-6">
        {/* BOOK WORK Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            {!collapsed && "BOOK WORK"}
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/paintings/strangers"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                } ${collapsed ? 'text-center' : ''}`
              }
            >
              {collapsed ? 'S' : 'Sometimes I miss strangers'}
            </NavLink>
            <NavLink
              to="/paintings/collages"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                } ${collapsed ? 'text-center' : ''}`
              }
            >
              {collapsed ? 'C' : 'Collages'}
            </NavLink>
          </div>
        </div>

        {/* COMMISSIONED WORK Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            {!collapsed && "COMMISSIONED WORK"}
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/photography/series-1"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                } ${collapsed ? 'text-center' : ''}`
              }
            >
              {collapsed ? 'P' : 'Portraits'}
            </NavLink>
            <NavLink
              to="/photography/series-2"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                } ${collapsed ? 'text-center' : ''}`
              }
            >
              {collapsed ? 'L' : 'Landscapes'}
            </NavLink>
          </div>
        </div>

        {/* ONGOING PROJECT WORK Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            {!collapsed && "ONGOING PROJECT WORK"}
          </h3>
          <div className="space-y-3">
            <div className="text-foreground">
              {collapsed ? 'A' : 'A Song Within A Song'}
            </div>
            <div className="text-foreground">
              {collapsed ? 'B' : 'Bird Song Over Black Water'}
            </div>
            <div className="text-foreground">
              {collapsed ? 'E' : 'Entropy Epicenter'}
            </div>
          </div>
        </div>

        {/* INFO Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            {!collapsed && "INFO"}
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/bio"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                } ${collapsed ? 'text-center' : ''}`
              }
            >
              {collapsed ? 'CV' : 'Artist CV/BIO'}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
