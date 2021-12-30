import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import HandPromise from "../services/HandPromise"
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState ({});
    const {id} = useParams(); // captura el id del producto
    
    console.log("id de use params",id)

    useEffect(() => {
        const db = getFirestore();
    
        const docRef = doc(db, "items", id);
        getDoc(docRef).then((snapshot) => {
    
          setItem({ id: snapshot.id, ...snapshot.data() })
    
        })
      }, [])
    return <ItemDetail item={item}/>;
};

export default ItemDetailContainer