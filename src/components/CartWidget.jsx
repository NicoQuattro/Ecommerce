import {Link} from "react-router-dom";


const CartWidget =(props) =>{
    const {count} = props;

    return(
        
        <ul className="navbar-nav mr-auto iconCart">
                <span id="contador" className="position-relative h-50 top-0 start-100 translate-middle badge rounded-circle bg-danger">5</span>
                <Link className="nav-item" to ="/cart" ><a className="nav-link" href=""><i className="bi bi-cart2"></i></a></Link>
        </ul>

    )
}
export default CartWidget;

