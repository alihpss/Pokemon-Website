import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const HeaderColor = createContext('');

export default function HeaderColorProvider({ children }) {
  const [color, setColor] = useState('');

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  const contextValue = useMemo(() => ({ color, updateColor }), [color]);

  return (
    <HeaderColor.Provider value={contextValue}>
      {children}
    </HeaderColor.Provider>
  );
}

HeaderColorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
