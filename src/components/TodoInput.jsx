import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputBox, setInputBox] = useState("");
  const handleEnterPress = (e) => {
    if(e.keyCode === 13){
      props.addList(inputBox)
      setInputBox("")
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your todo"
        className="input-box-todo"
        value={inputBox}
        onChange={(e) => {
          setInputBox(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputBox);
          setInputBox("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
