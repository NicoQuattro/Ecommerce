import {useContext, useState } from 'react';
import {CartContext} from "../context/CartContext";

const Cart = () =>{
    const {cart} = useContext(CartContext);
    console.log (cart)
    return (
        <>
        <h1>Este seria el carrito </h1>
        </>
    )
}

export default Cart;