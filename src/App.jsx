import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputBox) => {
    if(inputBox !== '')
    setListTodo([...listTodo, inputBox]);
  };

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />;
        })}
      </div>
    </div>
  );
};

export default App;
