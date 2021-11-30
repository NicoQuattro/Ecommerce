import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar =() => {
    return(
        <nav className="navbar navBarStyle navbar-expand-lg navbar navbar-dark bg-primary " >
            <div className="container-fluid">
                <Link className="navbar-brand" to ="/"> Tienda</Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                
                <form className=" d-flex justify-content-center form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                
                </div>

                <CartWidget />  
            </div>
      </nav>
    )
}

export default NavBar;