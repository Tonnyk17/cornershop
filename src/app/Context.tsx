import { createContext, FC, useContext, useState } from "react";
import { IShoppingCart } from "./interfaces";


type ProductContentType = {
    products: any;
    shoppingCart: any;
    getData: (payload: any) => void;
    addCart: (payload: any) => void;
}

export const ProductContext =  createContext<ProductContentType | null>(null)

export const ProductsProvider:FC = ({children}) => {
    const [products, setProducts] = useState()
    const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([])
    const getData = (payload: any) => {
        setProducts(payload)
    }
    const addCart = (payload: any) => {
        setShoppingCart([...shoppingCart,payload])
    }
    return(
        <>
            <ProductContext.Provider value={{products,getData,addCart, shoppingCart}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}