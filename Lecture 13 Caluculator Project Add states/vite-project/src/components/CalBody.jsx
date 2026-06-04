import style from "./CalBody.module.css";
import Display from "./Screen";
import Buttons from "./buttons";
import { useState } from "react";




function CalBody({btnValues}){

    let [buttonValue, setButtonValue] = useState("")
    
    let strVal = ""

    function onClickOperation (btn, e) {
        // console.log(btn);
        if (btn !== "=" && btn !== "C") {
            strVal = buttonValue + btn;
            setButtonValue(strVal);
        } else if (btn === "C") {
            let removed = buttonValue.slice(0, -1);
            // console.log(removed)
            setButtonValue(removed);
        } else {
            let evaluated = eval(buttonValue);
            setButtonValue(evaluated);
        }

    }

    return (
        <div className={style.CalBody}>
            <Display displayValue={buttonValue} ></Display>
            <div className={style.body}>
                { btnValues.map(btn => (
                    <Buttons key={btn} btn={btn} 
                        onClickOperation={(e) => onClickOperation(btn, e)}></Buttons>
                ))}
            </div>
        </div>
    );
}

export default CalBody;