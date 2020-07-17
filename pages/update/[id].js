import style from '../../scss/MedSchedule.module.scss'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import React from 'react'
import axios from 'axios'
import Router from 'next/router';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'

const url = `https://my-medication-assistant.herokuapp.com/api/v1/scheduler/`;

class UpdatedPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: props.schedule.user,
      medication:props.schedule.medication,
      dosage:props.schedule.dosage,
      dosage_count:props.schedule.dosage_count,
      hours:props.schedule.hours,
      start:props.schedule.start,
      next_dosage:props.schedule.next_dosage,
      last: new Date(props.schedule.last),
      end:new Date(props.schedule.end),
      user_id_medication:props.schedule.user_id_medication,
    }
    this.handleChangeDosage = this.handleChangeDosage.bind(this);
    this.handleChangeDosageCount = this.handleChangeDosageCount.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeUser_Id_Med = this.handleChangeUser_Id_Med.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async scheduleUpdateHandler(schedule) {
    console.log("checking schedule in updatehandler", schedule)

    function dateAdd(date, interval, units) {
      if(!(date instanceof Date))
        return undefined;
      var ret = new Date(date);
      var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
      switch(String(interval).toLowerCase()) {
        case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
      }
      return ret;
    }

    schedule['next_dosage']=dateAdd(schedule['last'],'hour',schedule['hours']);

    console.log("checking schedule in updatehandler after updating it", schedule)

    const response = await axios.put(url + this.props.schedule.id, schedule);
    const savedSchedule = response.data;
  

    Router.push('/schedule');
  }

  handleChangeDosage(event){
    const newDosage = event.target.value;
    this.setState({
      dosage: newDosage,
    })
  }
  handleChangeDosageCount(event){
    const newDosage = event.target.value;
    this.setState({
      dosage_count: newDosage,
    })
  }
  handleChangeHours(event){
    const newHours = event.target.value;
    this.setState({
      hours: newHours,
    })
  }
  handleChangeLast(event){
    const newLast = event;
    this.setState({
      last: newLast,
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
    this.setState({user:'', medication:'', dosage:'', dosage_count:'', hours:'',start:'',next_dosage:'',last:'',end:'',user_id_medication:''});
    console.log("this is state in submit", this.state)
    this.scheduleUpdateHandler(this.state);
  }

  render(){
    return (
      <>
      <Nav />
        <div className={style.medupdate}>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.medication}</h1>
        {/* <h3>{this.state.user_id_medication}</h3> */}
        <label>
          Medication ID:
          <input name="med-user_id_med" type="text" value={this.state.user_id_medication} onChange={this.handleChangeUser_Id_Med}></input>
        </label>
        <label>
          Dose:
          <input name="med-dose" type="text" value={this.state.dosage} onChange={this.handleChangeDosage}></input>
        </label>
        <label>
          Inventory:
          <input name="med-dosage_count" type="text" value={this.state.dosage_count} onChange={this.handleChangeDosageCount}></input>
        </label>
        <label>
          Frequency in Hours:
          <input name="med-hours" type="number" value={this.state.hours} onChange={this.handleChangeHours}></input>
        </label>
        <label className="form-group">
          Last Dosage:     
          <DatePicker
              selected={ this.state.last}
              onChange={ this.handleChangeLast }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={this.state.last}
              maxDate={addDays(new Date(), 7)}
          />
        </label>
        <label className="form-group">
          Final Dosage:
          <DatePicker
              selected={ this.state.end }
              onChange={ this.handleChangeEnd }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={this.state.end}
              maxDate={addDays(this.state.end, 28)}
          />
        </label>
        <button>Update</button>
      </form> 
        </div>
      <Footer />
      </>
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