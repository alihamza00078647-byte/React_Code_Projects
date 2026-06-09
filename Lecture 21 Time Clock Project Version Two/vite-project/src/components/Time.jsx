import { useEffect, useState } from "react";

function Time(){
    // let time = new Date();

    let [Time, setTime] = useState(new Date());

    useEffect(() => {
        let intervalId = setInterval(()=> {
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("Ok Clear Hai");
            clearInterval(intervalId);
        }
    }, [])




    return <h2 className="Time"> Current Time is : {Time.toLocaleDateString()} - {Time.toLocaleTimeString()}</h2>
}


export default Time;