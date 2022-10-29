import { useContext, useEffect } from 'react';
import UserContext from '@context/UserContext';
import { onAuthStateChange } from '@firebase/client';

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => onAuthStateChange(setUser), []);

  return { user };
};