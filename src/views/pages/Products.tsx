import {FC, useContext, useReducer} from 'react'
import { AppContext } from '../../app/AppContext'
import { ProductCard } from '../components/ProductCard'
import '../../styles/pages/Products/Products.css';

export const Products:FC = () => {
    const {products} = useContext(AppContext);
   

    return(
        <>
             <div className="products-container">
                 {
                    products.map((item:any) => (
                        <ProductCard 
                            data={item}
                        />
                     ))
                 }
             </div>
        </>
    )
}