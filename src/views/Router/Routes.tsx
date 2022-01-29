import {createContext, FC, useEffect, useReducer} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';
import { fetchProducts } from '../../app/fetchProducts';
import { IState } from '../../app/interfaces';
import { ProductReducer } from '../../app/ProductReducer';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Layout } from '../templates/Layout';


export const initialState: IState = {
    products: [],
    shoppingCart: []
}

export const Routes:FC = () => { 
    
    const [state, dispatch] = useReducer(ProductReducer,initialState)
    const handleFetch = (data: any) => {
        dispatch({type:'GET_PRODUCTS',payload: data})
    }
    const handleError = (error: Error) => {
        console.log(error);
        
    }
    useEffect(() => {
        fetchProducts(
            handleFetch,
            handleError
        )
    },[])
    return(
        <>
        <AppContext.Provider value={state}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/productos' element={<Products/>}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
        </>
    )
}