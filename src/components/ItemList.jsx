import Item from "./Item"
const ItemList = ({products}) =>{
    console.log ('productos en Itemlist', products)
    return(
        <div className="contenedorProductos">
        {products.map(product =>{
            return(
            <Item
                key = {product.id}
                titulo = {product.titulo}
                imagen = {product.imagen}
                descripcion = {product.descripcion}
                categoria = {product.categoria}
                precio = {product.precio}
                stock = {product.stock}
            />
            )
        })}
        </div>
        
    )
}


export default ItemList;