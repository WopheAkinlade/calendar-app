import "./Date.css";
import React from "react";

const DaySquare = ({
  toggle,
  dyH,
  setDyH,
  showReminder,
  dt,
  weekdays,
  daysObj,
  isMonth,
}) => {
  const {month, year } = daysObj;
  const firstDay = new Date(year, month, 1);
  const dayString = firstDay.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  let currentMonth = month + 1
  const daysOfTheMonth = new Date(year, currentMonth, 0).getDate();

  const currentDay = dayString.split(", ");
  const paddingDays = weekdays.indexOf(currentDay[0]);

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

  const days = [];

  for (let i = 0; i < paddingDays; i++) {
    days.push("");
  }

  for (let i = 1; i <= daysOfTheMonth; i++) {
    days.push(i);
  }
  
  const hoverStyles = (e) => {
    e.target.style.backgroundColor = "rgba(184, 180, 180, 0.786)";
  };

  const revert = (e) => {
    e.target.style.backgroundColor = "#fff";
  };

  const thatDay = (e) => {
    e.target.style.backgroundColor = "cyan";
  };

  return (
    <div className="calendarBody">
      {days.map((day, index) => {
        if (day) {
          return (
            <div
              key={index + 1}
              className="day"
              onClick={() => func(day)}
              style={{
                backgroundColor:
                  day === daysObj.day && isMonth ? "cyan" : "white",
              }}
              onMouseOver={hoverStyles}
              onMouseLeave={(e) => {
                day === daysObj.day && isMonth
                  ? thatDay(e)
                  : revert(e)
              }}
            >
              {day}
            </div>
          );
        } else {
          return (
            <div key={index + 1} className="day padDay">
              {day}
            </div>
          );
        }
      })}
    </div>
  );
};

export default DaySquare;
