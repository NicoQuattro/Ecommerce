import * as React from 'react';
import {useContext, useState } from 'react';
import {CartContext} from "../context/CartContext";
import { Link } from 'react-router-dom';
import { UseCart } from '../context/CartContext';
import { getFirestore, collection, doc, addDoc, updateDoc } from "firebase/firestore";



const Cart = () =>{

    const {addedProducts, removeItem, totalPrice} = UseCart();

    const {cart} = useContext(CartContext);
    console.log (addedProducts)







    if (addedProducts.length > 0){
        return(
                <React.Fragment>
                {addedProducts.map((value) => (
                    <div className="cart_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            <li className="cart_item clearfix">
                                                
                                                <div className="cart_item_image"><img src={value.item.imagen} alt=""/></div>
                                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">

                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Titulo</div>
                                                        <div className="cart_item_text">{value.item.titulo}</div>
                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Cantidad</div>
                                                        <div className="cart_item_text">{value.quantity}</div>
                                                    </div>

                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title">Precio</div>
                                                        <div className="cart_item_text">${value.item.precio}</div>
                                                    </div>

                                                    
                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title"> </div>
                                                            <span onClick={() => removeItem(value.item.id)}> 
                                                        <div  className="cart_item_text trashHover"><i class="bi bi-trash"></i></div>
                                                        </span> 
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>



                ))}

                <div className="order_total">
                    <div className="order_total_content text-md-right">
                        <div className="order_total_title">Monto Total:</div>
                        <div className="order_total_amount">${totalPrice()}</div>
                    </div>
                        </div>
                    <div className="cart_buttons"> <Link to ='/'><button type="button" className="button cart_button_clear">Continuar Comprano</button></Link>  
                    <button type="button" className="button cart_button_checkout">Proceder al Pago</button> 
                </div>

                </React.Fragment>
            )


        }else{
            return (
                <React.Fragment>
                
                <h3 className="carritoVacio">todavia no tenes nada en el carrito!</h3>
                <Link to ='/'>Ir al listado de productos</Link> 

                </React.Fragment>
            )}
        }
export default Cart;