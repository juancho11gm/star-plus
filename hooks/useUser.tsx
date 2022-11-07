import { useContext, useEffect } from 'react';
import UserContext from '@context/UserContext';
import { onAuthStateChange } from '@firebase/client';

const useUser = () => {
  const { user, setUser, isLoading, setIsLoading } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChange(setUser, () => setIsLoading(false));
  }, [setIsLoading, setUser]);

  return { user, isLoading };
};

export { useUser };
