import { supabase } from '@/shared/api';
import type { SignUp } from '../models/schemas';

const signUp = async ({ formData }: { formData: SignUp }) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        ...formData,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
};

export default signUp;
