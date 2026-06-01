import style from "./Task1.module.css"


function Task1({myTask}){
    console.log(myTask[0].task, myTask[0].date)

    
    return (
        
        <div className={`row ${style["Task-container"]}`}>
            { myTask.map((t) => (
            // () Is used for Auto return
            <>
                <p className={`col-6 ${style["Task1"]}`}>{t.task}</p>
                <p className={`col-3 ${style["Task1"]}`}>{t.date}</p>
                <button type="button" className={`btn btn-danger col-1 ${style["btnPad"]} `}>Delete</button>
            </>
            ))}
        </div>
    );
}

export default Task1;