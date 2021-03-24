import React, {Dispatch, SetStateAction} from "react";
import CalendarDay from "./CalendarDay";
import DateUtils from "../../../utils/DateUtils";
interface CalendarMonthProps {
    dateUtil: DateUtils,
    markedDates?: {marked_date:Date,color:string}[],
    animatedEffect: boolean,
    selectedDate: Date,
    setSelectedDate: Dispatch<SetStateAction<Date>>,
    setAnimatedEffect: Dispatch<SetStateAction<boolean>>
}
function  CalendarMonth(
    {
        dateUtil,
        markedDates = [],
        animatedEffect,
        selectedDate,
        setSelectedDate,
        setAnimatedEffect
    } : CalendarMonthProps){


    const renderMonthContent = () =>{
        let datesOfMonthArray = dateUtil.getDatesOfMonthFromDate();
        let transformedDateArray = [];
        for (let i=0;i<datesOfMonthArray.length/7;i++){
            transformedDateArray.push(
                <tr>
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+1]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+2]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+3]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+4]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+5]} />
                    <CalendarDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates} dateContent={datesOfMonthArray[i*7+6]} />
                </tr>
            )
        }
        return transformedDateArray;
    }


    return (
        <div className={`${animatedEffect && "animate-shake "} flex flex-wrap overflow-hidden`}
             onAnimationEnd={()=>setAnimatedEffect(false)} >
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
                        {renderMonthContent().map(content=>content)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default  CalendarMonth;