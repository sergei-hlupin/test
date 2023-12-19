export const getLocalStorage = (login) => {
  const user = localStorage.getItem(login);
  return JSON.parse(user);
};

export const setLocalStorage = (login, user) => {
  const userJson = JSON.stringify(user);
  localStorage.setItem(login, userJson);
};
