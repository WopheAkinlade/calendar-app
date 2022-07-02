import { useState } from "react";
import "./Form.css";

const TaskForm = ({ addReminder }) => {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");
  const [important, setImportant] = useState(false);

  const reset = () => {
    setActivity("");
    setTime("");
    setImportant(false);
  };

  const submit = (e) => {
    e.preventDefault()

    if (!activity) {
      alert("Please add a reminder");
      return;
    }

    addReminder({ activity, time, important });

    reset();
  };

  return (
    <div>
      <hr />
      <form action="" className="reminderForm">
        <label htmlFor="activity">What to do?</label>
        <input
          type="text"
          id="activity"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          name="time"
          id="time"
          placeholder="What time is the activity"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="important">Important?</label>
        <input
          type="checkbox"
          name="important"
          id="important"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        <button className="submit" onClick={submit}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
