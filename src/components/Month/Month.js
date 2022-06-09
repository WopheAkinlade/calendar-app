import "./Month.css"
import Day from "../Date/Date"

const Month = (props) => {
  

  return (
    <div>
      <title>May 2022</title>
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
