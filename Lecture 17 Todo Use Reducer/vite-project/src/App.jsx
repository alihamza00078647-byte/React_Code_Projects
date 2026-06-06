import Title from "./title";
import AddTodo from "./AddTodo";
import ErrorMsg from "./ErrorMsg";
import Task1 from "./Task1";
import { useReducer, useState } from "react";
import { todoContext } from "./store/todoContextAPI";


function Reducerfunction (currState, action) {

  let newTodoList =  currState;

  if (action.type === "NEW_ITEM") {
    newTodoList = [ ...currState,
      { name: action.payload.todoNameParas, date: action.payload.todoDateParas },
    ]
  }
  return newTodoList;
}


function App() {
  // const [TodoItems, setTodoItems] = useState([]);

  const [TodoItems, dispatchTodo] = useReducer(Reducerfunction, []); // initial State.


  const onClickAddTodo = (todoNameParas, todoDateParas) => {
    const newTodoAction = {
      type : 'NEW_ITEM',
      payload : {
        todoNameParas : todoNameParas, 
        todoDateParas : todoDateParas
      }
    }
    dispatchTodo(newTodoAction);
  }
  
  
    
  // function onClickAddTodo(todoNameParas, todoDateParas) {
  //   setTodoItems((existData) => [
  //     ...existData,
  //     { name: todoNameParas, date: todoDateParas }, // New Data
  //   ]);
  // }
  


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
