import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedForm from '../components/MedForm'
import MedItem from '../components/MedItem'
import React from 'react'
import axios from 'axios'

const url = 'http://localhost:8000/api/v1/scheduler/';

// export default function AddMedtoForm(){
//   return(
//     <div>
//       <Nav />
//       <main  className = {style.medschedule}>
//       <h1>Add Medication to Schedule</h1>
//       <MedForm />
//       {/* <MedForm onMedCreate={this.medCreateHandler} /> */}
//       </main>
//       <Footer />
//     </div>
//   ) 
// }

class Schedule extends React.Component {

      constructor(props) {
          super(props);
          this.state = {
            med_schedules: props.med_schedules
          }
          this.scheduleCreateHandler = this.scheduleCreateHandler.bind(this);
      };
  
      async scheduleCreateHandler(schedule) {
          // schedule['user']= 1;
          // grocery['price']=100;
          const response = await axios.post(url, schedule);
          const savedSchedule = response.data;
  
          const updatedMedSchedules = this.state.med_schedules.concat(savedSchedule);
          // console.log('updatedGroceries IS:', updatedGroceries)
  
          this.setState({
              med_schedules: updatedMedSchedules
          })
  
      }
  
      render() {
          return (
            <>
              <div>
                <Nav />
                  <main  className = {style.medschedule}>
                    <h1>Add Medication to Schedule</h1>
                 
                  <MedForm onscheduleCreate={this.scheduleCreateHandler} />
                  </main>
                <Footer />
              </div>
             </>
          )
      }
  }
  
  
  export default Schedule
  
  // // export async function getStaticProps() {
  export async function getServerSideProps() {
  
      const response = await fetch(url);
      const med_schedules = await response.json();
      return {
          props: {
            med_schedules: med_schedules,
          },
      }
  }
  