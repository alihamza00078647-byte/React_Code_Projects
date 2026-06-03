import style from "./ErrorMsg.module.css";


function ErrorMsg({Error}){
    
    if (Error.length === 0) {
        return (
        <h2 className={`${style["list-item-color"]}`}>I'm Still Hungry. {Error}</h2>
        )
    }
}


export default ErrorMsg;