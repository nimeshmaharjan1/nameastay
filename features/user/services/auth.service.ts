import axios from 'axios';

export const signUp = async (data: { name: string; email: string; password: string }) => {
  try {
    await axios.post('/api/auth/sign-up', data);
  } catch (error) {
    throw error;
  }
};
