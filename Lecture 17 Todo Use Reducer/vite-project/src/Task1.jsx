import { useContext } from "react";
import style from "./Task1.module.css"
import { MdOutlineDeleteOutline } from "react-icons/md";
import { todoContext } from "./store/todoContextAPI";

function Task1(){

    const deleteTodo = (e) => {
        let parent = e.currentTarget.parentNode;
        parent.remove();
    }
    
    const myTask = useContext(todoContext);

    return (
        
        <div className={`row ${style["Task-container"]}`}>
            { myTask.map((t) => (
            <div key={t.name} className="row">
                <p className={`col-6 ${style["Task1"]}`}>{t.name}</p>
                <p className={`col-3 ${style["Task1"]}`}>{t.date}</p>
                <button type="button" 
                className={`btn btn-danger col-1 ${style["btnPad"]}`}
                onClick={deleteTodo}><MdOutlineDeleteOutline/></button>
            </div>
            ))}
        </div>
    );
}

export default Task1;