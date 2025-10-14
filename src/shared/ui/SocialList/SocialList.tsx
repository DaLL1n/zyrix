import Link from 'next/link';
import React from 'react';
import Icon from '../Icon/Icon';
import './SocialList.scss';

interface SocialListProps {
  itemsList: {
    iconId: string;
    link: string;
  }[];
}

const SocialList = ({ itemsList }: SocialListProps) => {
  return (
    <ul className="social-list">
      {itemsList.map((item) => (
        <li className="social-list__item" key={item.link}>
          <Link className="social-list__link" href={item.link}>
            <Icon iconId={item.iconId} width={24} height={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
