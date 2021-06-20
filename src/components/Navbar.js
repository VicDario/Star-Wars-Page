import './Navbar.css'
import logo from '../img/logo-stacked.png';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
            <Link to='/'>
            <img className="navbar__logo" src ={logo} alt="Logo" />
            </Link>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-white" href="#">Action</a></li>
            <li><a className="dropdown-item text-white" href="#">Another action</a></li>
            <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
          </ul>
        </li>
        </nav>
    );
}

export default Navbar;