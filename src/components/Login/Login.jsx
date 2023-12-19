import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { userLoginValidation } from '../Validation/userValidation';
import styles from './Login.module.scss';
import { setLocalStorage } from '../../services/localstorage';

const Login = () => {
  const [error, setError] = useState(false);
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userLoginValidation),
  });

  const onSubmit = (data) => {
    users.forEach((element) => {
      if (element.login === data.login) {
        setLocalStorage('login', element);
        navigate('/profile');
      }
    });
    setError(true);
  };

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">
          Логин
          <input
            className={styles.input}
            {...register('login')}
            name="login"
            placeholder="Введите логин"
          />
          <div className={styles.errors}>{errors.login && <span>{errors.login.message}</span>}</div>
        </label>
        <label htmlFor="password">
          Пароль
          <input
            className={styles.input}
            {...register('password')}
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
        </label>
        <input className={styles.submit} type="submit" value="Войти" />
        <div className={styles.errors}>
          {error && 'Имя пользователя или пароль введены не верно'}
        </div>
      </form>
    </div>
  );
};

export default Login;
