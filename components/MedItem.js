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
      <li key={this.state.id}>
        <Link href="/medication/[id]" as={`/medication/${this.state.id}`}>
          <a><b>{this.state.user_id_medication}</b></a>
        </Link>
      </li>
      <li>Med Name: {this.state.medication}</li>
      <li>Dosage: {this.state.dosage}</li>
      <li><em>NEXT DOSE:</em></li>
      <Alert timediff = {this.state.timing}/>
      <li><b>{n.toLocaleDateString()}</b></li>
      <li><b>{n.toLocaleTimeString()}</b></li>
      <li>When prescription ends: {e.toLocaleDateString()}</li>
    </>
    )
  }
}

export default MedItem

