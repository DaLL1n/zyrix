import { useMutation } from '@tanstack/react-query';
import loginUser from '../api/loginUser';
import signUp from '../api/signUp';
import type { Login, SignUp } from './schemas';

type Mode = 'login' | 'sign-up';

const useAuth = (mode: Mode) => {
  return useMutation({
    mutationKey: ['auth', mode],
    mutationFn: async (data: Login | SignUp) => {
      if (mode === 'login') {
        return loginUser({ formData: data as Login });
      } else {
        return signUp({ formData: data as SignUp });
      }
    },
  });
};

export default useAuth;
