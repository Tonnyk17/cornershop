import { FC } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import '../../styles/template/Layout.css';

export const Layout:FC = ({children}) => {
    return(
        <>
            <NavBar/>
                <div className="children-container">
                 {children}
                </div>
            <Footer/>
        </>
    )
}