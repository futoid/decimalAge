import { useEffect, useState } from "react";
import { CiCalendarDate } from 'react-icons/ci'
import { MdDone } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

import CalculateAge from "@/calculation/age";

const monthName = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Age = () => {

    const [edit, setEdit] = useState(0);

    const [date, setDate] = useState(24);
    const [month, setMonth] = useState(9);
    const [year, setYear] = useState(2002);
    const [finalAge, setFinalAge] = useState('');

    const githubURL = "https://github.com/futoid/decimalAge";

    useEffect(() => {
        const interval = setInterval(() => {
            CalculateAge(date, month, year, setFinalAge)
        }, 1000)
        return () => clearInterval(interval);
    }, [date, month, year])

    return (
        <div className=" flex flex-col h-screen">
            <div className=" flex text-[#eeeeee] p-8 justify-between items-center">
                <h1 className="text-4xl font-mono font-bold">a.ge</h1>
                <a href={githubURL} target="_blank">
                    <AiFillGithub size={35} />
                </a>
            </div>
            <div className=" flex flex-col justify-center h-screen">
                {edit &&
                    <div className=" flex flex-col items-center p-10">
                        <h1 className=" font-bold text-4xl  text-[#eeeeee] pb-8">Enter Date  <span className=" italic text-[#454545]">DD/MM/YYYY</span> </h1>
                        <div className="flex flex-col gap-8 w-full lg:flex-row lg:justify-center">
                            <input type="number" placeholder="Date" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setDate(Number(e.target.value))} />
                            <input type="number" placeholder="Month" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setMonth(Number(e.target.value))} />
                            <input type="number" placeholder="Year" className=" outline-none bg-[#272727] p-3 rounded-lg font-semibold text-lg text-white focus:shadow-[#505050] focus:shadow-md focus:transition focus:mb-1" onChange={(e) => setYear(Number(e.target.value))} />
                        </div>
                    </div>
                }
                {
                    !edit &&
                    <div>
                        <div className=" flex justify-center text-4xl md:text-8xl font-bold text-[#eeeeee]">
                            <p className="bg-[#a8a8a8] blur-[4rem] md:blur-[12rem] absolute">
                                {finalAge}
                            </p>
                            <div>
                                {finalAge}
                            </div>
                        </div>
                        <div className=" text-[#707070] text-sm flex justify-center pl-56 pt-4 lg:pl-[43rem] lg:text-lg font-semibold">
                            {date} {monthName[month - 1]}
                        </div>
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