import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import style from '../scss/MedSchedule.module.scss'

export default class MedForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user:'',
      medication:'',
      dosage:'',
      hours:24,
      start:new Date(),
      next_dosage:'',
      last:'',
      end:new Date(),
      user_id_medication:'',
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
  handleChangeUser(event){
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
    this.props.onscheduleCreate(this.state);
    this.setState({user:'', medication:'', dosage:'',hours:'',start:'',next_dosage:'',last:'',end:'',user_id_medication:''});
  }

  render(){
    return (
      <form className = {style.medschedule} onSubmit={this.handleSubmit} >
        <label>
          User:
          <input name="med-user" type="text" value={this.state.user} onChange={this.handleChangeUser}></input>
        </label>         
        <label>
          Medication:
          <input name="medication" type="text" value={this.state.medication} onChange={this.handleChangeMedication}></input>
        </label>
        <label>
          Medication ID:
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
        <label className="form-group">
          Start Date:
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
          End Date:
          <div>
          <DatePicker
              selected={ this.state.end }
              onChange={ this.handleChangeEnd }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
          />
          </div>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}