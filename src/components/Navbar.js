import "./Navbar.css";
import logo from "../img/logo-stacked.png";
import { useContext } from "react";
import { Context } from "../stores/AppContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

	const { store, actions } = useContext(Context);
	const { favorites } = store;

    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites<span className="number-favorites">{favorites.length}</span>
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    {/* <li>
                        <a className="dropdown-item text-white" href="#">
                            example for item
                        </a>
                    </li> */}
				{
					favorites.length > 0 ?
					favorites.map((item, key) =>{
						return (
						<li className="dropdown-item text-white d-flex justify-content-between align-items-center" key={key}>
                            	{item} <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => actions.deleteFavorite(item)} />
                    	</li>);
					}) : (
						<li className="dropdown-item text-white d-flex justify-content-between align-items-center">
							Empty
                    	</li>
					)

				}
                </ul>
            </li>
        </nav>
    );
}

export default Navbar;
