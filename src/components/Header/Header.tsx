import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.css';

export type NavItem = {
  text: string;
  path: string;
};

export const Header = () => {
  const navItems: NavItem[] = [
    { text: 'About', path: '/about' },
    { text: 'Posts', path: 'posts' },
  ];

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerWrapper}>
          <div className={classes.headerLogo}></div>
          <nav className={classes.headerNav}>
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${classes.headerNavItem} ${classes.active}`
                    : classes.headerNavItem
                }
                end
              >
                {item.text}
              </NavLink>
            ))}
          </nav>
          <div className={classes.headerContacts}>
            <Link
              target="_blank"
              to="https://www.youtube.com/@UlbiTV"
              className={classes.headerNavItem}
            >
              visit channel
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
