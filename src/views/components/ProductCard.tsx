import {FC, useContext, useEffect, useLayoutEffect, useReducer, useState} from 'react';
import '../../styles/components/ProductCard/ProductCard.css';
import { Button } from './Button';
import basket from '../../assets/basket.jpg';
import { IProducts } from '../../app/interfaces';
import { ProductContext } from '../../app/Context';

type ProductCardProps = {
    image?: string;
    data: IProducts,
}

export const ProductCard:FC<ProductCardProps> = ({image,data}) => {
    const [isBuy, setIsBuy] = useState<boolean>(false);
    const context = useContext(ProductContext)
    const [productsCounter, setProductsCounter] = useState<number>(0);

    const handleClick = () => {
        if(data.stock < productsCounter){
            alert('No hay stock suficiente');
        }
        else if(productsCounter <= 0){
            alert('No has elegido cuantas piezas agregar')
        }
        else{
            data.stock -= productsCounter
            context?.addCart({
                data,
                cart: productsCounter
            })
        }

    }
   const handleChange = (e:any) => {
       if(e.target.value < 0){
           e.target.value = 0
       }
       setProductsCounter(e.target.value)   
   }


   useEffect(() => {
    if(data.stock <= 0)
    {
        data.stock= 0
        setIsBuy(true)
    }
   },[data, data.stock])
    

    return(
        <>
            <div className={`product-card-container ${isBuy ? 'product-out' : ''}`}>
                <div className="product-image-container">
                    <img src={basket} alt="" />
                </div>
                <div className="product-info-container">
                   <h3>{data.product}</h3>
                   <h2>{data.price}</h2>
                   <div className="info-short">
                       <p>Disponibles: {data.stock}</p>
                       <p>Id: {data.id}</p>
                   </div>
                </div>
                {
                    isBuy ? 
                    <h1>AGOTADO</h1>
                    :
                    <div className="product-button-container">       
                    <Button content='Agregar 🛒' type='add' onClick={handleClick}/> 
                    <input 
                            type="number" 
                            onChange={handleChange}  
                            placeholder='0'
                        />                 
                    </div>
                }
            </div>
        </>
    )
  
}