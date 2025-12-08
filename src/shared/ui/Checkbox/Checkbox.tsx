'use client';
import styles from './Checkbox.module.scss';
import React from 'react';
import clsx from 'clsx';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
  errorMessage?: string;
}

const Checkbox = ({
  className,
  label,
  register,
  errorMessage,
  ...props
}: CheckboxProps) => {
  return (
    <div
      className={clsx(styles['custom-checkbox'], {
        [styles['custom-checkbox--error']]: !!errorMessage,
      })}
    >
      <label className={clsx(styles['custom-checkbox__label'], className)}>
        <input
          type="checkbox"
          className={clsx('visually-hidden', styles['custom-checkbox__field'])}
          name={label}
          {...props}
          {...register('terms')}
        />
        <span className={styles['custom-checkbox__box']} />
        {label && (
          <span className={styles['custom-checkbox__text']}>{label}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
