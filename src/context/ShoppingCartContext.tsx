/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProvider = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProvider) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
