import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState } from "react";
import HandPromise from "../services/HandPromise";
import { useParams } from "react-router";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";



const ItemListContainer =({}) =>{
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        if (id === undefined) {
          getDocs(itemsCollection).then(snapshot => {
    
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          })
        } else {
          let q = query(itemsCollection, where("categoria", "==", id));
          getDocs(q).then(snapshot => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
        }
      }, [id]);
return(
        <ItemList products={products}/>
);
};
export default ItemListContainer;
