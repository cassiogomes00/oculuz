import React from 'react';
import src from '../../../assets/img/placeholder.png';
import LogoStyled from './Logo/Logo.styled';

import Nav from './Nav/Nav';

export default function Header() {
  return (
    <div>
      <LogoStyled src={src} alt="Logo do site" />
      <Nav />
      {
        // SEARCH
        // LOGIN/PROFILE
      }
    </div>
  );
}
