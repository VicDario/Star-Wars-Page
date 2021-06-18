import './Navbar.css'
import logo from '../img/logo-stacked.png';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            <Link to='/'>
            <img className="navbar__logo" src ={logo} alt="Logo" />
            </Link>
        </nav>
    );
}

export default Navbar;