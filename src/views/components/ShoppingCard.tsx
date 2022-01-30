import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC, useContext, useState} from 'react'
import basket from '../../assets/basket.jpg';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/ShoppingCard/ShoppingCard.css'
import { Button } from './Button';
import { ProductContext } from '../../app/Context';
import { IShoppingCart } from '../../app/interfaces';

type ShoppingCardProps = {
    data: IShoppingCart
    cart: string
}

export const  ShoppingCard:FC<ShoppingCardProps> = ({data,cart}) => {
    const [productsCounter, setProductsCounter] = useState<number>(0);
    const context = useContext(ProductContext);
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
    const handleRemove = () => {
        context?.removeCart(data.id,cart)

    }
   const handleChange = (e:any) => {
       if(e.target.value < 0){
           e.target.value = 0
       }
       setProductsCounter(e.target.value)   
   }

    
    return(
        <>
            <div className="card-container">
                <img src={basket} alt={data.product} />
                <div className="data-container">
                    <div className="span-container">
                        <span>Cantidad: {cart}</span>
                        <span 
                            className='trash' 
                            onClick={handleRemove}>
                                <FontAwesomeIcon icon={faTrash}/>
                        </span>
                    </div>
                    <h3>{data.product}</h3>
                    <h2>{data.price}</h2>
                    <div className="details-container">
                        <p className="stock">Stock: {data.stock}</p>
                        <p className="id">Id: {data.id}</p>
                    </div>
                    
                </div>

                <div className="product-button-container">       
                    <Button content='Actualizar 🛒' type='add' onClick={handleClick}/> 
                    <input 
                            type="number" 
                            onChange={handleChange}  
                            placeholder='0'
                        />                 
                    </div>
            </div>
        </>
    )
}