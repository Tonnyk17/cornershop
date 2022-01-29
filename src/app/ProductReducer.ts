import { IState, IProducts, IShoppingCart } from './interfaces';

type actions = 
    | {type: 'GET_PRODUCTS', payload: IProducts[]}
    | { type: 'ADD_TO_CART', payload: IShoppingCart}
    | { type: 'REMOVE_TO_CART', payload: IShoppingCart};


export const ProductReducer = ( state: IState, action: actions ): IState => {

    switch ( action.type ) {
        case 'GET_PRODUCTS':
            return {
                ...state,
               products: action.payload
            };

        case 'ADD_TO_CART': 
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
            };
        
        case 'REMOVE_TO_CART':
            return {
                ...state,
                shoppingCart: [...state.shoppingCart.filter((product: IProducts) => product.id !== action.payload.id )]
            }
            
        default:
            return state;
    }

}