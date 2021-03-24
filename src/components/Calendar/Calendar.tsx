import React, {useEffect, useState} from "react";
import CalendarHead from "./items/CalendarHead/CalendarHead";
import DateUtils from "./utils/DateUtils";
import CalendarBody from "./items/CalendarBody/CalendarBody";

interface CalendarProps {
    date?: Date,
    headIsActive?: boolean,
    markedDates?: {marked_date:Date,color:string}[]
}

function Calendar(
    {
        date = new Date(),
        headIsActive = true,
        markedDates = []
    } : CalendarProps){

    const [selectedDate,setSelectedDate] = useState(date);
    const [dateUtils,setDateUtils] = useState(new DateUtils(date));
    const showLineIfHeadIsActive = headIsActive? "pt-4 border-t-2" : "";

    const [,setTime] = useState(Date.now());
    const milisecsUntilMidnight=()=> {
        let midnight = new Date();
        midnight.setHours( 24 );
        midnight.setMinutes( 0 );
        midnight.setSeconds( 0 );
        midnight.setMilliseconds( 100 );
        return ( midnight.getTime() - new Date().getTime() ) ;
    }
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), milisecsUntilMidnight());
        return () => {
            clearInterval(interval);
            setDateUtils((new DateUtils(new Date())));
        };

    }, []);
    return (

            <div className=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 max-w-sm">
                {headIsActive ? <CalendarHead dateUtil={new DateUtils(selectedDate)}/> : null}
                <CalendarBody
                    showLineIfHeadIsActive={showLineIfHeadIsActive}
                    dateUtil={dateUtils}
                    setDateUtils={setDateUtils}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    markedDates={markedDates} />

            </div>
        );
}

export default Calendar;