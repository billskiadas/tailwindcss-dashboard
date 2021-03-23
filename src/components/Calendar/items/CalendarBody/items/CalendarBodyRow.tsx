import React from "react";
import CalendarBodyRowItem from "./CalendarBodyRowItem";
import DateUtils from "../../../utils/DateUtils";
interface CalendarBodyRowProps {
    dateUtil: DateUtils,
    markedDates?: {marked_date:Date,color:string}[]
}
function  CalendarBodyRow(
    {
        dateUtil,
        markedDates = []
    } : CalendarBodyRowProps){


    const transformMonthContentArray = () =>{
        let datesOfMonthArray = dateUtil.getDatesOfMonthFromDate();
        let transformedDateContent = [];
        for (let i=0;i<datesOfMonthArray.length/7;i++){
            transformedDateContent.push(
                <tr>
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+1]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+2]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+3]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+4]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+5]} />
                    <CalendarBodyRowItem markedDates={markedDates} dateContent={datesOfMonthArray[i*7+6]} />
                </tr>
            )
        }
        return transformedDateContent;
    }


    return (
        <div className="flex flex-wrap overflow-hidden ">
            <div className="w-full rounded shadow-sm">
                <div className="-mx-2 mt-4">
                    <table className="w-full dark:text-white">
                        <tbody>
                        <tr>
                            <th className="py-3 px-2 md:px-3 ">
                                Su
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                Mo
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                Tu
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                We
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                Th
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                Fr
                            </th>
                            <th className="py-3 px-2 md:px-3 ">
                                Sa
                            </th>
                        </tr>
                        {transformMonthContentArray().map(content=>content)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default  CalendarBodyRow;