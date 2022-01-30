import { FC, useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import '../../styles/pages/Home/Home.css';
import { useNavigate } from "react-router-dom";


export const Home:FC = () => {
   const history = useNavigate()

    return(
        <>
            <div className="home-container">
                <div className="title-container">
                    <h1>Bienvenidos a Cornershop</h1>
                </div>
                <div className="button-container">
                    <Button content="IR A COMPRAR" type="start" onClick={() => history('productos')}/>
                </div>
            </div>
        </>
    )
}