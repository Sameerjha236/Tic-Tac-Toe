import React from "react";
import './Squarestyle.css'
const Square = ({ id, className, state}) => {
    return (
        <div className={`sqaure-container ${className} ${state==='X'? 'X-color':'O-color'}`} id={id} >{state}</div>
    );
}

export default Square;