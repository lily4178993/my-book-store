import React from 'react';
import NavLink from 'components/menu/NavLink';
import UserS from 'components/menu/User';
import HeaderCSS from 'components/styles/Header.module.css';

const Header = () => (
  <header className={HeaderCSS.panelBg}>
    <NavLink />
    <UserS />
  </header>
);

export default Header;
