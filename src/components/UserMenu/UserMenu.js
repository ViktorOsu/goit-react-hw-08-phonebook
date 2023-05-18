import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>mango@mail.com</p>
      <button onClick={() => dispatch(logOut)}>Logout</button>
    </div>
  );
};
