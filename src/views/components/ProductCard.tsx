import {FC, useState} from 'react';
import '../../styles/components/ProductCard/ProductCard.css';
import { Button } from './Button';
import basket from '../../assets/basket.jpg';

type ProductCardProps = {
    image?: string;
}

export const ProductCard:FC<ProductCardProps> = ({image}) => {
    const [isBuy, setIsBuy] = useState<boolean>(false);
    return(
        <>
            <div className="product-card-container">
                <div className="product-image-container">
                    <img src={basket} alt="" />
                </div>
                <div className="product-info-container">
                   <h3>Aqui va el nombre</h3>
                   <h2>$10</h2>
                   <div className="info-short">
                       <p>Disponibles: 10</p>
                       <p>id: 1009029039</p>
                   </div>
                </div>
                <div className="product-button-container">
                    {
                        !isBuy ? 
                        <Button content='Agregar 🛒' type='add' onClick={() => setIsBuy(true)}/> 
                        :
                        <div className='product-buttons-buy'>
                            <p>-</p>
                            <input type="text" name="" id="" />
                            <p>+</p>
                        </div>
                    }                
                </div>
            </div>
        </>
    )
}