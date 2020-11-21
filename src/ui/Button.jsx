import React from "react";


const Button = ({className, type, children, ...props}) => {

    const btnType = `btn ${type ? 'btn-'+type : 'btn-primary'} `
    const myClassName = btnType + (className ? className : '')

    return (
        <button className={myClassName} {...props}>
            {children}
        </button>
    )
}

export default Button;
