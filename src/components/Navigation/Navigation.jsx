import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelector';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <header>
      <nav>
        {!isAuth && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isAuth && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isAuth && <UserMenu />}
    </header>
  );
};
