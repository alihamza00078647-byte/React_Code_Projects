import style from "./Task1.module.css"
import { MdOutlineDeleteOutline } from "react-icons/md";

function Task1({myTask}){

    const deleteTodo = (e, name, date) => {
        let parent = e.currentTarget.parentNode;
        // console.log(e, parent)
        // console.log(e, name, date);
        parent.remove();
    }
    

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