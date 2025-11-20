import styles from './Button.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  className?: string;
  maxWidth?: number;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({
  children,
  variant,
  type = 'button',
  onClick,
  href,
  className,
  ref,
  ...props
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles.button,
    variant && styles[`button--${variant}`],
    className,
  );

  if (href) {
    return (
      <Link className={buttonClasses} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
