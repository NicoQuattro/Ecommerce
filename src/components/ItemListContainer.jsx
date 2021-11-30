import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState } from "react";
import axios from "axios";

const ItemListContainer =({tittle}) =>{
    const [products, setProducts] = useState([])
    console.log('los productos que estan en el hook', products)

const getProductsAxios = async () =>{
    const getAxios = await axios.get("../JSON/data.json");
    const responseAxios = getAxios.data;
    setProducts(responseAxios);
};

useEffect(() =>{
    setTimeout(() => getProductsAxios(), 1000);
}, []);

return(
    <>
        <h3>{tittle}</h3>
        <ItemList products={products}/>
    </>
);
};
export default ItemListContainer;
