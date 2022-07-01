import React from "react";
import "./Reminder.css";
import { Icon } from "@iconify/react";

const Reminder = ({ reminders, deleteFunc, day }) => {
  const buttonStyle = {
    padding: 10,
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: 5,
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: 2 }}>Reminders for {day}:</h2>
        <button style={buttonStyle}>Add Task</button>
      </div>
      <hr style={{ backgroundColor: "steelblue" }} />
      {reminders.length === 0 && (
        <h3 style={{ marginLeft: 15, fontWeight: "400" }}>
          No tasks to display
        </h3>
      )}
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
