import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <CustomLink to="/">На главную</CustomLink>
      </div>
      <div className={styles.gap}>
        <CustomLink to="/registration">Регистрация</CustomLink>
        <CustomLink to="/profile">Профиль</CustomLink>
      </div>
    </div>
  );
};

export default Header;
