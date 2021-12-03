import { createContext } from 'react';

export const CartContextProvider = createContext();

export const CartContextProvider = ({children}) => {
    return <CartContext.Provider value={{}}>
                {children}
           </CartContext.Provider>
};