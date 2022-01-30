import { createContext, FC, useState } from "react";
import { IProducts, IShoppingCart } from "./interfaces";


type ProductContentType = {
    products: any;
    shoppingCart: any;
    getData: (payload: any) => void;
    addCart: (payload: any) => void;
    removeCart: (payload: any,amount: string) => void;
}

export const ProductContext =  createContext<ProductContentType | null>(null)

export const ProductsProvider:FC = ({children}) => {
    const [products, setProducts] = useState<IProducts[]>([])
    const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([])
    const getData = (payload: any) => {
        setProducts(payload)
    }
    const addCart = (payload: any) => {
        const findProduct = shoppingCart.find((product: any) => product.data.id === payload.data.id)
        if(findProduct){
            const newProduct = Number(findProduct.cart) + Number(payload.cart)
            findProduct.cart = newProduct
            const newCart = shoppingCart.map((item: any) => item.data.id === findProduct.id ? findProduct : item)
            setShoppingCart(newCart)
        }
        else{
            setShoppingCart([...shoppingCart,payload])
        }
    }

    const removeCart = (payload: any, amount: string) => {
        const findProduct = products.find((product: any) => product.id === payload)
        if(findProduct){
            const newStock = Number(findProduct.stock) + Number(amount);
            findProduct.stock = newStock
            const newProduct = products.map((item: any) => item.id === findProduct.id ? findProduct : item )
            setProducts(newProduct)
        }
       const filterProducts = shoppingCart.filter((product:any) => product.data.id !== payload)
       setShoppingCart(filterProducts)
    }
    
    return(
        <>
            <ProductContext.Provider 
                value={{products,getData,addCart, shoppingCart, removeCart}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}