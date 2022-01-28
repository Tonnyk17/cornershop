import { FC } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export const Layout:FC = ({children}) => {
    return(
        <>
            <NavBar/>
                {children}
            <Footer/>
        </>
    )
}