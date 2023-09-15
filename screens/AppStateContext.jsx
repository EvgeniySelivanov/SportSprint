import React, { createContext, useContext, useState } from 'react';

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [vibration, setVibration] = useState(false);

  const updateQuantity = (newData) => {
    setQuantity(newData);
  };
  const updateVibration = (newData) => {
    setVibration(newData);
  };
  const contextValue = {
    quantity: quantity,
    vibration:vibration,
    updateQuantity: updateQuantity,
    updateVibration:updateVibration,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};
