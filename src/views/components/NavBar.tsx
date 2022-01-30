import { FC, useContext } from "react";
import '../../styles/components/Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { faBars,faHome,faShoppingBag,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from "../../app/Context";

export const NavBar:FC = () => {
    const history = useNavigate();
    const context = useContext(ProductContext);
    return(
        <>
            <header className="navbar-container">
                <h2 onClick={() => history("")}>Cornershop</h2>
                <div className="navbar-list-container">
                    <input 
                        type="checkbox" 
                        name="menu-button-checkbox" 
                        id='menu-button-checkbox'
                    />
                    <label htmlFor="menu-button-checkbox">
                        <FontAwesomeIcon icon={faBars} size='2x'/>
                    </label>
                    <ul className="navbar-list">
                        <li onClick={() => history("")}>
                            <FontAwesomeIcon icon={faHome} /> Inicio 
                        </li>
                        <li onClick={() => history("productos")}>
                            <FontAwesomeIcon icon={faShoppingBag} /> Productos
                        </li>
                        <li onClick={() => history("carrito-de-compras")}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Carrito
                            <span>{context?.shoppingCart.length}</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}