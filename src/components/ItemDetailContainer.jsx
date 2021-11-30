import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import HandPromise from "../services/HandPromise"


const ItemDetailContainer = () =>{
    const [item, setItem] = useState ({});
    const {id} = useParams(); // captura el id del producto
    
    console.log("id de use params",id)

    useEffect(() =>{
        HandPromise.then((res) =>{
            setItem(res.find((prod)=> prod.id === parseInt(id)));
        });
    }, [id]);
    return <ItemDetail item={item}/>;
};

export default ItemDetailContainer