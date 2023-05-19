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
        <div className={s.navMenu}>
          {!isAuth && (
            <>
              <div className={s.navHome}>
                <Link to="/" className={s.navigateLinkHome}>
                  Home
                </Link>
              </div>

              <div className={s.navBox}>
                <div className={s.navRegLog}>
                  <Link to="/register" className={s.navigateLink}>
                    Register
                  </Link>
                </div>
                <div className={s.navRegLog}>
                  <Link to="/login" className={s.navigateLink}>
                    Login
                  </Link>
                </div>
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
