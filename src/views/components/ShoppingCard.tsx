import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC} from 'react'
import basket from '../../assets/basket.jpg';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/ShoppingCard/ShoppingCard.css'
import { Button } from './Button';

type ShoppingCardProps = {
    product: string;
    price: string;
    id: string;
    amount: string;
    stock: number;
}

export const  ShoppingCard:FC<ShoppingCardProps> = ({
    product,
    price,
    id,
    amount,
    stock
}) => {
    return(
        <>
            <div className="card-container">
                <img src={basket} alt={product} />
                <div className="data-container">
                    <div className="span-container">
                        <span>Cantidad: {amount}</span>
                        <span className='trash'><FontAwesomeIcon icon={faTrash}/></span>
                    </div>
                    <h3>{product}</h3>
                    <h2>{price}</h2>
                    <div className="details-container">
                        <p className="stock">Stock: {stock}</p>
                        <p className="id">Id: {id}</p>
                    </div>
                    
                </div>

                <div className="product-button-container">       
                    <Button content='Actualizar 🛒' type='add' onClick={() => {}}/> 
                    <input 
                            type="number" 
                            onChange={() => {}}  
                            placeholder='0'
                        />                 
                    </div>
            </div>
        </>
    )
}