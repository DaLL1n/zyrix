import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { loginSchema, signUpSchema } from './schemas';

const useAuthForm = <T extends Record<string, any> = Record<string, any>>(
  mode: 'login' | 'sign-up',
): UseFormReturn<T> => {
  const schemas = mode === 'login' ? loginSchema : signUpSchema;

  const methods = useForm<T>({
    resolver: zodResolver(schemas) as any,
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  return methods;
};

export default useAuthForm;
