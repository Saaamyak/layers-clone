import React from 'react';

interface NavLinkProps {
  text: string;
  href: string; 
}

function NavLink({ text, href }: NavLinkProps) {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {text}
      </a>
    </li>
  );
}

export default NavLink;
