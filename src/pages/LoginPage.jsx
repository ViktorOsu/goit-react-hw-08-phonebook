import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm/AuthForm';
import { login } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = data => {
    dispatch(login(data));
  };

  return (
    <>
      {/* <h1>LoginPage</h1> */}
      <AuthForm
        onSubmit={handleLoginUser}
        submitTitle={'login'}
        inputsName={{ email: '', password: '' }}
      />
    </>
  );
};

export default LoginPage;
