// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';

// class PickDate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//     this.dateChange = this.dateChange.bind(this);
//   }

//   dateChange(date) {
//     this.setState({
//       date: date
//     },
//      () => {
//       console.log(this.state.date);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <DatePicker selected={this.state.date} onChange={this.dateChange}/>
//       </div>
//     );
//   }
// }
// export default PickDate;




// export default function PickDate(){
//   const [startDate, setStartDate] = useState(new Date());

//   let handleColor = time => {
//     return time.getHours() > 12 ? "text-success" : "text-error";
//   };

//   return (
//     <DatePicker
//       showTimeSelect
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       timeClassName={handleColor}
//     />
//   );
// };

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'


class PickDate extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
 
  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
          />
          <button className="btn btn-primary">Pick Date/Time</button>
        </div>
      </form>
    );
  }
  
}

export default PickDate;