import { type NavMenuFooter } from '@/shared/ui/NavMenu/NavMenu';

type NavMenuItem = NavMenuFooter['navItems'][number];

export const navMenuItems: NavMenuItem[] = [
  {
    sections: [
      {
        title: 'Services',
        items: [
          { item: 'Exchange', path: '/exchange' },
          { item: 'Spot', path: '/spot ' },
          { item: 'P2P Trading', path: '/p2pTrading' },
          { item: 'Securities Trading', path: '/securitiesTrading' },
        ],
      },
      {
        title: 'Product',
        items: [
          { item: 'Mobile App', path: '/mobileApp' },
          { item: 'Lending Pro', path: '/lendingPro' },
          { item: 'Reporting APP', path: '/reportingApp' },
        ],
      },
      {
        title: 'Company',
        items: [
          { item: 'About', path: '/about' },
          { item: 'Affiliates', path: '/affiliates' },
          { item: 'Careers', path: '/careers' },
          { item: 'Announcement', path: '/announcement' },
        ],
      },
      {
        title: 'Support',
        items: [
          { item: 'Help Center', path: '/helpCenter' },
          { item: 'Contact Us', path: '/contactUs' },
          { item: 'Status', path: '/status' },
          { item: 'Learn', path: '/learn' },
        ],
      },
    ],
  },
];
