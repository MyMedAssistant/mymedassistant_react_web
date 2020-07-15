import React from 'react'

export default class MedForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id:0,
      medication:0,
      dosage:'text',
      hours:0,
      start:'text',
      next_dosage:'text',
      end:'text',
      user_id_medication:'text',
      // redirection:false,
    }
    // this.handleChangeId = this.handleChangeId.bind(this);
    // this.handleChangeMedication = this.handleChangeMedication.bind(this);
    this.handleChangeDosage = this.handleChangeDosage.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeNextDosage = this.handleChangeNextDosage.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeUser_Id_Med = this.handleChangeUser_Id_Med.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChangeId(event){
  //   const newId = event.target.value;
  //   this.setState({
  //     id: newId,
  //   })
  // }
  // handleChangeMedication(event){
  //   const newMedication = event.target.value;
  //   this.setState({
  //     medication: newMedication,
  //   })
  // }
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
    const newStart = event.target.value;
    this.setState({
      start: newStart,
    })
  }
  handleChangeNextDosage(event){
    const newNext = event.target.value;
    this.setState({
      next_dosage: newNext,
    })
  }
  handleChangeEnd(event){
    const newEnd = event.target.value;
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
  // handleChangeDose(event){
  //   const newDose = event.target.value;
  //   this.setState({
  //     dose: newDose,
  //   })
  // }
  handleSubmit(event){
    event.preventDefault();
    this.props.onscheduleCreate(this.state);
    this.setState({dosage:'',hours:'',start:'',next_dosage:'',end:'',user_id_medication:''});
  }

  render(){
    // const redirectToReferrer = this.state.redirectToReferrer;
    // if (redirectToReferrer === true) {
    //     return <Redirect to="/schedule" />
    // }
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          Id:
          <input name="med-id" type="text" value={this.state.id} onChange={this.handleChangeId}></input>
        </label>         */}
        {/* <label>
          Medication:
          <input name="medication" type="text" value={this.state.medication} onChange={this.handleChangeMedication}></input>
        </label> */}
        <label>
          Your Medication ID as Text:
          <input name="med-user_id_med" type="text" value={this.state.user_id_medication} onChange={this.handleChangeUser_Id_Med}></input>
        </label>
        <label>
          Dose:
          <input name="med-dose" type="text" value={this.state.dosage} onChange={this.handleChangeDosage}></input>
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
          <input name="med-next" type="text" value={this.state.next_dosage} onChange={this.handleChangeNextDosage}></input>
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