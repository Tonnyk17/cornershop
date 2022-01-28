import { FC } from "react";
import { Button } from "../components/Button";
import '../../styles/pages/Home.css';

export const Home:FC = () => {
    return(
        <>
            <div className="home-container">
                <div className="title-container">
                    <h1>Bienvenidos a Cornershop</h1>
                </div>
                <div className="button-container">
                    <Button content="IR A COMPRAR" type="start"/>
                </div>
            </div>
        </>
    )
}