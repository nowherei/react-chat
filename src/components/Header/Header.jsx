import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Icon from '../Icon';

import styles from './Header.module.css';

const Header = ({ user, button }) => {
  const headerButton = button.link ? (
    <Link to={button.link ? button.link : '#'} className={styles.button}>
      {button.icon}
      <span className={styles.buttonText}>{button.text}</span>
    </Link>
  ) : (
    <a href={() => false} className={styles.button}>
      {button.icon}
      <span className={styles.buttonText}>{button.text}</span>
    </a>
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.user}>
            <img
              className={styles.userImage}
              src={user.image}
              alt={user.name}
            />
            <span>{user.name}</span>
          </div>
          {headerButton}
          <button className={styles.exit}>
            <span className={styles.exitText}>Выход</span>
            <Icon name="exit" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
