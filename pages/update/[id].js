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
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async scheduleUpdateHandler(schedule) {
    console.log("inside the updatehandler with schedule", schedule)
    const response = await axios.put(url + this.props.schedule.id, schedule);
    const savedSchedule = response.data;
    this.setState(
      {user:''}
    )
    Router.push('/schedule');
  }

  handleChangeUser(event){
    console.log("this is event.targe.value for user", event.target.value)
    const newUser = event.target.value;
    this.setState({
      user: newUser,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("this is inside the handlesubmit", this.state);
    this.scheduleUpdateHandler(this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.medication}</h1>
        <h3>
          {this.state.user_id_medication}
        </h3>
        <label>
          User:
          <input name="med-user" type="text" value={this.state.user} onChange={this.handleChangeUser}></input>
        </label> 
        <button>Submit</button>
      </form> 
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