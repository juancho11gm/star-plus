import { useContext } from 'react';
import UIContext from '@context/UIContext';

const useHeaderVisible = () => {
  const UIContextData = useContext(UIContext);
  const { isHeaderVisible } = UIContextData || {};
  return { isHeaderVisible };
};

export { useHeaderVisible };
