import { Input } from '@/shared/ui';

interface PasswordFieldsProps {
  mode: 'login' | 'sign-up';
  isLoading?: boolean;
  register?: any;
  errorMessages?: {
    password?: string;
    confirmPassword?: string;
  };
}

const PasswordFields = ({
  mode,
  isLoading,
  register,
  errorMessages,
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
        {...register?.('password')}
      />
      {isSignUp && (
        <Input
          type="password"
          placeholder="Confirm Password"
          disabled={isLoading}
          autoComplete="new-password"
          errorMessage={errorMessages?.confirmPassword}
          {...register?.('confirmPassword')}
        />
      )}
    </>
  );
};

export default PasswordFields;
