import React, { useState } from "react";

interface MyButtonProps {
    text : string | number | boolean;
    onClick : ()=> void;
    onReduce : ()=> void;
    something : boolean;
}

const Button : React.FC<MyButtonProps> = (props) => {
    return(
        <>
            <button onClick={props.onClick}>Add</button>
            <button onClick={props.onReduce}>Sub</button>
            {
                props.something && (<h1>{props.text}</h1>)
            }
        </>
    )
}

export default Button;