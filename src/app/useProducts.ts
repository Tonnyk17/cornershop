import { useContext } from "react";
import { AppContext } from "./AppContext";



export const useProducts = () => {
    const { products, shoppingCart} = useContext(AppContext)
    
    
    return {
        products,
        shoppingCart,
    }
    
}