import Month from "../Month/Month";

const Calendar = () => {
  const days = []
  const listOfDays =() => {
    for(let i = 0; i <= 31; i++){
      days.push(i)
    }
  }

  return (
    <div className="calendarPage">
      <Month days={days} />
    </div>
  )
}

export default Calendar
