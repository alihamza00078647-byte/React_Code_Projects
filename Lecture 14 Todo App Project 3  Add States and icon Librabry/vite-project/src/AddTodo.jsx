import { useState } from "react";
import style from "./AddTodo.module.css"
import { MdOutlineAddComment } from "react-icons/md";


function AddTodo({onClickAddTodo}) {

  const [todoNamePass, setTodoNamePass] = useState("");
  const [todoDatePass, setTodoDatePass] = useState("");


  function onChangeName (event) {
    let nameVal = event.target.value;
    setTodoNamePass(nameVal)

  }
  function onChangeDate (event) {
    let dateVal = event.target.value;
    setTodoDatePass(dateVal);
  }


  return (
      <div className="container text-center">
        <div className={`row ${style.AddTodoParentContainer}`}>
          <input type="text" className="col-4" placeholder="Write Todo here." onChange={onChangeName}/>
          <input type="date" className="col-3"  onChange={onChangeDate}/>
          <button type="button" className="btn btn-success col-2" 
          onClick={() => onClickAddTodo(todoNamePass , todoDatePass)} >
            <MdOutlineAddComment />
            </button>
        </div>
      </div>
  );
}

export default AddTodo;
