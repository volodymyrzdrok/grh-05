import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import c from './Header.module.css';

const Header = props => (
  <header className={c.header}>
    <NavLink
      className={({ isActive }) => (isActive ? c.linkMenuActive : c.linkMenu)}
      to={routes.home}
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? c.linkMenuActive : c.linkMenu)}
      to={routes.movies}
    >
      Movies
    </NavLink>
  </header>
);

Header.propTypes = {};

export default Header;
