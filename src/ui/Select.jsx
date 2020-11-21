import React from 'react';

const Select = function ({select, className, onChange, children}) {

    return(
        <div className="form-group">
            <select className={`custom-select ${className ? className: ''}`} value={select} onChange={onChange} >
                {children}
            </select>
        </div>
    );

}

export default Select
