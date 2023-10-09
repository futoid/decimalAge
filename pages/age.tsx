import { useCallback, useEffect, useState } from "react";
import { CiCalendarDate } from 'react-icons/ci'
import { MdDone } from 'react-icons/md'

const monthName = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Age = () => {

    const [edit, setEdit] = useState(0);
    const digitPlace = 2;

    const [date, setDate] = useState(1);
    const [month, setMonth] = useState(9);
    const [year, setYear] = useState(2002);
    const [finalAge, setFinalAge] = useState('');

    function test() {
        const data = new Date();
        const birthDate = new Date(`${monthName[month - 1]} ${date}, ${data.getFullYear()}`)
        const birthdayPassed = data > birthDate;
        const currentYear = data.getFullYear();

        const ageX = (birthdayPassed) ? (currentYear - year) : (currentYear - year - 1);
        //calculation of month
        const currentMonth = data.getMonth() + 1;
        var calculatedMonth = (currentMonth > month) ? (((currentMonth - month) / 12)).toFixed(digitPlace) : ((currentMonth + (12 - month)) / 12).toFixed(digitPlace);
        if (calculatedMonth == "1.00") {
            calculatedMonth = (data.getDate() >= date) ? (Number(calculatedMonth) % 1).toString() : "0.99";
        }
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
    }, [date,month,year])

    return (
        <div className=" flex flex-col h-screen">
            <div className=" flex flex-col justify-center h-screen">
                {edit &&
                    <div className=" flex flex-col items-center p-10">
                        <h1 className=" font-bold text-4xl  text-[#eeeeee] pb-8">Enter Date  <span className=" italic text-[#454545]">DD/MM/YYYY</span> </h1>
                        <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-center">
                            <input type="number" placeholder="Date" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setDate(Number(e.target.value))}/>
                            <input type="number" placeholder="Month" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setMonth(Number(e.target.value))} />
                            <input type="number" placeholder="Year" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setYear(Number(e.target.value))}/>
                        </div>
                    </div>
                }
                {
                    !edit &&
                    <div className=" flex justify-center text-4xl md:text-8xl font-bold text-[#eeeeee]">
                        <p className="bg-[#a8a8a8] blur-[4rem] md:blur-[12rem] absolute">
                            {finalAge}
                        </p>
                        {finalAge}
                    </div>
                }
            </div>
            <div className=" flex justify-end pb-10 pr-6 lg:pr-10">
                {!edit ? (
                    <div className="bg-[#a8a8a8] p-3 rounded-md" onClick={() => setEdit(1)}>
                        <CiCalendarDate size={40} color="black" />
                    </div>
                ) : (
                    <div className="bg-[#a8a8a8] p-3 rounded-md" onClick={() => setEdit(0)}>
                        <MdDone size={40} color="black" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Age;