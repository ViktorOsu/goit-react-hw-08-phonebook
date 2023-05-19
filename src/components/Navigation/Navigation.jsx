import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelector';
import { UserMenu } from 'components/UserMenu/UserMenu';
import s from './Navigation.module.css';

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <header className={s.header}>
      <nav>
        <div className={s.nav_menu}>
          {!isAuth && (
            <>
              <div className={s.nav_menu_li}>
                <Link to="/register" className={s.nav_link}>
                  Register
                </Link>
              </div>
              <div className={s.nav_menu_li}>
                <Link to="/login" className={s.nav_link}>
                  Login
                </Link>
              </div>
            </>
          )}
          {/* {isAuth && (
            <div className={s.nav_menu_li}>
              <Link to="/contacts" className={s.nav_link}>
                Contacts
              </Link>
            </div>
          )} */}
        </div>
      </nav>
      {isAuth && <UserMenu />}
    </header>
  );
};
