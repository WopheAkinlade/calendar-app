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
  const [ daysObj, setDay ] = useState(
    {
      day: dt.getDate(),
      month: dt.getMonth(),
      year: dt.getFullYear(), 
    }
  )
  // const [count, setCount] = useState(1);
  // const [count2, setCount2] = useState(-1);
  let [count, setCount] = useState(0);
  const [daysOfTheMonth] = useState(new Date(daysObj.year, daysObj.month, 0).getDate());
  const [reminders, setReminder] = useState([
    {
      tracker: 1,
      activity: "Read a book",
      time: "16:00",
      important: false,
    },
    {
      tracker: 2,
      activity: "Feed the dogs",
      time: "19:00",
      important: true,
    },
    {
      tracker: 3,
      activity: "Pray",
      time: "21:00",
      important: true,
    },
  ]);
  

  const increment = () => {
    // setCount2(-1)
    // setCount(prevcount => prevcount + 1);
    console.log(count, "before");
    setCount(count += 1)
    setDay({
      day: dt.getDate(),
      month: dt.getMonth() + count,
      year: dt.getFullYear(), 
    });
    // setCount(0)
    console.log(count, "after")
  };

  // console.log(daysObj, count, count2);

  const decrement = () => {
    // setCount(1)
    // setCount2(prevcount2 => prevcount2 - 1);
    setCount(count -= 1)
    setDay({
      day: dt.getDate(),
      month: dt.getMonth() + count,
      year: dt.getFullYear(), 
    });
  //  setCount(0)
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
  }, [count]);

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
            deleteFunc={deleteReminder}
            day={dayHolder}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
