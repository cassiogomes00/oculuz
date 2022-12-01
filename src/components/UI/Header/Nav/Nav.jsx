import React from 'react';
import xSrc from '../../../../assets/img/placeholder.png';
import NavItem from './NavItem/NavItem';

// TODO
const NAV_ITEMS = [
  { name: 'Lentes', icon: xSrc },
  { name: 'Óculos de grau', icon: xSrc },
  { name: 'Óculos de sol', icon: xSrc },
];

export default function Nav() {
  return (
    <ul>
      {NAV_ITEMS.map((navItem, index) => (
        <NavItem key={index} navItem={navItem} />
      ))}
    </ul>
  );
}
