import Title from "./title";
import AddTodo from "./AddTodo";
import ErrorMsg from "./ErrorMsg";
import Task1 from "./Task1";
import { useState } from "react";


function App() {

  const [TodoItems, setTodoItems] = useState([]);


  // const todoArr = [
  //   { 
  //     task: "Perform Player", 
  //     date: "10/2/2001" 
  //   },
  //   { 
  //     task: "GO tO College", 
  //     date: "10/12/2004" 
  //   },
  //   { 
  //     task: "Do Maths", 
  //     date: "10/8/2005" 
  //   },
  //   { 
  //     task: "Learn JS", 
  //     date: "10/2/2007"
  //   },
  // ];
  

  function onClickAddTodo(todoNameParas, todoDateParas) {
    if (todoNameParas && todoDateParas) {
      let todoArray = [...TodoItems, 
        {name : todoNameParas, date : todoDateParas}
      ];
      setTodoItems(todoArray);
    }
  }


  return (
    <>
      <Title />
      <AddTodo onClickAddTodo={onClickAddTodo}/>
      <ErrorMsg todoArr={TodoItems} />
      <Task1 myTask={TodoItems} ></Task1>
    </>
  );
}

export default App;
