import {FC, useContext} from 'react';
import { ProductContext } from '../../app/Context';
import { ShoppingCard } from '../components/ShoppingCard';
import '../../styles/pages/ShoppingCart/ShoppingCart.css';

export const ShoppingCart:FC = () => {
    const context = useContext(ProductContext)
    console.log(context?.shoppingCart)
    return(
        <>
            <div className="cart-container">
            {
                context?.shoppingCart.length > 0
                ? 
                context?.shoppingCart.map((item:any) => (
                    <div className="item-container">
                        <ShoppingCard
                            product={item.data.product}
                            price={item.data.price}
                            id={item.data.id}
                            amount={item.cart}
                            stock={item.data.stock}
                        />
                    </div>
                ))
                :
                <div className="cart-message">
                    <h1>El carrito está vacío</h1>
                </div>
            }
            </div>
        </>
    )
}