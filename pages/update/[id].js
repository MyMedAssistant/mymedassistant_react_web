import style from '../../scss/MedSchedule.module.scss'
import React from 'react'
import axios from 'axios'
import Router from 'next/router';

const url = `https://my-medication-assistant.herokuapp.com/api/v1/scheduler/`;

class UpdatedPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: props.schedule.user,
      medication:props.schedule.medication,
      dosage:props.schedule.dosage,
      hours:props.schedule.hours,
      start:props.schedule.start,
      next_dosage:props.schedule.next_dosage,
      last:props.schedule.last,
      end:props.schedule.end,
      user_id_medication:props.schedule.user_id_medication,
    }
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeMedication = this.handleChangeMedication.bind(this);
    this.handleChangeDosage = this.handleChangeDosage.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeUser_Id_Med = this.handleChangeUser_Id_Med.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async scheduleUpdateHandler(schedule) {
    // console.log("inside the updatehandler with schedule", schedule)
    const response = await axios.put(url + this.props.schedule.id, schedule);
    const savedSchedule = response.data;
    this.setState(
      {user:''}
    )
    Router.push('/schedule');
  }

  handleChangeUser(event){
    // console.log("this is event.targe.value for user", event.target.value)
    const newUser = event.target.value;
    this.setState({
      user: newUser,
    })
  }
  handleChangeMedication(event){
    const newMedication = event.target.value;
    this.setState({
      medication: newMedication,
    })
  }
  handleChangeDosage(event){
    const newDosage = event.target.value;
    this.setState({
      dosage: newDosage,
    })
  }
  handleChangeHours(event){
    const newHours = event.target.value;
    this.setState({
      hours: newHours,
    })
  }
  handleChangeStart(event){
    const newStart = event;
    this.setState({
      start: newStart,
    })
  }

  handleChangeEnd(event){
    const newEnd = event;
    this.setState({
      end: newEnd,
    })
  }
  handleChangeUser_Id_Med(event){
    const newUser_Id_Med = event.target.value;
    this.setState({
      user_id_medication:newUser_Id_Med,
    })
  }  
  handleSubmit(event){
    event.preventDefault();
    console.log("this is inside the handlesubmit", this.state);
    this.scheduleUpdateHandler(this.state);
  }

  render(){
    return (
      <main className={style.medschedule}>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.medication}</h1>
        <h3>
          {this.state.user_id_medication}
        </h3>
        <label>
          User:
          <input name="med-user" type="text" value={this.state.user} onChange={this.handleChangeUser}></input>
        </label> 
        <label>
          Medication:
          <input name="medication" type="text" value={this.state.medication} onChange={this.handleChangeMedication}></input>
        </label>
        <label>
          Your User Medication ID as Text:
          <input name="med-user_id_med" type="text" value={this.state.user_id_medication} onChange={this.handleChangeUser_Id_Med}></input>
        </label>
        <label>
          Dose:
          <input name="med-dose" type="text" value={this.state.dosage} onChange={this.handleChangeDosage}></input>
        </label>
        <label>
          Frequency in Hours:
          <input name="med-hours" type="number" value={this.state.hours} onChange={this.handleChangeHours}></input>
        </label>
        {/* <label className="form-group">
          Start Day:
          <DatePicker
              selected={ this.state.start }
              onChange={ this.handleChangeStart }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
          />
        </label>
        <label className="form-group">
          End Date and Time:
          <DatePicker
              selected={ this.state.end }
              onChange={ this.handleChangeEnd }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
          />
        </label> */}
        <button>Submit</button>
      </form> 
      </main>
    )
  }      
}


export default UpdatedPage

export async function getServerSideProps(context) {
  const response = await fetch(`https://my-medication-assistant.herokuapp.com/api/v1/scheduler/${context.params.id}`);
  const schedule = await response.json();
  return {
      props: {
          schedule
      }
  }
}