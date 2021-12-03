
import {Link} from "react-router-dom";

const NavbarCategories =() => {
    return(
        <nav className="navbar navBarCategoryStyle navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">

                <Link className="nav-link" to ="/category/electrodomesticos"> Electrodomesticos </Link>
                <Link className="nav-link" to ="/category/tecnologia"> Tecnologia </Link>
              
            </div>
            </div>
        </div>
        </nav>
    )
}

export default NavbarCategories;