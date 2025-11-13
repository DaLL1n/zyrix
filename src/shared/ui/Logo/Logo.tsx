import './Logo.scss';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  purpose: 'header' | 'footer' | 'auth';
  width: number;
  height: number;
}

const Logo = ({ purpose = 'header', height, width }: LogoProps) => {
  const isHeader = purpose === 'header';

  return (
    <Link
      className={`logo-link logo-link--${purpose}`}
      href="/"
      aria-label="back to home"
      title="back to home"
    >
      <Image
        src={`/icons/icon-${purpose}-logo.svg`}
        width={width}
        height={height}
        alt="Zyrix"
        priority={isHeader}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
