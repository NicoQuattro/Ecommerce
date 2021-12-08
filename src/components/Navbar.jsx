import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar =() => {
    return(
        <nav className="navbar navBarStyle navbar-expand-lg navbar navbar-dark bg-primary " >
            <div className="container-fluid">
                <Link className="navbar-brand" to ="/"> Tienda</Link>
          
                    
                
                <form className=" inputText d-flex justify-content-center form-inline my-2 my-lg-0  ">
                    <input className="form-control  mr-sm-2 mx-auto" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-secondary botonBusqueda my-2 my-sm-0" type="submit">Buscar
                    </button>
                </form>

                
                

                <CartWidget />  
            </div>
      </nav>
    )
}

export default NavBar;