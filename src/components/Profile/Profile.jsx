import React from 'react';
import styles from './Profile.module.scss';
import { getLocalStorage } from '../../services/localstorage';

const Profile = () => {
  const user = getLocalStorage('login');

  return (
    <div className={styles.profile}>
      <div className={styles.item}>
        <h2>Имя пользователя</h2>
        <span>{user?.name}</span>
      </div>
      <div className={styles.item}>
        <h2>Логин пользователя</h2>
        <span>{user?.login}</span>
      </div>
      <div className={styles.item}>
        <h2>Пароль пользователя</h2>
        <span>{user?.password}</span>
      </div>
    </div>
  );
};

export default Profile;
