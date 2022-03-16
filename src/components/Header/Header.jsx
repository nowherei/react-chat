import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singOut } from '../../redux/slices/loggedInUserSlice';
import Container from '../Container';
import Icon from '../Icon';

import styles from './Header.module.css';

const Header = ({ button }) => {
  const { image, name } = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const headerButton = button.link ? (
    <Link to={button.link ? button.link : '#'} className={styles.button}>
      {button.icon}
      <span className={styles.buttonText}>{button.text}</span>
    </Link>
  ) : (
    <div className={styles.button}>
      {button.icon}
      <span className={styles.buttonText}>{button.text}</span>
    </div>
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.user}>
            <img className={styles.userImage} src={image} alt={name} />
            <span>{name}</span>
          </div>
          {headerButton}
          <button className={styles.exit} onClick={() => dispatch(singOut())}>
            <span className={styles.exitText}>Выход</span>
            <Icon name="exit" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
