import { FC } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";


export const Layout:FC = ({children}) => {
    return(
        <>
        <div className="children-container">
           <NavBar/>
                   {children}
            <Footer/>
            </div>
        </>
    )
}