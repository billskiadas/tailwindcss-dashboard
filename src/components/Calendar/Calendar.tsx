import React, {useState} from "react";
import CalendarHead from "./items/CalendarHead";
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

    const [dateUtils,setDateUtils] = useState(new DateUtils(date));
    const showLineIfHeadIsActive = headIsActive? "pt-4 border-t-2" : "";

    return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 max-w-sm">
        {headIsActive ? <CalendarHead dateUtil={dateUtils}/> : null}
        <CalendarBody
            showLineIfHeadIsActive={showLineIfHeadIsActive}
            dateUtil={dateUtils}
            setDateUtils={setDateUtils}
            markedDates={markedDates} />

    </div>);
}

export default Calendar;