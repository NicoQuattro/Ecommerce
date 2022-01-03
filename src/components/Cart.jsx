import * as React from 'react';
import {useContext, useState } from 'react';
import {CartContext} from "../context/CartContext";
import { Link } from 'react-router-dom';
import { UseCart } from '../context/CartContext';
import { getFirestore, collection, doc, addDoc, updateDoc } from "firebase/firestore";



const Cart = () =>{

    const {addedProducts, removeItem, totalPrice, clear} = UseCart();
    console.log (addedProducts)

    const inputs = [
        {
          label: "Nombre y Apellido",
          name: "name"
        },
        {
          label: "Correo",
          name: "email"
        },
        {
          label: "Telefono",
          name: "phone"
        }
      ];
    
      const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        phone: ""
      });

      const updateDB = () => {
        const db = getFirestore();
        addedProducts.map((prod) => {
            updateDoc(doc(db, "items", `${prod.item.id}`), { Stock: prod.item.stock - prod.quantity })
          })
      }

      const onChange = (event) => {
        setFormFields({ ...formFields, [event.target.name]: event.target.value });
      };
      const [orderId, setOrderId] = useState();
    
      const db = getFirestore();

      const addOrderToDb = () => {
        var date = new Date();
        const orderCollection = collection(db, "Orders")
        const data =
        {
        buyer:
        {
            name: formFields.name,
            phone: formFields.phone,
            email: formFields.email
        },
        date: date,
        items: addedProducts,
        total: totalPrice()
        }
        addDoc(orderCollection, data).then((data) => {
        setOrderId(data.id)
        })

    }
    const handleFormSubmit = () => {
        addOrderToDb();
        updateDB();
        clear();
  }





    if (addedProducts.length > 0){
        return(
                <React.Fragment>
                {addedProducts.map((value) => (
                    <div className="cart_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            <li className="cart_item clearfix">
                                                
                                                <div className="cart_item_image"><img src={value.item.imagen} alt=""/></div>
                                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">

                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Titulo</div>
                                                        <div className="cart_item_text">{value.item.titulo}</div>
                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Cantidad</div>
                                                        <div className="cart_item_text">{value.quantity}</div>
                                                    </div>

                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title">Precio</div>
                                                        <div className="cart_item_text">${value.item.precio}</div>
                                                    </div>

                                                    
                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title"> </div>
                                                            <span onClick={() => removeItem(value.item.id)}> 
                                                        <div  className="cart_item_text trashHover"><i class="bi bi-trash"></i></div>
                                                        </span> 
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>



                ))}

                <div className="order_total">
                    <div className="order_total_content text-md-right">
                        <div className="order_total_title">Monto Total:</div>
                        <div className="order_total_amount">${totalPrice()}</div>
                    </div>
                </div>


                
                {inputs.map(({ name, label }) => (
                    <div>
                        <h5>{label}</h5>
                        <input className="inputStyle" 
                        value={formFields[name]} 
                        type="text"
                        onChange={onChange}
                        name={name}
                        />
                    </div>))}
                

                <div className="cart_buttons"> <Link to ='/'><button type="button" className="button cart_button_clear">Continuar Comprano</button></Link>  
                <button type="button" className="button cart_button_checkout" onClick={handleFormSubmit} >Realizar Orden</button> 
                </div>

               


                </React.Fragment>
            )


        }else{
            return (
                
                <React.Fragment>
                    {orderId !== undefined &&
                        alert ("Su orden se ha enviado el numero de orden es "+ JSON.stringify(orderId))
                    }

                    <h3 className="carritoVacio">todavia no tenes nada en el carrito!</h3>
                    <Link to ='/'>Ir al listado de productos</Link> 

                </React.Fragment>
            )}
        }
                
export default Cart;