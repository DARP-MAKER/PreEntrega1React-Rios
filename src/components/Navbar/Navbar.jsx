import { Link } from "react-router-dom";
import "../Styles/Styles.css";
import CarWidget from "../CartWidget/Cartwidget";
import LogoSneakers from '../../images/sneakers.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={LogoSneakers} alt="Logo Sneakers" width="200px" />
      
      <nav>
        <ul className="list-container">
            <li>
                <Link to={ "/category/Hombre"} className="navbar-button">
                  Hombre 
                </Link>
            </li>

            <li>
                <Link to={ "/category/Mujer"} className="navbar-button">
                  Mujer 
                </Link>
            </li>

            <li>
                <Link to={ "/category/Nueva coleccion"} className="navbar-button">
                  Nueva coleccion
                </Link>
            </li>
        </ul>
      </nav>
      <CarWidget />
    </div>
  );
}

export default Navbar;

