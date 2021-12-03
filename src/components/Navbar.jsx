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