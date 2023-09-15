import React, { createContext, useContext, useState } from 'react';
import { CONSTANTS } from '../constants';
export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(CONSTANTS.INDIANS_QUANTITY);
  const [vibration, setVibration] = useState(CONSTANTS.GAME_VIBRO);

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
