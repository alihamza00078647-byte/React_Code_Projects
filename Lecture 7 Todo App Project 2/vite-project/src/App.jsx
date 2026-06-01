import Title from "./title";
import AddTodo from "./AddTodo";
import Task1 from "./Task1";


function App() {
  const todoTasksArray = [
    { 
      task: "Perform Player", 
      date: "10/2/2001" 
    },
    { 
      task: "GO tO College", 
      date: "10/12/2004" 
    },
    { 
      task: "Do Maths", 
      date: "10/8/2005" 
    },
    { 
      task: "Learn JS", 
      date: "10/2/2007"
    },
  ];
  // todoTasksArray.map(t => console.log(t.task, t.date))
  // console.log(todoTasksArray.task, todoTasksArray.date);
  return (
    <>
      <Title />
      <AddTodo />
      <Task1 myTask={todoTasksArray} ></Task1>
    </>
  );
}

export default App;
