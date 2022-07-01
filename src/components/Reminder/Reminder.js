import React from "react";
import "./Reminder.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import TaskForm from "../Form/TaskForm";

const Reminder = ({ reminders, deleteFunc, day, setReminder }) => {
  const [showForm, setShowFrom] = useState(false)
  const buttonStyle = {
    padding: 10,
    backgroundColor: showForm ? "red" : "green",
    color: "white",
    border: "none",
    borderRadius: 5,
  };

  const toggleForm = () => {
    setShowFrom(!showForm)
  }

  let buttonText = "Add Task"

  if(showForm){
    buttonText = "Close"
  }

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
        <button style={buttonStyle} onClick={toggleForm}>{buttonText}</button>
      </div>
      {showForm && (<TaskForm reminders={reminders} setReminder={setReminder}/>)}
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
