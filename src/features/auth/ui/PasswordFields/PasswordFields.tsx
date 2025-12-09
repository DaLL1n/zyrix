import { Input } from '@/shared/ui';
import type { UseFormGetFieldState } from 'react-hook-form';

interface PasswordFieldsProps {
  mode: 'login' | 'sign-up';
  isLoading?: boolean;
  register?: any;
  errorMessages?: {
    password?: string;
    confirmPassword?: string;
  };
  watch?: (name: 'password' | 'confirmPassword') => any;
}

const PasswordFields = ({
  mode,
  isLoading,
  register,
  errorMessages,
  watch,
}: PasswordFieldsProps) => {
  const isSignUp = mode === 'sign-up';
  return (
    <>
      <Input
        type="password"
        placeholder="Password"
        disabled={isLoading}
        errorMessage={errorMessages?.password}
        autoComplete="new-password"
        suppressHydrationWarning={true}
        isValid={watch?.('password')?.length > 0}
        {...register?.('password')}
      />
      {isSignUp && (
        <Input
          type="password"
          placeholder="Confirm Password"
          disabled={isLoading}
          autoComplete="new-password"
          suppressHydrationWarning={true}
          errorMessage={errorMessages?.confirmPassword}
          isValid={watch?.('confirmPassword')?.length > 0}
          {...register?.('confirmPassword')}
        />
      )}
    </>
  );
};

export default PasswordFields;
