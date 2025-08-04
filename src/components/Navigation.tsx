import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const getCurrentTitle = () => {
    switch (location.pathname) {
      case '/paintings/strangers':
        return 'Sometimes I miss strangers';
      case '/paintings/collages':
        return 'Collages';
      case '/photography/bizzarro-incognito':
        return 'Bizzarro incognito';
      case '/photography/east-west-between':
        return 'East, west, and in between';
      case '/bio':
        return 'Artist CV/BIO';
      default:
        return '';
    }
  };

  return (
    <div className="w-64 bg-background border-r border-border h-screen sticky top-0 overflow-y-auto">
      {/* Header with name and current title */}
      <div className="p-6 border-b border-border">
        <h1 className="text-lg font-light tracking-wide mb-2">Zach Werb</h1>
        {getCurrentTitle() && (
          <div className="text-sm text-muted-foreground font-light">
            {getCurrentTitle()}
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Paintings Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            Paintings
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/paintings/strangers"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              Sometimes I miss strangers
            </NavLink>
            <NavLink
              to="/paintings/collages"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              Collages
            </NavLink>
          </div>
        </div>

        {/* Photography Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            Photography
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/photography/bizzarro-incognito"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              Bizzarro incognito
            </NavLink>
            <NavLink
              to="/photography/east-west-between"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              East, west, and in between
            </NavLink>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            Info
          </h3>
          <div className="space-y-3">
            <NavLink
              to="/bio"
              className={({ isActive }) =>
                `block text-foreground hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-medium' : ''
                }`
              }
            >
              Artist CV/BIO
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;