import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import styles from './Registration.module.scss';
import { userCreateValidation } from '../Validation/userValidation';
import Message from '../Message/Message';

const Registration = () => {
  const users = useSelector((state) => state.users.users);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userCreateValidation),
  });

  const onSubmit = (data) => {
    const validation = users.some((element) => element.login === data.login);
    if (validation) {
      setError(true);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className={styles.registration}>
      <h1>Регистрация</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">
          Имя
          <input
            className={styles.input}
            {...register('userName')}
            name="userName"
            placeholder="Введите имя"
          />
          <div className={styles.errors}>
            {errors.userName && <span>{errors.userName.message}</span>}
          </div>
        </label>
        <label htmlFor="login">
          Логин
          <input
            className={styles.input}
            {...register('login')}
            name="login"
            placeholder="Введите логин"
          />
          <div className={styles.errors}>
            {error && 'Пользователь с таким логином уже зарегистрирован'}
            {errors.login && <span>{errors.login.message}</span>}
          </div>
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
        <label className={styles.label} htmlFor="repeatPassword">
          Повторите пароль
          <input
            className={styles.input}
            {...register('repeatPassword')}
            type="password"
            name="repeatPassword"
            placeholder="Введите пароль"
          />
          <div className={styles.errors}>
            {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
          </div>
        </label>
        <input className={styles.submit} type="submit" value="Создать аккаунт" />
      </form>
      {success && <Message />}
    </div>
  );
};

export default Registration;
