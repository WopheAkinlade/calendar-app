import "./Form.css"

const TaskForm = ({ reminders, setReminder }) => {
  

  return (
    <div>
        <hr />
        <form action="" className="reminderForm">
        <label htmlFor="activity">What to do?</label>
        <input type="text" id="activity" placeholder="Activity"/>
        <label htmlFor="time">Time</label>
        <input
            type="time"
            name="time"
            id="time"
            placeholder="What time is the activity"
        />
        <button className="submit">Add Task</button>
        </form>
    </div>
  );
};

export default TaskForm;
