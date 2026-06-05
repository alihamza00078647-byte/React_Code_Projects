import Title from "./title";
import AddTodo from "./AddTodo";
import ErrorMsg from "./ErrorMsg";
import Task1 from "./Task1";
import { useState } from "react";
import { todoContext } from "./store/todoContextAPI";


function App() {
  const [TodoItems, setTodoItems] = useState([]);
  
  function onClickAddTodo(todoNameParas, todoDateParas) {
    setTodoItems((existData) => [
      ...existData,
      { name: todoNameParas, date: todoDateParas }, // New Data
    ]);
  }
  // const tempArr = [{ name: 'Demo', date: "Today" }]

  return (
    <todoContext.Provider  value={TodoItems}>
      <Title />
      <AddTodo onClickAddTodo={onClickAddTodo} />
      <ErrorMsg />
      <Task1 ></Task1>
    </todoContext.Provider >
  );
}

export default App;
