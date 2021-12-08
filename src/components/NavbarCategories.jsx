
import {Link} from "react-router-dom";

const NavbarCategories =() => {
    return(
        <nav className="navbar navBarCategoryStyle navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">


            <div className="navbar-nav mx-auto">

                <Link className="nav-link" to ="/category/electrodomesticos"> Electrodomesticos </Link>
                <Link className="nav-link" to ="/category/tecnologia"> Tecnologia </Link>
              
            </div>

        </div>
        </nav>
    )
}

export default NavbarCategories;