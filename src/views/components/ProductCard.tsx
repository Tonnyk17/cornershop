import {FC, useState} from 'react';
import '../../styles/components/ProductCard/ProductCard.css';
import { Button } from './Button';
import basket from '../../assets/basket.jpg';

type ProductCardProps = {
    image?: string;
    productName: string;
    price: string;
    id:string;
    stock: number;
}

export const ProductCard:FC<ProductCardProps> = ({image,productName,price,id,stock}) => {
    const [isBuy, setIsBuy] = useState<boolean>(false);
    return(
        <>
            <div className="product-card-container">
                <div className="product-image-container">
                    <img src={basket} alt="" />
                </div>
                <div className="product-info-container">
                   <h3>{productName}</h3>
                   <h2>{price}</h2>
                   <div className="info-short">
                       <p>Disponibles: {stock}</p>
                       <p>Id: {id}</p>
                   </div>
                </div>
                <div className="product-button-container">
                    {
                        !isBuy ? 
                        <Button content='Agregar 🛒' type='add' onClick={() => setIsBuy(true)}/> 
                        :
                        <div className='product-buttons-buy'>
                            <p>-</p>
                            <input type="number" name="" id="" />
                            <p>+</p>
                        </div>
                    }                
                </div>
            </div>
        </>
    )
}