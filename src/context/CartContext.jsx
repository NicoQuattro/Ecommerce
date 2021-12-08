import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState("hola");
    //const value = {cart, setCart}
    return (
        <CartContext.Provider value = {cart}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;