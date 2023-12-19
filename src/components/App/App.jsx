import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './App.module.scss';
import Profile from '../Profile/Profile';
import Registration from '../Registration/Registration';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Login from '../Login/Login';
import fetchUsers from '../../services/api';
import RequireLogin from '../../hoc/RequireLogin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="profile"
            element={
              <RequireLogin>
                <Profile />
              </RequireLogin>
            }
          />
          <Route
            path="registration"
            element={
              <RequireLogin>
                <Registration />
              </RequireLogin>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
