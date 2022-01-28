import {FC} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from '../templates/Layout';


export const Routes:FC = () => {
    return(
        <>
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route path='/home' element={<Home/>}/>
            </Switch>
        </Layout>
        </BrowserRouter>
       
        </>
    )
}