import {FC} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Layout } from '../templates/Layout';


export const Routes:FC = () => {
    return(
        <>
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/productos' element={<Products/>}/>
            </Switch>
        </Layout>
        </BrowserRouter>
       
        </>
    )
}