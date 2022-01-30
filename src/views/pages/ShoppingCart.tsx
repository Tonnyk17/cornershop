import {FC, useContext} from 'react'
import { ProductContext } from '../../app/Context'

export const ShoppingCart:FC = () => {
    const context = useContext(ProductContext)
    console.log(context?.shoppingCart)
    return(
        <>
            <div className="cart-container">
            {
                context?.shoppingCart.map((item:any) => (
                    <div className="item-container">
                        
                    </div>
                ))
            }
            </div>
        </>
    )
}