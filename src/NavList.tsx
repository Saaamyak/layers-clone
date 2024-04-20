import React from 'react';
import NavLink from './NavLink';

interface NavListProps {
  links: { text: string; href: string }[]; 
}

function NavList({ links }: NavListProps) {
  return (
    <ul className="nav-list">
      {links.map((link) => (
        <NavLink key={link.text} text={link.text} href={link.href} />
      ))}
    </ul>
  );
}

export default NavList;
