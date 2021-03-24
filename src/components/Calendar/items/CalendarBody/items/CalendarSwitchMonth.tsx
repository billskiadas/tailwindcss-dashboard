import React, {Dispatch, SetStateAction} from "react";
import DateUtils from "../../../utils/DateUtils";

interface CalendarSwitchMonthProps {
    showLineIfHeadIsActive: string,
    dateUtil: DateUtils,
    setDateUtils: Dispatch<SetStateAction<DateUtils>>,
    setAnimatedEffect: Dispatch<SetStateAction<boolean>>

}

function CalendarSwitchMonth(
    {
        dateUtil,
        showLineIfHeadIsActive,
        setDateUtils,
        setAnimatedEffect
    } : CalendarSwitchMonthProps){

    const handleRightArrowButton = () =>
    {
        let newDate = dateUtil.getDate();
        newDate.setMonth(newDate.getMonth()+1)
        setDateUtils(new DateUtils(newDate));
        setAnimatedEffect(true);
    };

    const handleLeftArrowButton = () => {
        let newDate = dateUtil.getDate();
        newDate.setMonth(newDate.getMonth()-1)
        setDateUtils(new DateUtils(newDate));
        setAnimatedEffect(true);
    };

    return (
        <div className={`flex justify-between ${showLineIfHeadIsActive}`}>
            <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102 focus:outline-none p-2 rounded-full bg-text-white text-gray-900 shadow-md"
                    onClick={handleLeftArrowButton } >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d= "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                    </path>
                </svg>
            </button>

            <div className=" text-2xl  font-bold"> {dateUtil.getMonthFromDate()}</div>

                <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102 focus:outline-none focus:outline-none p-2 rounded-full bg-text-white text-gray-900 shadow-md"
                        onClick={handleRightArrowButton } >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                        </path>
                    </svg>
                </button>
        </div>);
}

export default  CalendarSwitchMonth;