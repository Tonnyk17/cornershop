import {FC} from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../pages/Home';


export const Routes:FC = () => {
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home/>}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}