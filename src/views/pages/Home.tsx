import { FC, useEffect } from "react";
import { Button } from "../components/Button";
import '../../styles/pages/Home/Home.css';
import { fetchProducts } from "../../app/fetchProducts";

export const Home:FC = () => {
    const handleFetch = (data: any) => {
        console.log(data)
    }
    const handleError = (error: any) => {
        console.log(error)
    }
    useEffect(() => {
        fetchProducts(
            handleFetch,
            handleError
        )
    },[])
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