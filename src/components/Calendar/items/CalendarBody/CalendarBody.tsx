import React, {Dispatch, SetStateAction} from "react";
import DateUtils from "../../utils/DateUtils";
import CalendarSwitchMonth from "./items/CalendarSwitchMonth";
import CalendarBodyRow from "./items/CalendarBodyRow";

interface CalendarBodyProps {
    showLineIfHeadIsActive: string,
    dateUtil: DateUtils,
    setDateUtils: Dispatch<SetStateAction<DateUtils>>,
    markedDates?: {marked_date:Date,color:string}[]
}

function CalendarBody(
{
    dateUtil,
    showLineIfHeadIsActive,
    setDateUtils,
    markedDates = []
} : CalendarBodyProps){

    return (<>

        <CalendarSwitchMonth
            dateUtil={dateUtil}
            setDateUtils={setDateUtils}
            showLineIfHeadIsActive={showLineIfHeadIsActive}/>

        <CalendarBodyRow
            dateUtil={dateUtil}
            markedDates={markedDates} />

    </>);

}

export default CalendarBody;