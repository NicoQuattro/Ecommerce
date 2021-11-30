const CartWidget =(props) =>{
    const {count} = props;

    return(
        
        <ul className="navbar-nav mr-auto">
           
            <span id="contador" className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">5</span>
            <li className="nav-item"><a className="nav-link" href=""><i className="bi bi-cart2"></i></a></li>
            <li className="nav-item"><a className="nav-link" href=""><i className="bi bi-person"></i></a></li>

        </ul>

    )
}
export default CartWidget;

