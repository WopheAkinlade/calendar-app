import "./Month.css";
import DaySquare from "../Date/Date";
import { useEffect, useState } from "react";

const Month = (props) => {
  const [isMonth, setIsMonth] = useState(true)
  let x = new Date().getMonth()
  useEffect(() => {
    if(months[props.daysObj.month] === months[x]){
      setIsMonth(true)
    }else{
      setIsMonth(false)
    }
  }, [isMonth,props.daysObj.month, x] )

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <h1>{months[props.daysObj.month]} 2022</h1>
      <div className="calendarPage">
        <div className="weekdayDiv" style={{ display: "flex" }}>
          {weekdays.map((weekday) => (
            <h3 key={weekday} className="weekday">
              {weekday}
            </h3>
          ))}
        </div>
        <DaySquare
          days={props.days}
          toggle={props.toggleFunction}
          dyH={props.dayHolder}
          setDyH={props.setDayHolder}
          showReminder={props.showReminder}
          dt={props.dt}
          weekdays={weekdays}
          daysObj={props.daysObj}
          isMonth={isMonth}
        />
      </div>
    </div>
  );
};

export default Month;
