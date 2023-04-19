import React from "react";


const CustomInput = (props) => {
    const {type,placeholder,i_id,i_class} = props;
    return(
        <div className="form-floating mb-3">
            <input
                type={type}
                className={`form-control ${i_class}`}
                id={i_id}
                lable={placeholder}
            />
            <label htmlFor={placeholder}>{placeholder}</label>
        </div>
    )
};
export default CustomInput;