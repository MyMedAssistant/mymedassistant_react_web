import React from 'react'

export default class MedForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user:'Enter Name',
      medication:'Enter Med Name',
      dosage:'Enter Dose',
      hours:24,
      start:new Date(),
      next_dosage:new Date(),
      last:new Date(),
      end:new Date(),
      user_id_medication:'text',
    }
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeMedication = this.handleChangeMedication.bind(this);
    this.handleChangeDosage = this.handleChangeDosage.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangeNextDosage = this.handleChangeNextDosage.bind(this);
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
  handleChangeLast(event){
    const newLast = event.target.value;
    this.setState({
      last: newLast,
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
  handleSubmit(event){
    event.preventDefault();
    this.props.onscheduleCreate(this.state);
    this.setState({user:'', medication:'', dosage:'',hours:'',start:'',next_dosage:'',last:'',end:'',user_id_medication:''});
  }

  render(){
    // const redirectToReferrer = this.state.redirectToReferrer;
    // if (redirectToReferrer === true) {
    //     return <Redirect to="/schedule" />
    // }
    return (
      <form onSubmit={this.handleSubmit}>
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
        <label>
          Start Time:
          <input name="med-start" type="date-time local" value={this.state.start} onChange={this.handleChangeStart}></input>
        </label>
        <label>
          Next Dose:
          <input name="med-next" type="date-time local" value={this.state.next_dosage} onChange={this.handleChangeNextDosage}></input>
        </label>
        <label>
          Last Dose:
          <input name="med-last" type="date-time local" value={this.state.last} onChange={this.handleChangeLast}></input>
        </label>
        <label>
          End Day:
          <input name="med-end" type="date-time local" value={this.state.end} onChange={this.handleChangeEnd}></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
() => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomTimeInput = ({ value, onChange }) => (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ border: "solid 1px pink" }}
    />
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeInput
      customTimeInput={<ExampleCustomTimeInput />}
    />
  );
};