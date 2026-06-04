import style from "./Screen.module.css";



function Display({displayValue}) {
    return <input type="text" id={style.screen} value={displayValue} readOnly/>
}


export default Display;