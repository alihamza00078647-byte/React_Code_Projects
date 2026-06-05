import style from "./ErrorMsg.module.css"

function ErrorMsg ({todoArr}) {
    if (!todoArr || todoArr.length == 0) {
        return (
         <h1 className={style.error}> Todo Is Empty Add Task... </h1>
        )
    }

    return null;
}


export default ErrorMsg;