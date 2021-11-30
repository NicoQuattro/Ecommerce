 import { useState } from "react";
 import Button from 'react-bootstrap/Button';
import CartWidget from "./CartWidget";

const ItemCount =({stock, initial}) =>{

    const[count, setCount] = useState (initial);

    const incrementar = () => {
        const newValue = count + 1
        if (newValue <= stock){
            setCount (newValue)
        }

    }
    const decrementar = ()=>{
        const newValue = count - 1
        if (newValue >= 1){
            setCount (newValue)
        }
    }

 
    const onAdd = () => {
        alert(`agregastes ${count} productos al carrito`)
        CartWidget ({count})
        
    }

    return(
    <>

        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button onClick={decrementar} type="button" className="btn btn-secondary">-</button>
            <button type="button" className="btn btn-secondary disabled">{count}</button>
            <button onClick={incrementar} type="button" className="btn btn-secondary">+</button>
        </div>
        
        <button onClick={onAdd} type="button" class="btn btn-primary btn-lg btnAgregarCarrito">Agregar al carrito</button>

    </>
    )
}

export default ItemCount; 
