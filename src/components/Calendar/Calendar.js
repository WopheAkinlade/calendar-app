import { useEffect, useState } from "react";
import Month from "../Month/Month";
import "./Calendar.css";
import Reminder from "../Reminder/Reminder";
import { Icon } from "@iconify/react";

const Calendar = () => {
  const [isIncDisabled, setIncDisabled] = useState(false);
  const [isDecDisabled, setDecDisabled] = useState(true);
  const [showReminder, setShowReminder] = useState(false);
  const [dayHolder, setDayHolder] = useState(" ");
  const [dt] = useState(new Date());
  const [daysObj, setDay] = useState({
    day: dt.getDate(),
    month: dt.getMonth(),
    year: dt.getFullYear(),
  });
  let [count, setCount] = useState(0);
  const [reminders, setReminder] = useState([]);

  const increment = () => {
    setCount((count += 1));
    setDay({
      day: dt.getDate(),
      month: dt.getMonth() + count,
      year: dt.getFullYear(),
    });
  };

  const decrement = () => {
    setCount((count -= 1));
    setDay({
      day: dt.getDate(),
      month: dt.getMonth() + count,
      year: dt.getFullYear(),
    });
  };

  useEffect(() => {
    if (daysObj.month === 11) {
      setIncDisabled(true);
    } else {
      setIncDisabled(false);
    }
    if (daysObj.month === 0) {
      setDecDisabled(true);
    } else {
      setDecDisabled(false);
    }
  }, [daysObj]);

  const toggleReminder = () => {
    setShowReminder(!showReminder);
  };

  const deleteReminder = (track) => {
    setReminder(reminders.filter((reminder) => reminder.tracker !== track));
  };

  return (
    <div>
      <div className="calendar">
        <button
          className="arrowButton"
          disabled={isDecDisabled}
          onClick={decrement}
        >
          <Icon icon="ep:arrow-left" className="arrow" />
        </button>
        <Month
          count={count}
          toggleFunction={toggleReminder}
          dayHolder={dayHolder}
          setDayHolder={setDayHolder}
          showReminder={showReminder}
          dt={dt}
          daysObj={daysObj}
        />
        <button
          className="arrowButton"
          disabled={isIncDisabled}
          onClick={increment}
        >
          <Icon icon="ep:arrow-right" className="arrow" />
        </button>
      </div>
      <div className="reminderDiv">
        {showReminder && (
          <Reminder
            reminders={reminders}
            setReminder={setReminder}
            deleteFunc={deleteReminder}
            day={dayHolder}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
