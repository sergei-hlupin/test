import * as yup from 'yup';

export const userCreateValidation = yup.object().shape({
  userName: yup
    .string()
    .min(2, 'Минимум 2 символа')
    .max(20, 'Максимум 20 символов')
    .required('Поле обязательно к заполнению'),
  login: yup
    .string()
    .email('укажите корректный почтовый адрес')
    .required('Поле обязательно к заполнению'),
  password: yup
    .string()
    .min(6, 'Минимум 6 символа')
    .max(40, 'Максимум 40 символов')
    .required('Поле обязательно к заполнению'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Введенные пароли не совпадают')
    .required('Поле обязательно к заполнению'),
});

export const userLoginValidation = yup.object().shape({
  login: yup
    .string()
    .email('укажите корректный почтовый адрес')
    .required('Поле обязательно к заполнению'),
  password: yup
    .string()
    .min(6, 'Минимум 6 символа')
    .max(40, 'Максимум 40 символов')
    .required('Поле обязательно к заполнению'),
});
