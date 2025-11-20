'use client';
import { Logo } from '@/shared/ui';
import { memo, useState } from 'react';
import AuthMethodToggle from '@/features/auth/ui/AuthMethodToggle/AuthMethodToggle';
import AuthFormBase from './AuthFormBase/AuthFormBase';
import { usePathname } from 'next/navigation';

interface AuthFormProps {
  mode: 'login' | 'sign-up';
}

const AuthForm = memo(({ mode }: AuthFormProps) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');

  return (
    <>
      <Logo purpose="auth" width={132} height={60} />
      <AuthMethodToggle authMethod={authMethod} onClick={setAuthMethod} />
      <AuthFormBase mode={mode} />
    </>
  );
});

export default AuthForm;
