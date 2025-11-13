import './NotFound.scss';
import acrLeft from '../../../../public/icons/notfound-arc-left.svg';
import acrRight from '../../../../public/icons/notfound-arc-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/shared/ui';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

const NotFound = async () => {
  return (
    <>
      <Header />
      <section className="notfound">
        <div className="notfound__wrapper">
          <div className="notfound__inner">
            <h1 className="notfound__title">404</h1>
            <div className="notfound__arc-left">
              <Image
                src={acrLeft}
                width={438}
                height={374}
                alt="acr-left"
                loading="eager"
              />
            </div>
            <div className="notfound__arc-right">
              <Image
                src={acrRight}
                width={438}
                height={374}
                alt="acr-right"
                loading="eager"
              />
            </div>
          </div>
          <p className="notfound__description">
            We&nbsp;couldn&rsquo;t find the page you were looking for!
          </p>
          <Link className="notfound__link" href="/">
            <Icon iconId="arrow-left" width={24} height={24} />
            Back to&nbsp;Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
