import "./Date.css";

const Day = (props) => {
  return (
    <tbody>
      <tr>
        {props.days[0].map((day) => {
          return (
            <td className="day"

             key={day}
             
             onClick={
                () =>{
                  if(props.showReminder){
                    if(props.dyH !== day){
                      props.setDyH(day)
                    }else{
                      props.toggle()
                    }
                  }else{
                    props.setDyH(day)
                    props.toggle()
                  }
                }                
              }>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[1].map((day) => {
          return (
            <td className="day"
             key={day}
             onClick={
                () =>{
                  if(props.showReminder){
                    if(props.dyH !== day){
                      props.setDyH(day)
                    }else{
                      props.toggle()
                    }
                  }else{
                    props.setDyH(day)
                    props.toggle()
                  }
                }
              }>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[2].map((day) => {
          return (
            <td className="day"
             key={day}
             onClick={
                () =>{
                  if(props.showReminder){
                    if(props.dyH !== day){
                      props.setDyH(day)
                    }else{
                      props.toggle()
                    }
                  }else{
                    props.setDyH(day)
                    props.toggle()
                  }
                }
              }>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[3].map((day) => {
          return (
            <td className="day"
             key={day}
             onClick={
                () =>{
                  if(props.showReminder){
                    if(props.dyH !== day){
                      props.setDyH(day)
                    }else{
                      props.toggle()
                    }
                  }else{
                    props.setDyH(day)
                    props.toggle()
                  }
                }
              }>
              {day}
            </td>
          );
        })}
      </tr>
      <tr>
        {props.days[4].map((day) => {
          return (
            <td className="day"
             key={day}
             onClick={
                () =>{
                  if(props.showReminder){
                    if(props.dyH !== day){
                      props.setDyH(day)
                    }else{
                      props.toggle()
                    }
                  }else{
                    props.setDyH(day)
                    props.toggle()
                  }
                }
              }>
              {day}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
};

export default Day;
