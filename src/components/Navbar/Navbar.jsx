import "./styles.css";

import LogoSneakers from '../../images/sneakers.png';

function Navbar() {
  return (
    <div>
      <img src={LogoSneakers} alt="Logo Sneakers" />
      <h1>Sneakers</h1>
      <div>
        <ul className="List-container">
            <li>
                <button>Hombre</button>
            </li>

            <li>
                <button>Mujer</button>
            </li>

            <li>
                <button>Nueva coleccion</button>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

