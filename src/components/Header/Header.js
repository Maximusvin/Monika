import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.png';
import ava from '../../img/Kozlov.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <ul className={styles.headerMenu}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs">Message</NavLink>
          </li>
          <li>
            <NavLink to="#a">Notification</NavLink>
          </li>
        </ul>
        <div>
          <a href="/">
            <img src={logo} width="50" alt="img" />
          </a>
        </div>
        <div className={styles.auth}>
          <div className={styles.search}>
            <input placeholder="search" />
          </div>
          <img src={ava} alt="ava" />
        </div>
      </div>
    </header>
  );
};

export default Header;
