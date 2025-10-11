'use client';
import Link from 'next/link';
import React from 'react';
import './NavMenu.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';


export interface NavMenuProps {
  navItems: {
    item?: string;
    path: string;
  }[];
}

const NavMenu = ({ navItems }: NavMenuProps) => {
  const pathname = usePathname();
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {navItems.map((item) => (
          <li
            className={clsx('nav-menu__item', {
              'nav-menu__item--active': item.path === pathname,
            })}
            key={item.item}
          >
            <Link className="nav-menu__link" href={item.path}>
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
