import type { Login } from '../models/schemas';
import { supabase } from '@/shared/api';

const loginUser = async ({ formData }: { formData: Login }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw error;
  }

  return data;
};

export default loginUser;
