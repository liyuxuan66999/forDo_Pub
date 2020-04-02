import React, {useState} from "react";

function InputArea(props){
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return(
        <div>
        <input onChange={handleChange} type="text" id="todoList" placeholder="New Item" value={inputText} />
        <button id="addButton" onClick={
            () => {
                props.handleClick(inputText, setInputText);
            }
        }> + </button> 
        </div>
    );
}

export default InputArea;