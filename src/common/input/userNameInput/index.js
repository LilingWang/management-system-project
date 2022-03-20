import React from "react";
import "./index.css";

const userNameInput = ({
    label = "",
    placeholder = "",
    value = "",
    onChange = () => { }
}) => {
    console.log(placeholder)
    return (
        <div id="userName">
            <label>{label}</label>
            <div id="input">
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            </div>
            
        </div>
    )

}


export default userNameInput;