import React from 'react'

function Button({text,onClick,color}) {
    return (    
        <button onClick={onClick} className="btn btn-success" type="button" style={{backgroundColor:color}}>{text}</button>    
    )
}

export default Button
