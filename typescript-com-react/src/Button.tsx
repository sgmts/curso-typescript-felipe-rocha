import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    childen?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({text,onClick}) => {
    return <div onClick={onClick}>{text}</div>;
}

export default Button;