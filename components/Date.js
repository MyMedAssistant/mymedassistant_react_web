import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class PickDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(date) {
    this.setState({
      date: date
    },
     () => {
      console.log(this.state.date);
    });
  }

  render() {
    return (
      <div>
        <p>
          Pick a date:
        </p>
        <DatePicker selected={this.state.date} onChange={this.dateChange}/>
      </div>
    );
  }
}

export default PickDate;