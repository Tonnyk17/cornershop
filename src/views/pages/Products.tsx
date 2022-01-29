import {FC} from 'react'
import { ProductCard } from '../components/ProductCard'


export const Products:FC = () => {
    return(
        <>
             <div className="products-container">
                 <ProductCard/>
             </div>
        </>
    )
}