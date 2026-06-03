import style from "./InputItems.module.css"


function InputItems () {

    const handleOnChange = (event) => {
        console.log(event.target.value);
    }


    return <input type="text" placeholder="Search favourite Food"
    className={style.InputItems} 
    onChange={handleOnChange}
    />
}


export default InputItems;