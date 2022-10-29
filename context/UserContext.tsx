import React, { ReactNode, useState } from 'react';

export interface UserProps {
  uid: string;
  email: string;
  photoURL: string;
}

export interface UserContextProps {
  user: UserProps;
  setUser: Function;
}

const Context = React.createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider(props: UserContextProviderProps) {
  const [user, setUser] = useState({} as UserProps);

  return (
    <Context.Provider value={{ user, setUser }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
