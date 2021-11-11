import { useState } from "react";

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
    }

    return(
    <>
        <div>
            <button onClick={decrementar}>-</button>
            <h3>{count}</h3>
            <button onClick={incrementar}>+</button>
        </div>
        <button onClick={onAdd}>agregar al carrito</button>
    </>
    )
}
export default ItemCount;