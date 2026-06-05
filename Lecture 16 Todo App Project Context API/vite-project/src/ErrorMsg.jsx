import style from "./ErrorMsg.module.css"
import { useContext } from "react";
import { todoContext } from "./store/todoContextAPI";


function ErrorMsg () {

    const todoItems = useContext(todoContext);


    if (!todoItems || todoItems.length == 0) {
        return (
         <h1 className={style.error}> Todo Is Empty Add Task... </h1>
        )
    }

    return null;
}


export default ErrorMsg;