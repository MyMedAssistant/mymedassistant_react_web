import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedForm from '../components/MedForm'
import React from 'react'
import axios from 'axios'

const url = `https://my-medication-assistant.herokuapp.com/api/v1/scheduler/`;

class Schedule extends React.Component {

      constructor(props) {
          super(props);
          this.state = {
            med_schedules: props.med_schedules
          }
          this.scheduleCreateHandler = this.scheduleCreateHandler.bind(this);
      };
  
      async scheduleCreateHandler(schedule) {
          schedule['user']=1;
          schedule['medication']=2;
          schedule['hours']=6;
          const simulatedData={
            "user":1,
            "medication":2,
            "hours":6,
            "dosage":"600mg",
            "start":"2020-07-14T15:04:00Z",
            "last":"2020-07-14T15:04:00Z",
            "next_dosage":"2020-07-14T15:04:00Z",
            "end":"2020-07-14T15:04:00Z",
            "user_id_medication":"Vij_test"
          }
          console.log("this is the schedule", schedule);
          const response = await axios.post(url, schedule);
          const savedSchedule = response.data;
          console.log("this is savedSchedule", savedSchedule);
  
          const updatedMedSchedules = this.state.med_schedules.concat(savedSchedule);
          console.log("this is updated Med Schedules", updatedMedSchedules);

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
  
  // // export async function getStaticProps() 
  export async function getServerSideProps() {
  
      const response = await fetch(url);
      const med_schedules = await response.json();
      return {
          props: {
            med_schedules: med_schedules,
          },
      }
  }
  