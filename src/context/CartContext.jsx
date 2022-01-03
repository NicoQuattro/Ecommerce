import React from "react";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const UseCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
    
    const [addedProducts, setAddedProducts] = useState([]);

    const addItem = (item, quantity) => { 
        setAddedProducts(addedProducts.filter(item => item !== undefined ))
        if(isInCart(item.id)){
         
            let index =  addedProducts.findIndex((prod) => prod.item.id === item.id)
            let PosibleQuantity = addedProducts[index].quantity + quantity;
         
            if(PosibleQuantity < item.stock){
                
                addedProducts[index].quantity = PosibleQuantity
        
            }  else{
                alert(`El nuemero de productos (${PosibleQuantity})que estas intentando agregar supera el stock`);
            }
        }else{
        setAddedProducts([...addedProducts,{item, quantity}]);
        }
    }

    const removeItem = (id) =>{
        setAddedProducts(addedProducts.filter(item => item.item.id !== id ))
    }

    const clear =() =>{
        setAddedProducts([]);
    }

    const isInCart = (id) =>{
        let boolean = false;

        addedProducts.map(product =>{
       if(product.item.id === id)  
            boolean = true;
        });
    return boolean;
    }

    const sumatoryWidget = () =>{
        let aux = 0;
        addedProducts.map(item => {aux = aux + item.quantity})
        return aux;
    }

    const totalPrice = () => { 
        let aux = 0;
           addedProducts.map(item =>{
            aux = aux + (item.item.precio * item.quantity) ;
       
           }  )
           return aux;
    }


    return (
        <CartContext.Provider value = {{addedProducts, addItem, removeItem, sumatoryWidget, totalPrice, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;