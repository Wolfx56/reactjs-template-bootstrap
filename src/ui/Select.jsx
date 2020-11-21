import React from 'react';

const Select = function ({className, children}) {

    return(
        <div className="form-group">
            <select className={`custom-select ${className ? className: ''}`} >
                {children}
            </select>
        </div>
    );

}

export default Select
