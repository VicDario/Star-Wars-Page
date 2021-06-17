import './Navbar.css'
import logo from '../img/logo-stacked.png';

function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            <img className="navbar__logo" src ={logo} />
        </nav>
    );
}

export default Navbar;