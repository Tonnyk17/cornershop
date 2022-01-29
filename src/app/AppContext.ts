import { createContext } from "react";
import { IState } from "./interfaces";

export const AppContext = createContext<IState>({} as IState);