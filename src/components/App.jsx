import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from '../components/Page/RegisterPage';
import { LoginPage } from '../components/Page/LoginPage';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { ContactPage } from '../components/Page/ContactPage';
import { Navigation } from '../components/Navigation/Navigation';
import { HomePage } from './Page/Home';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
