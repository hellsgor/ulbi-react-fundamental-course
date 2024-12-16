import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthContext.Provider');
  }

  return authContext;
};
