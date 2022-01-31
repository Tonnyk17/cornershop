import { FC, useContext, useState } from "react";
import '../../styles/components/Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { faBars,faHome,faShoppingBag,faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from "../../app/Context";

export const NavBar:FC = () => {
    const history = useNavigate();
    const [isClosed, setIsClosed] = useState<boolean>(true)
    const context = useContext(ProductContext);
    const handleClick = (e:any) => {
        setIsClosed(!isClosed)
        console.log(e.target.value)
    }
    const handleNavigate = (route:string) => {
        history(route)
        setIsClosed(true)
    }
    return(
        <>
            <header className="navbar-container">
                <h2 onClick={() => history("")}>Cornershop</h2>
                <div className="navbar-list-container">
                    <input 
                        type="checkbox" 
                        name="menu-button-checkbox" 
                        id='menu-button-checkbox'
                        onClick={handleClick}
                    />
                    <label htmlFor="menu-button-checkbox">
                        {
                            !isClosed ?
                            <FontAwesomeIcon icon={faTimesCircle} size='2x'/>
                            :
                            <FontAwesomeIcon icon={faBars} size='2x'/>
                        }
                    </label>
                    <ul className="navbar-list" style={{'left': isClosed ? '-100%': 0 }}>
                        <li onClick={() => handleNavigate("")}>
                            <FontAwesomeIcon icon={faHome} /> Inicio 
                        </li>
                        <li onClick={() => handleNavigate("productos")}>
                            <FontAwesomeIcon icon={faShoppingBag} /> Productos
                        </li>
                        <li onClick={() => handleNavigate("carrito-de-compras")}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Carrito
                            <span>{context?.shoppingCart.length}</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}