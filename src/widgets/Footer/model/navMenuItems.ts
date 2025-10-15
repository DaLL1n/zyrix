import PATH from '@/shared/config/paths.config';
import { type NavMenuFooter } from '@/shared/ui/NavMenu/NavMenu';

type NavMenuItem = NavMenuFooter['navItems'][number];

export const navMenuItems: NavMenuItem[] = [
  {
    sections: [
      {
        title: 'Services',
        items: [
          { item: 'Exchange', path: PATH.EXCHANGE },
          { item: 'Spot', path: PATH.SPOT  },
          { item: 'P2P Trading', path: PATH.P2P_TRADING },
          { item: 'Securities Trading', path: PATH.SECURITIES_TRADING },
        ],
      },
      {
        title: 'Product',
        items: [
          { item: 'Mobile App', path: PATH.MOBILE_APP },
          { item: 'Lending Pro', path: PATH.LENDING_PRO },
          { item: 'Reporting APP', path: PATH.REPORTING_APP },
        ],
      },
      {
        title: 'Company',
        items: [
          { item: 'About', path: PATH.ABOUT  },
          { item: 'Affiliates', path: PATH.AFFILATES },
          { item: 'Careers', path: PATH.CAREERS },
          { item: 'Announcement', path: PATH.ANNOUNCEMENT },
        ],
      },
      {
        title: 'Support',
        items: [
          { item: 'Help Center', path: PATH.HELP_CENTER },
          { item: 'Contact Us', path: PATH.CONTACT_US },
          { item: 'Status', path: PATH.STATUS },
          { item: 'Learn', path: PATH.LEARN },
        ],
      },
    ],
  },
];
