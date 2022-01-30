import {FC, useContext, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'
import '../../styles/pages/Products/Products.css';
import { ProductContext } from '../../app/Context';
import { fetchProducts } from '../../app/fetchProducts';

export const Products:FC = () => {
    const context = useContext(ProductContext);

    const handleFetch = (data: any) => {
        context?.getData(data)
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
    return(
        <>
             <div className="products-container">
                 {
                    context?.products ? 
                    context.products.map((item:any) => (
                        <ProductCard 
                            data={item}
                        />
                     )) 
                     :
                    <h1>Cargando...</h1>
                 }
             </div>
        </>
    )
}