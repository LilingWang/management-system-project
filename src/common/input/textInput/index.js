import React from "react";

const TextInput = ({
    label = "",
    placeholder = "",
    value = "",
    onChange = () => { }
}) => {
    return (
        <div>
            <label>{}</label>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

        </div>

    )
}

export default TextInput;