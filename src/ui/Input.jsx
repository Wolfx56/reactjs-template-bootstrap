import React from "react";

const Input = ({className, id, name, type, ...props}) => {
    const myType = type ? type : "text";

    const myClassName = `form-control ${className ? className : ''}`

    return (
        <div className="form-group">
            <label for={id}>
                {name}
            </label>
            <input type={myType} className={myClassName} id={id} name={name} {...props} />
        </div>
    )
}

export default Input;
