import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Message.module.scss';

const Message = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.message}>
      <h2>Регистрация произошла успешна</h2>
      <button className={styles.button} onClick={() => navigate('/login')} type="button">
        Перейти на страницу авторизации
      </button>
    </div>
  );
};

export default Message;
