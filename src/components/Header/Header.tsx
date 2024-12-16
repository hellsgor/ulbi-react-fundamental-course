import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export type NavItem = {
  text: string;
  path: string;
  attrs?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  mods?: string[];
};

export const Header = () => {
  const navItems: NavItem[] = [
    { text: 'About', path: 'about' },
    { text: 'Posts', path: 'posts' },
    {
      text: 'Visit chanel',
      path: 'https://www.youtube.com/@UlbiTV',
      attrs: { target: '_blank' },
      mods: [classes.wide, classes.external],
    },
    { text: 'Login', path: 'login', mods: [classes.right] },
  ];

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerWrapper}>
          <div className={classes.headerLogo}></div>
          <nav className={classes.headerNav}>
            {navItems.map((item) => {
              const classNames = item.mods?.length
                ? [classes.headerNavItem, ...item.mods].join(' ')
                : classes.headerNavItem;
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
          </nav>
        </div>
      </div>
    </header>
  );
};
