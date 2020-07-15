import React from 'react'

export default class MedForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {

     
      id:0,
      user:'',
      dosage: '',
      hours:0,
      start:0,
      next_dosage:0,
      end:0,
    }
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeDosage = this.handleChangeDosage.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeNextDosage = this.handleChangeNextDosage.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUser(event){
    const newName = event.target.value;
    this.setState({
      name: newName,
    })
  }
  handleChangeDosage(event){
    const newDose = event.target.value;
    this.setState({
      dose: newDose,
    })
  }
  handleChangeHours(event){
    const newHours = event.target.value;
    this.setState({
      hours: newHours,
    })
  }
  handleChangeStart(event){
    const newStart = event.target.value;
    this.setState({
      start: newStart,
    })
  }
  handleChangeNextDosage(event){
    const newNext = event.target.value;
    this.setState({
      next: newNext,
    })
  }
  handleChangeEnd(event){
    const newEnd = event.target.value;
    this.setState({
      end: newEnd,
    })
  }
  handleChangeId(event){
    const newId = event.target.value;
    this.setState({
      id: newId,
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onscheduleCreate(this.state);
    this.setState({id:''},{name:''},{dose:''},{hours:''},{start:''},{next:''},{end:''});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Id:
          <input name="med-id" type="text" value={this.state.id} onChange={this.handleChangeId}></input>
        </label>        
        <label>
          Name:
          <input name="med-name" type="text" value={this.state.name} onChange={this.handleChangeUser}></input>
        </label>
        <label>
          Dose:
          <input name="med-dose" type="text" value={this.state.dose} onChange={this.handleChangeDose}></input>
        </label>
        <label>
          Frequency in Hours:
          <input name="med-hours" type="text" value={this.state.hours} onChange={this.handleChangeHours}></input>
        </label>
        <label>
          Start Time:
          <input name="med-start" type="text" value={this.state.start} onChange={this.handleChangeStart}></input>
        </label>
        <label>
          Next Dose:
          <input name="med-next" type="text" value={this.state.next} onChange={this.handleChangeNextDosage}></input>
        </label>
        <label>
          End Time:
          <input name="med-end" type="text" value={this.state.end} onChange={this.handleChangeEnd}></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}