import React from "react";
import "./Reminder.css";
import { Icon } from "@iconify/react";

const Reminder = ({ reminders, deleteFunc, day }) => {
  return (
    <div className="container">
      {/* dynamic date */}
      <h2 style={{ marginBottom: 2 }}>Reminders for {day}:</h2>
      <hr style={{ backgroundColor: "steelblue" }} />
      {reminders.map((task) => {
        return (
          <p
            className="task"
            key={task.tracker}
            style={{ borderLeft: task.important && "5px solid black" }}
          >
            {task.activity} at {task.time}
            <Icon
              icon="icons8:cancel"
              className="cancelButton"
              onClick={() => deleteFunc(task.tracker)}
            />
          </p>
        );
      })}
    </div>
  );
};

export default Reminder;
