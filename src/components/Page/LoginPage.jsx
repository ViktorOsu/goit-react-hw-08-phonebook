import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm/AuthForm';
import { logIn } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = data => {
    dispatch(logIn(data));
    // console.log('login :>>', data);
  };

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm onSubmit={handleLoginUser} />
    </>
  );
};

export default LoginPage;
