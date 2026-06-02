import style from "./CalBody.module.css";



function CalBody({btnValues}){
    

    return (
        <div className={style.CalBody}>
            <div className={style.screen}></div>
            <div className={style.body}>
                {btnValues.map(btn => (
                    <>
                        <button className={style.btns}>{btn}</button>
                    </>
                ))}
            </div>
        </div>
    );
}

export default CalBody;