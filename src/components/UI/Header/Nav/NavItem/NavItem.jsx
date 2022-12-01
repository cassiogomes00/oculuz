import React from 'react';
import { Link } from 'react-router-dom';
import NavItemIconStyled from './NavItemIcon/NavItemIcon.styled';
import NavItemName from './NavItemName/NavItemName';

export default function NavItem({ navItem }) {
  return (
    <li>
      <Link to="/">
        {/* TODO */}
        <NavItemIconStyled src={navItem.icon} alt={`${navItem.name} option`} />
        <NavItemName>{navItem.name}</NavItemName>
      </Link>
    </li>
  );
}
