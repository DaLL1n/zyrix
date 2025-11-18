'use client';
import Link from 'next/link';
import './NavMenu.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

export interface NavMenuHeader {
  navItems: {
    item: string;
    path: string;
  }[];
  purpose: 'header';
}
export interface NavMenuFooter {
  navItems: {
    sections: { title: string; items: NavMenuHeader['navItems'][number][] }[];
  }[];
  purpose: 'footer';
}

export type NavMenuProps = NavMenuFooter | NavMenuHeader;

const NavMenu = memo(({ navItems, purpose }: NavMenuProps) => {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/^\/zyrix/, '') || '/';

  console.log('NavMenu Debug:', {
    rawPathname,
    pathname,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    sampleItemPath: purpose === 'header' ? navItems[0]?.path : 'N/A',
  });

  return (
    <nav className={`nav-menu`}>
      {purpose === 'header' && (
        <ul className={`nav-menu__list`}>
          {navItems.map((item) => (
            <li
              className={clsx(`nav-menu__item`, {
                [`nav-menu__item--active`]: item.path === pathname,
              })}
              key={item.item}
            >
              <Link className={`nav-menu__link`} href={item.path}>
                {item.item}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {purpose === 'footer' &&
        navItems.map((item) =>
          item.sections.map((section) => (
            <ul className="nav-menu__list" key={section.items[0].item[0]}>
              <li className="nav-menu__item">
                <h3 className="nav-menu__title">{section.title}</h3>
              </li>
              {section.items.map((item) => (
                <li className="nav-menu__item" key={item.path}>
                  <Link className="nav-menu__link" href={item.path}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          )),
        )}
    </nav>
  );
});

NavMenu.displayName = 'NavMenu';

export default NavMenu;
