import { useState } from "react";
import "./Date.css";

const DaySquare = ({ toggle, dyH, setDyH, showReminder, dt }) => {
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  const [ daysOfTheMonth ] = useState(new Date(year, month, 0).getDate());
  const firstDay = new Date(year, month, 1)
  const dayString = firstDay.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = dayString.split(", ")
  const paddingDays = weekdays.indexOf(currentDay[0])

  const func = (para) => {
    if (showReminder) {
      if (dyH !== para) {
        setDyH(para);
      } else {
        toggle();
      }
    } else {
      setDyH(para);
      toggle();
    }
  };
  

  const days= [];
  

  for(let i = 0; i < paddingDays; i++){
    days.push("")
  }

  for(let i = 1; i <= daysOfTheMonth; i++){
    days.push(i)
  }
  console.log(paddingDays,daysOfTheMonth, days)

  

  console.log(days)
  
  return ( 
    <div className="calendarBody">
      {days.map(
        (day, index) => {
          if(day){
            return <div key={index + 1} className="day" onClick={() => func(day)} >{day}</div>
          }else{
            return <div key={index + 1} className="day padDay">{day}</div>
          }
        }
      )}
    </div>
  );   
};

export default DaySquare;