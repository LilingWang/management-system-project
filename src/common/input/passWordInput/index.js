import React from "react";
import "./index.css";

const PassWordInput = ({
    label = "",
    value = "",
    onChange = () => { }
}
) => {
    return (
        <div id="pwInput">
            <label>{label}</label>
            <div id="input">
                <input
                    value={value}
                    onChange={onChange}
                />
            </div>

        </div>
    )
};

export default PassWordInput;