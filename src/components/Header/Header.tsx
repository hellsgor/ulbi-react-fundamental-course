import { Link } from 'react-router-dom';
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
              <Link
                key={item.text}
                to={item.path}
                className={classes.headerNavItem}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <div className={classes.headerContacts}>
            <a
              target="_blank"
              href="https://www.youtube.com/@UlbiTV"
              className={classes.headerNavItem}
            >
              visit channel
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};