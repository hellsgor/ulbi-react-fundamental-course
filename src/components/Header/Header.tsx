import { Link, NavLink, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { Button } from '../UI/Button/Button';
import { useAuth } from '../../hooks/useAuth';

export type NavItem = {
  text: string;
  path: string;
  attrs?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  mods?: string[] | (() => string[]);
};

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      text: 'About',
      path: 'about',
      mods: () => (isAuth ? [] : [classes.disabled]),
    },
    {
      text: 'Posts',
      path: 'posts',
      mods: () => (isAuth ? [] : [classes.disabled]),
    },
    {
      text: 'Visit chanel',
      path: 'https://www.youtube.com/@UlbiTV',
      attrs: { target: '_blank' },
      mods: [classes.wide, classes.external],
    },
  ];

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerWrapper}>
          <div className={classes.headerLogo}></div>
          <nav className={classes.headerNav}>
            {navItems.map((item) => {
              const classNames = [
                classes.headerNavItem,
                ...(typeof item.mods === 'function'
                  ? item.mods()
                  : item.mods || []),
              ].join(' ');

              return (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? `${classNames} ${classes.active}` : classNames
                  }
                  {...item.attrs}
                  end
                >
                  {item.text}
                </NavLink>
              );
            })}

            <div style={{ marginLeft: 'auto' }}></div>
            {isAuth ? (
              <Link
                to="/login"
                className={classes.headerNavItem}
                onClick={() => setIsAuth(false)}
              >
                Sign Out
              </Link>
            ) : (
              <Button onClick={() => navigate('/login')}>Sign In</Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
