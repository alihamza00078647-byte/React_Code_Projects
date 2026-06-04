import style from "./button.module.css"



function Buttons({btn, onClickOperation}) {

    // const onClickOperation = (event) => {
        
    //     if (event.target.textContent) {
    //         console.log("Im Clicked", event.target.textContent);
    //     }
    //     if (event.target.value) {
    //         console.log("Im Clicked", event.target.value);
    //     }

    // }

    return (
        <button className={style.btns} onClick={onClickOperation}>{btn}</button>
    );
}


export default Buttons;