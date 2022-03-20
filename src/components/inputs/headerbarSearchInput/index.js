import React, { useState } from "react";
import TextInput from "../../../common/input/textInput";
const SearchInput = () => {
    let [input, setInput] = useState();
    return (
        <TextInput
            label=""
            placeholder="test@gmail.com"
            value= {input}
            onChange = {(e) => setInput(e.target.value)}
        />
    )
}

export default SearchInput;