import { useState } from "react";
interface Props{
    text:string
}


export const Button = ({text}:Props) => { 
    const [count, setCount] = useState(5);
    const handlerButton = () => {
        setCount(count + 50);
    };


    return (
        <button onClick={ handlerButton }>
           {text} {count}
        </button>
    );
}