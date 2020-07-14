import React from 'react'

export default class MedForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id:0,
      name:'',
      dose: '',
      hours:0,
      start:0,
      next:0,
      end:0,
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDose = this.handleChangeDose.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeNext = this.handleChangeNext.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(event){
    const newName = event.target.value;
    this.setState({
      name: newName,
    })
  }
  handleChangeDose(event){
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
  handleChangeNext(event){
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
    this.props.onMedCreate(this.state);
    this.setState({name:''});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="med-name" type="text" value={this.state.name} onChange={this.handleChangeName}></input>
        </label>
        <label>
          Dose:
          <input name="med-dose" type="text" value={this.state.dose} onChange={this.handleChangeDose}></input>
        </label>
        <label>
          Frequency in Hours:
          <input name="med-hours" type="text" value={this.state.hours} onChange={this.handleChangeHours}></input>
        </label>
        <button>OK</button>
      </form>
    )
  }
}