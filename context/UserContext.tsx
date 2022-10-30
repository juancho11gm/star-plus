import React, { ReactNode, useState } from 'react';

export interface UserProps {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface UserContextProps {
  user: UserProps;
  setUser: Function;
  isLoading: boolean;
  setIsLoading: Function;
}

const Context = React.createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider(props: UserContextProviderProps) {
  const [user, setUser] = useState({} as UserProps);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Context.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
