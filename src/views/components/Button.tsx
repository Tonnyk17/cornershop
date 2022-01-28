import { FC } from "react";
import '../../styles/components/Button/Button.css'

type ButtonProps = {
    onClick?: () => void;
    type: string;
    content: string;
}

export const Button:FC<ButtonProps> = ({onClick,type, content}) => {
    return(
        <>
            <div className={`button ${type}`} onClick={onClick}>
                {content}
            </div>
        </>
    )
}