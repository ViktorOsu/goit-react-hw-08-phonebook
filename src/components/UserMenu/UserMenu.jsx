import { logOut } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName } from '../../redux/auth/authSelector';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const UserName = useSelector(selectorUserName);
  return (
    <div className={s.container}>
      <p className={s.user_name}>Hello, {UserName}</p>
      <button className={s.user_button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
