import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Message
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/music" activeClassName={styles.active}>
            Music
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/settings" activeClassName={styles.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
