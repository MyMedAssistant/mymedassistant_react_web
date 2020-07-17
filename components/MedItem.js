import Link from 'next/link'
import React, { Component } from 'react';
import Alert from '../components/Alert'

class MedItem extends React.Component {
  constructor(props) {
    super(props);
    //logic to calculate the time difference
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    let d = new Date()
    const n = new Date(props.schedule.next_dosage)
    const e = new Date(props.schedule.end)
    let timeDiff = (n.getTime()-d.getTime())/hours
    this.state = {
      id: props.schedule.id,
      user_id_medication: props.schedule.user_id_medication,
      next_dosage: n,
      dosage:props.schedule.dosage,
      end: e,
      medication:props.schedule.medication,
      timing:timeDiff,
    }
  }
  render() {
    const n = new Date(this.state.next_dosage)
    const e = new Date(this.state.end)

    return (    
    <>

      <Alert timediff = {this.state.timing}/>
      <li key={this.state.id}>
        <Link href="/medication/[id]" as={`/medication/${this.state.id}`}>
          <a><b>{this.state.user_id_medication}</b></a>
        </Link>
      </li>
      <li><b>Med Name: </b>{this.state.medication}</li>
      <li><b>Dosage: </b>{this.state.dosage}</li>
      {/* <li><b>Inventory: </b>{this.state.dosage_count}</li> */}
      <li><em>NEXT DOSE:</em></li>
      <li><b>{n.toLocaleDateString()}</b></li>
      <li><b>{n.toLocaleTimeString()}</b></li>
      <li><b>Prescription Ends: </b>{e.toLocaleDateString()}</li>
      <br></br>

    </>
    )
  }
}

export default MedItem

