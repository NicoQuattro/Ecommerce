import ItemCount from "./ItemCount";

const ItemListContainer =({tittle}) =>{
    return(
        <>
        <h3>{tittle}</h3>
        <ItemCount stock={9}  initial={1}/>
        </>
    )
}
export default ItemListContainer;
