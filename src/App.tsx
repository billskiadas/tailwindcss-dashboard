import React from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";

function App() {
    let markedDates = [
        {
            marked_date: new Date('2021/03/12'),
            color:'red'
        },
        {
            marked_date: new Date('2021/03/13'),
            color:'blue'
        },
        {
            marked_date: new Date('2021/03/14'),
            color:'green'
        },
        {
            marked_date: new Date('2021/03/15'),
            color:'yellow'
        },
        {
            marked_date: new Date('2021/03/22'),
            color:'gray'
        }
];
  return (

    <div className="App">
        <Calendar
            markedDates={markedDates}  />
    </div>
  );
}

export default App;
