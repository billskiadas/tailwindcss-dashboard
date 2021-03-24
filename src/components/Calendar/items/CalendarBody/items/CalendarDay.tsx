import React, {Dispatch, SetStateAction} from "react";

interface CalendarDayProps {
    selectedDate: Date,
    setSelectedDate: Dispatch<SetStateAction<Date>>,
    dateContent: {date: Date, active: boolean},
    markedDates?: {marked_date:Date,color:string}[]
}

function  CalendarDay(
    {
        selectedDate,
        setSelectedDate,
        dateContent,
        markedDates = []
    } : CalendarDayProps){


    const handleClick = () => {
        if (dateContent.active)
            setSelectedDate(dateContent.date);
    }

    const foundDateMarked = () => {
        return markedDates?.find(mDate => datesAreEqual(dateContent.date, mDate.marked_date));
    };

    const markedDate = (color="blue") =>{
        return (<span
            className={`absolute rounded-full h-2 w-2 bg-${color}-500 bottom-0 left-1/2 transform -translate-x-1/2`}>
        </span>)
    };

    const datesAreEqual=(firstDate:Date,secondDate:Date) =>{
        return (firstDate.getFullYear() === secondDate.getFullYear() &&
            firstDate.getMonth() === secondDate.getMonth() &&
            firstDate.getDate() === secondDate.getDate())
    }
    const getDate = (date:Date,isDateActive= true) =>{
        const mDate = foundDateMarked();
        const dateActive = isDateActive?
            "py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer":
            "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500";
        const dateToday = new Date();
        return  (datesAreEqual(date,dateToday)?
            <td className="py-3 px-2 md:px-3  text-center text-white cursor-pointer" onClick={handleClick}>
                <span className="p-2 rounded-full bg-blue-500">
                    {date.getDate().toString().length>1?
                        date.getDate().toString() : '0'+date.getDate().toString() }
                </span>
            </td>
            :
            <td className={dateActive} onClick={handleClick}>
                    <span className={
                        datesAreEqual(selectedDate, dateContent.date) &&
                        dateContent.active ?
                        `p-2 rounded-full border border-blue-500` : ""}>
                        {date.getDate().toString().length>1? date.getDate().toString() : '0'+date.getDate().toString() }
                        {mDate ? markedDate(mDate.color) : null}
                    </span>

            </td> );

    };


    return (getDate(dateContent?.date,dateContent?.active));
}

export default  CalendarDay;