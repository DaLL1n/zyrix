'use client';
import { Checkbox, Input, Logo } from '@/shared/ui';
import { memo, useEffect, useState } from 'react';
import AuthFormLayout from './AuthFormBase/AuthFormLayout';
import {
  AuthMethodToggle,
  mapAuthErrors,
  NameFields,
  PasswordFields,
  useAuth,
  useAuthForm,
  type SignUp,
} from '@/features/auth';
import { capitalize } from '@/shared/lib';
import { AUTH_TEXTS } from '../model/constants';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  mode: 'login' | 'sign-up';
}

const AuthForm = memo(({ mode }: AuthFormProps) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const methods = useAuthForm<SignUp>(mode);
  const { mutate, error, isError, isPending, isSuccess } = useAuth(mode);
  const router = useRouter();

  const onSubmit = (data: SignUp) => {
    const { terms, confirmPassword, ...rest } = data;
    const formatted = {
      ...rest,
      name: capitalize(data.name),
      surname: capitalize(data.surname),
    };
    mutate(formatted);
  };

  useEffect(() => {
    if (isSuccess) {
      if (mode === 'login') {
        router.push('/market');
      } else {
        router.push('/login');
      }
    }
  }, [isSuccess]);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = methods;

  const isSignUp = mode === 'sign-up';
  const isEmail = authMethod === 'email';

  const errorsFields = mapAuthErrors(errors);
  const authError = isError ? error : '';

  return (
    <>
      <Logo purpose="auth" width={132} height={60} />
      <AuthMethodToggle authMethod={authMethod} onClick={setAuthMethod} />
      <AuthFormLayout
        mode={mode}
        onSubmit={handleSubmit(onSubmit)}
        authError={authError}
        isErrorFields={isValid}
        isLoading={isPending}
      >
        {isSignUp && (
          <NameFields
            register={register}
            errorMessages={errorsFields.initials}
            watch={watch}
            isLoading={isPending}
          />
        )}
        {isEmail && (
          <Input
            type="email"
            placeholder="Email Address"
            errorMessage={errorsFields.email}
            autoComplete="email"
            isValid={watch?.('email')?.length > 0}
            disabled={isPending}
            {...register('email')}
          />
        )}
        {/* {isPhone && <PhoneFields values={formData} />} */}
        <PasswordFields
          mode={mode}
          register={register}
          errorMessages={errorsFields.password}
          watch={watch}
          isLoading={isPending}
        />
        {isSignUp && (
          <Checkbox
            label={AUTH_TEXTS['sign-up']['terms-label']}
            register={register}
            errorMessage={errorsFields.terms}
          />
        )}
      </AuthFormLayout>
    </>
  );
});

export default AuthForm;
