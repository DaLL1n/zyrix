import PATH from '@/shared/config/paths.config';

interface NavItems {
  item: string;
  path: string;
}

export const navItems: NavItems[] = [
  { item: 'Market', path: PATH.MARKET },
  { item: 'Spot', path: PATH.SPOT },
  { item: 'Support', path: PATH.SUPPORT },
  { item: 'Blog', path: PATH.BLOG },
];
