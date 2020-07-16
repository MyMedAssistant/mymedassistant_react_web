import Link from 'next/link'
import React, { Component } from 'react';

function MedItem(props){
  console.log("this is next expression with to Locale String", Date(props.schedule.next_dosage).toLocaleString())
  console.log("this is start expression", Date(props.schedule.start))
  const d = new Date(props.schedule.next_dosage)
  const e = new Date(props.schedule.end)
  // console.log("this is time difference", Date(props.schedule.next_dosage).getTime()-d.getTime());
  
  return (
    <>
      <li key={props.schedule.id}>
        <Link href="/medication/[id]" as={`/medication/${props.schedule.id}`}>
          <a><b>User ID:  </b>{props.schedule.user_id_medication}</a>
        </Link>
      </li>
      <li>Dosage: {props.schedule.dosage}</li>
      <li>Next Dose is Due: {d.toLocaleString()}</li>
      <li>When prescription ends: {e.toLocaleString()}</li>
    </>
  )
}


// class MedItem extends React.Component {
//   constructor(props) {
//     // console.log("inside the meditem class, this is props.schedule")
//     super(props);
//     this.state = {
//       id: props.schedule.id,
//       user_id_medication: props.schedule.user_id_medication,
//       next_dosage: props.schedule.next_dosage,
//       dosage:props.schedule.dosage,
//       end:props.schedule.end,
//       medication:props.schedule.medication,
//       alert_user:'',
//     }
//   }
//   render() {
//     // try and get the new Date format to work on this
//     const Next = (ob) => new Date(ob)
//     let seedose = Next(this.state.next_dosage)
//     // console.log("see dose", seedose)

//     // try and work out the time difference
//     var minutes = 1000 * 60;
//     var hours = minutes * 60;
//     let d = new Date()
//     let timediff = Next(this.state.next_dosage).getTime()-d.getTime()
//     console.log("this is the time diff in hours", timediff/hours)
//     if (timediff<3){
//       console.log("it is due soon");
//     } else {
//       console.log(Next(this.state.next_dosage))
//     }

//     return (    
//     <>
//       <li key={this.state.id}>
//         <Link href="/medication/[id]" as={`/medication/${this.state.id}`}>
//           <a><b>User ID:  </b>{this.state.user_id_medication}</a>
//         </Link>
//       </li>
//       <li>Med Name: {this.state.medication}</li>
//       <li>Dosage: {this.state.dosage}</li>
//       <li>Next Dose is Due: {this.state.next_dosage}</li>
//       <li>When prescription ends: {this.state.end}</li>
//     </>
//     )
//   }
// }

export default MedItem

