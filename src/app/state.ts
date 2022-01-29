import { useEffect, useState } from "react";
import { fetchProducts } from "./fetchProducts";
import { IProducts } from "./interfaces";

export const useInitialState = () => {
    const [products, setProducts] = useState<IProducts[]>([{
            id:'',
            price:'',
            product:'',
            stock:0
    }])
    const handleFetch = (data: any) => {
        setProducts(data);
    }
    const handleError = (error: any) => {
        console.log(error)
    }

    useEffect(() => {
        fetchProducts(
            handleFetch,
            handleError
        )
    },[])
    
    return products
    
}