import { useState, useRef } from "react";
import style from "./AddTodo.module.css"
import { MdOutlineAddComment } from "react-icons/md";


function AddTodo({onClickAddTodo}) {

  const todoNamePass = useRef();
  const todoDatePass = useRef();


  function handleOnClickItems(event) {
    event.preventDefault();
    console.log(todoNamePass.current.value, todoDatePass.current.value)
    let setNameValue = todoNamePass.current.value;
    let setDateValue = todoDatePass.current.value;
    onClickAddTodo(setNameValue, setDateValue);
  }

  return (
      <div className="container text-center">
        <form onSubmit={handleOnClickItems} className={`row ${style.AddTodoParentContainer}`}>
          <input type="text" className="col-4" placeholder="Write Todo here."
          ref={todoNamePass} />

          <input type="date" className="col-3" ref={todoDatePass} />
        
          <button type="submit" className="btn btn-success col-2" >
            <MdOutlineAddComment />
          </button>
        </form>
      </div>
  );
}

export default AddTodo;
