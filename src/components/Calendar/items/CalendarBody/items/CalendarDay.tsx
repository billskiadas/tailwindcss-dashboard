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

    const getMarkedDateByColor = (color="blue") =>{
        return <span className={`absolute rounded-full h-2 w-2 bg-${color}-500 bottom-0 left-1/2 transform -translate-x-1/2`}/>;
    };

    const datesAreEqual=(firstDate:Date,secondDate:Date) =>{
        return (firstDate.getFullYear() === secondDate.getFullYear() &&
                firstDate.getMonth() === secondDate.getMonth() &&
                firstDate.getDate() === secondDate.getDate());
    }
    const getDate = (date:Date,isDateActive= true) =>{
        const todayIsClicked = datesAreEqual(selectedDate, dateContent.date);
        const markedDate = foundDateMarked();
        const dateActive = isDateActive?
            "py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer":
            "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500";
        const dateToday = new Date();
        return  (datesAreEqual(date,dateToday)?
            <td className=" md:px-3 relative text-center text-white cursor-pointer" onClick={handleClick}>
                <span className={`absolute rounded-full h-9 w-9 -z-1 bg-blue-500 left-1/2 -top-3 transform -translate-x-1/2 translate-y-1/2`}/>
                <div className={`relative z-1  ${todayIsClicked && "text-blue-100"}`}>
                    {date.getDate().toString()}
                </div>
            </td>
            :
            <td className={dateActive } onClick={handleClick}>
                    <span className={ todayIsClicked && dateContent.active ? `absolute rounded-full h-9 w-9 bg-blue-200 left-1/2 -top-3  transform -translate-x-1/2 translate-y-2/4 -z-1 animate-fastpoof`: ""}/>
                    <div className={`relative z-1  ${todayIsClicked && "text-blue-500"}`}>
                        {date.getDate().toString()}
                    </div>
                    {markedDate ? getMarkedDateByColor(markedDate.color) : null}
            </td> );

    };


    return (getDate(dateContent?.date,dateContent?.active));
}

export default  CalendarDay;