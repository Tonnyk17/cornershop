import {FC} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { ProductsProvider } from '../../app/Context';


import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ShoppingCart } from '../pages/ShoppingCart';
import { Layout } from '../templates/Layout';

export const Routes:FC = () => { 
   
    return(
        <>
        
            <BrowserRouter>
                <ProductsProvider>
                    <Layout>
                        <Switch>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/productos' element={<Products/>}/>
                            <Route path='/carrito-de-compras' element={<ShoppingCart/>}/>
                        </Switch>
                    </Layout>
                </ProductsProvider>
            </BrowserRouter>
        
        </>
    )
}