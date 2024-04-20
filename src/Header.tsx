import React from 'react';
// ... Other imports
import NavList from './NavList';

function Header() {
  const navigationLinks = [
    { text: "Skins", href: "#" },
    { text: "Cases", href: "#" },
    // ... Add more links here
  ];

  return (
    <header className="header">
      <div className="container">
        {/* ... other components */}
        <NavList links={navigationLinks} /> 
      </div>
    </header>
  );
}
export default Header;
