import {createContext, FC} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';
import { useInitialState } from '../../app/state';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Layout } from '../templates/Layout';


export const Routes:FC = () => {
    const initialState = useInitialState()
    console.log(initialState)
    return(
        <>
        <AppContext.Provider value={initialState}>
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