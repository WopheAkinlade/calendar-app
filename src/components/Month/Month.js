import "./Month.css"
import Day from "../Date/Date"

const Month = (props) => {
  let i = 0
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"]

  return (
    <div>
      <h1>{months[i]} 2022</h1>
      <table className="calendarPage" style={{borderCollapse: 'collapse'}}>
        <thead>
        <tr>
          <th className="weekday">Sunday</th>
          <th className="weekday">Monday</th>
          <th className="weekday">Tuesday</th>
          <th className="weekday">Wednesday</th>
          <th className="weekday">Thursday</th>
          <th className="weekday">Friday</th>
          <th className="weekday">Saturday</th>
        </tr>
        </thead>
        <Day days={props.days} />
      </table>
    </div>
  )
}

export default Month
