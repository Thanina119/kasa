
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <img src={logo} alt="Kasa" className="header-logo" />

                <nav className="header-nav">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </nav>
            </div>

        </header>
    )
}
export default Header;