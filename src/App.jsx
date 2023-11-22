import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import Welcome from "./components/Welcome";

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAcion = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItem(deleteItemAcion);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={addNewItem} />
      {todoItems.length === 0 && <Welcome></Welcome>}
      <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
    </center>
  );
}

export default App;
