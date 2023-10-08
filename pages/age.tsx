import { useEffect, useState } from "react";

const monthName = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Age = () => {

    const digitPlace = 2;

    const [date, setDate] = useState(24);
    const [month, setMonth] = useState(9);
    const [year, setYear] = useState(2002);

    const data = new Date();
    const [finalAge, setFinalAge] = useState('');

    function test() {
        const data = new Date();
        const birthDate = new Date(`${monthName[month - 1]} ${date}, ${data.getFullYear()}`)
        const birthdayPassed = data > birthDate;
        const currentYear = data.getFullYear();

        const ageX = (birthdayPassed) ? (currentYear - year) : (currentYear - year - 1);

        //calculation of month
        const currentMonth = data.getMonth() + 1;
        const calculatedMonth = (currentMonth > month) ? ((currentMonth - month) / 12).toFixed(digitPlace) : ((currentMonth + (12 - month)) / 12).toFixed(digitPlace);

        //calculation of date
        const currentDate = data.getDate();
        const calculatedDate = (currentDate > date) ? ((currentDate - date) / 30).toFixed(digitPlace) : ((30 - (date - currentDate)) / 30).toFixed(digitPlace);

        //calculation of time
        const calculatedHour = (data.getHours() / 24).toFixed(digitPlace);
        const calculatedMinute = (data.getMinutes() / 60).toFixed(digitPlace);
        const calculatedSecond = (data.getSeconds() / 60).toFixed(digitPlace);

        const x = (ageX + Number(calculatedMonth) + Number(calculatedDate) / 100 + Number(calculatedHour) / 10000 + Number(calculatedMinute) / 1000000 + Number(calculatedSecond) / 100000000).toFixed(10);
        setFinalAge(x)

    }

    useEffect(() => {
        const interval = setInterval(() => {
            test()
        }, 1000)
        return () => clearInterval(interval);
    }, [])


    return (
        <div>
            <div className=" text-4xl md:text-8xl font-bold text-[#eeeeee]">
                <p className="bg-[#59ef4f] blur-[4rem] md:blur-[12rem] absolute">
                    {finalAge}
                </p>
                {finalAge}
            </div>
        </div>
    );
}

export default Age;