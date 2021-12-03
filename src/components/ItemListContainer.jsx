import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState } from "react";
import HandPromise from "../services/HandPromise";
import { useParams } from "react-router";

const ItemListContainer =({}) =>{
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        HandPromise
        .then (response =>{
            (id === undefined) ? setProducts(response) : setProducts(response.filter((prod) => prod.categoria == id))})
            
    },[id]);
return(
        <ItemList products={products}/>
);
};
export default ItemListContainer;
