import Month from "../Month/Month";
import "./Calendar.css"

const Calendar = () => {
  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [ 29, 30, 31]
  ]

  let i = 0

  return (
    <div className="calendar">
      <Month days={days} count={i} />
    </div>
  )
}

export default Calendar