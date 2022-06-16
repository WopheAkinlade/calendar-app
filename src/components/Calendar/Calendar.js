import { useEffect, useState } from "react";
import Month from "../Month/Month";
import "./Calendar.css";
import Reminder from "../Reminder/Reminder";
import { Icon } from '@iconify/react';

const Calendar = () => {
  const [ count, setCount ] = useState(0)
  const [ isIncDisabled, setIncDisabled ] = useState(false)
  const [ isDecDisabled, setDecDisabled ] = useState(true)
  const [ showReminder, setShowReminder ] = useState(false)
  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31],
  ];


  const increment = () => { 
    if(count < 11){
      setCount(count + 1)
    }
    console.log(count)
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
    
    console.log(count)
  }

  useEffect(() => {
    if(count === 11){
      setIncDisabled(true)
    }else{
      setIncDisabled(false)
    }
    if(count === 0){
      setDecDisabled(true)
    }else{
      setDecDisabled(false)
    }
  }, [count])

  console.log(count, isDecDisabled, isIncDisabled);

  const toggleReminder = () => {
    setShowReminder(!showReminder)
  }

  return (
    <div>
      <div className="calendar">
        <button disabled={isDecDisabled} onClick={decrement} >
          <Icon icon="ep:arrow-left" className="arrow"/>
        </button>
        <Month days={days} count={count} toggleFunction={toggleReminder}/>
        <button disabled={isIncDisabled} onClick={increment}>
          <Icon icon="ep:arrow-right" className="arrow" />
        </button>
      </div>
      <div className="reminderDiv">
        {showReminder && <Reminder />}
      </div>
    </div>
  );
};

export default Calendar;
