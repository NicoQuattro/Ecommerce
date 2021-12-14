import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import {CartContext} from "../context/CartContext"
import { UseCart } from '../context/CartContext';

const ItemDetail = ({item}) =>{

    const {addItem, removeItem} = UseCart();
    const[quantity, setQuantity]= useState(0);



    useEffect(() => {
        if (quantity > 0){
            addItem(item, quantity); 
        }
         
    },[quantity])

    
    return(
            <div className="card mb-3 containerItemDetail">
            <div className="row g-0 cardDetail">
                <div className="col-md-4">
                <img src={item.imagen} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.titulo}</h5>
                    <h5 className="card-text ">${item.precio}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <ItemCount stock={item.stock} initial={1} setQuantity={setQuantity}/>


                </div>
                </div>
            </div>
            </div>

    );
};
export default ItemDetail;
