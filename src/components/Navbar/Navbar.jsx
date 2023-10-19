import "./styles.css";
import CarWidget from "../CartWidget/Cartwidget";
import LogoSneakers from '../../images/sneakers.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={LogoSneakers} alt="Logo Sneakers" width="200px" />
      
      <div>
        <ul className="list-container">
            <li>
                <button className="category-button">Hombre</button>
            </li>

            <li>
                <button className="category-button">Mujer</button>
            </li>

            <li>
                <button className="category-button">Nueva coleccion</button>
            </li>
        </ul>
      </div>
      <CarWidget />
    </div>
  );
}

export default Navbar;

