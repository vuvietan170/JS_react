import React ,{useState,useEffect} from "react";

function DigitalClock(){
    const [time,setTime] = useState(new Date());
    
    useEffect(()=> {
        const intervaLid = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervaLid);
        };
    },[]);
    function fomatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const morAft = hours > 12 ? "PM" : "AM"; 

        hours = hours % 12 || 12;

        return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)} ${morAft}`;
    }
    function PadZero(number){
        return number < 10 ? "0" + number : ""+ number;
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{fomatTime()}</span>
            </div>
        </div>
    )
}
export default DigitalClock;