import React, {Dispatch, SetStateAction, useState} from "react";
import DateUtils from "../../utils/DateUtils";
import CalendarSwitchMonth from "./items/CalendarSwitchMonth";
import CalendarMonth from "./items/CalendarMonth";

interface CalendarBodyProps {
    showLineIfHeadIsActive: string,
    dateUtil: DateUtils,
    setDateUtils: Dispatch<SetStateAction<DateUtils>>,
    selectedDate: Date,
    setSelectedDate: Dispatch<SetStateAction<Date>>,
    markedDates?: {marked_date:Date,color:string}[]
}

function CalendarBody(
{
    dateUtil,
    showLineIfHeadIsActive,
    setDateUtils,
    selectedDate,
    setSelectedDate,
    markedDates = []
} : CalendarBodyProps)
{

    const [animatedEffect,setAnimatedEffect] = useState(false);
    return (<>

        <CalendarSwitchMonth
            dateUtil={dateUtil}
            setDateUtils={setDateUtils}
            setAnimatedEffect={setAnimatedEffect}
            showLineIfHeadIsActive={showLineIfHeadIsActive}/>

        <CalendarMonth
            dateUtil={dateUtil}
            animatedEffect={animatedEffect}
            setAnimatedEffect={setAnimatedEffect}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            markedDates={markedDates} />

    </>);

}

export default CalendarBody;