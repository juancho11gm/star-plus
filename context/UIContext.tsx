import React, { ReactNode, useState } from 'react';

export interface UIContextProps {
  isHeaderVisible: boolean;
  setIsHeaderVisible: Function;
}

const Context = React.createContext({} as UIContextProps);

interface UIContextProviderProps {
  children: ReactNode;
}

export function UIContextProvider(props: UIContextProviderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    <Context.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
