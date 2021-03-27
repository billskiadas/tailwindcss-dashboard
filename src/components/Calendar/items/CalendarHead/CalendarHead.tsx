import React from "react";
import DateUtils from "../../utils/DateUtils";

interface CalendarHeadProps {
    dateUtil: DateUtils
}
function CalendarHead( {
    dateUtil
} : CalendarHeadProps)
{
    return (<div className="pt-1">
            <div className="flex flex-col m-4 gap-y-0">
                <div className="font-bold text-2xl text-gray-400">{dateUtil.getYearFromDate()}</div>
                <div className="flex flex-row justify-between">
                    <div className="text-left font-bold text-6xl text-black dark:text-white ">
                        {dateUtil.getMonthFromDate().substr(0,3)}, {dateUtil.getDayFromDate()}
                    </div>
                    {/*<div>*/}
                    {/*    <RefreshIcon />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>);
}
export default CalendarHead;