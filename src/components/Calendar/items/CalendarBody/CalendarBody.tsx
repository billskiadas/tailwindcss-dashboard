import React, {Dispatch, SetStateAction, useState} from "react";
import DateUtils from "../../utils/DateUtils";
import CalendarSwitchMonth from "./items/CalendarSwitchMonth";

interface CalendarBodyProps {
    showLineIfHeadIsActive: string,
    dateUtil: DateUtils,
    setDateUtils: Dispatch<SetStateAction<DateUtils>>
}

function CalendarBody(
{
    dateUtil,
    showLineIfHeadIsActive,
    setDateUtils
} : CalendarBodyProps){

    return (<>

    <CalendarSwitchMonth
        dateUtil={dateUtil}
        setDateUtils={setDateUtils}
        showLineIfHeadIsActive={showLineIfHeadIsActive}/>

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
                    <tr className="text-gray-400 dark:text-gray-500">
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            25
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            26
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            27
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            28
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            29
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                            30
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                            1
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            2
                        </td>
                        <td className="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                            3
                            <span
                                className="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                </span>
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            4
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            5
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            6
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            7
                        </td>
                        <td className="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                            8
                            <span
                                className="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            9
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            10
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            11
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            12
                        </td>
                        <td className="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                <span className="p-2 rounded-full bg-blue-500">
                                    13
                                </span>
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            14
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            15
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            16
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            17
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            18
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            19
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            20
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            21
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            22
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            23
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            24
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                            25
                            <span
                                className="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                </span>
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            26
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            27
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            28
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer click:text-red-500">
                            29
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            30
                        </td>
                        <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                            31
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</>);

}

export default CalendarBody;