import style from "./InputItems.module.css"


function InputItems ({ handleOnChange }) {



    return <input type="text" placeholder="Search favourite Food"
    className={style.InputItems} 
    onKeyDown={handleOnChange}
    />
}


export default InputItems;