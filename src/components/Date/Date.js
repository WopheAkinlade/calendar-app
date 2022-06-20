import "./Date.css";

const Day = (props) => {
  const func = (para) => {
    if (props.showReminder) {
      if (props.dyH !== para) {
        props.setDyH(para);
      } else {
        props.toggle();
      }
    } else {
      props.setDyH(para);
      props.toggle();
    }
  };

  return (
    <tbody>
      <tr>
        {props.days[0].map((day) => {
          return (
            <td className="day" key={day} onClick={() => {func(day)}}>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[1].map((day) => {
          return (
            <td className="day" key={day} onClick={() => {func(day)}}>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[2].map((day) => {
          return (
            <td className="day" key={day} onClick={() => {func(day)}}>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[3].map((day) => {
          return (
            <td className="day" key={day} onClick={() => {func(day)}}>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[4].map((day) => {
          return (
            <td className="day" key={day} onClick={() => {func(day)}}>
              {day}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
};

export default Day;
