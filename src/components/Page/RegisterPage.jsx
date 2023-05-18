// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { AuthForm } from 'components/AuthForm/AuthForm/AuthForm';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = data => {
    dispatch(register(data));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm onSubmit={handleRegisterUser} />
    </>
  );
};

export default RegisterPage;
