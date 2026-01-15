// Удаляем строку: import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          White Sky
        </Link>
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/video-info" onClick={closeMenu}>Video Info</Link></li>
          <li><Link to="/text-info" onClick={closeMenu}>Text Info</Link></li>
          <li><Link to="/salary" onClick={closeMenu}>Salary</Link></li>
          <li><Link to="/schedules" onClick={closeMenu}>Schedules</Link></li>
          <li><Link to="/employment" onClick={closeMenu}>Employment</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;