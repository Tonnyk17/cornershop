import { createContext } from "react";
import { IProducts } from "./interfaces";

const state = {
    id:'',
    price:'',
    product:'',
    stock:0
}

export const AppContext = createContext<IProducts[]>([state]);