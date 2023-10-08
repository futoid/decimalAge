import { useEffect, useState } from "react";

const Test = () => {
    
    const[time, setTime] = useState(0);

    const timer = () => {
        const sec = new Date();
        setTime(sec.getSeconds());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            timer()
        },1000 )
        return () => clearInterval(interval);
    },[])

    return ( 
        <div className=" text-6xl font-bold">
            {time}
        </div>
     );
}
 
export default Test;