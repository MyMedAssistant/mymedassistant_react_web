import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedForm from '../components/MedForm'
import React from 'react'
import axios from 'axios'

const url = 'https://my-medication-assistant.herokuapp.com/api/v1/scheduler/';

class Schedule extends React.Component {

      constructor(props) {
          super(props);
          this.state = {
            med_schedules: props.med_schedules
          }
          this.scheduleCreateHandler = this.scheduleCreateHandler.bind(this);
      };
  
      async scheduleCreateHandler(schedule) {
          schedule['last']=schedule['start'];
          schedule['end']=schedule['start'];
          // function to calculate the time interval to get the next dose
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
          console.log('last =', schedule['last'], 'next = ',schedule['next']);
          console.log("this is the schedule", schedule);
          const response = await axios.post(url, schedule);
          const savedSchedule = response.data;
          console.log("this is savedSchedule", savedSchedule);
          const updatedMedSchedules = this.state.med_schedules.concat(savedSchedule);

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
  
  // export async function getStaticProps() 
  export async function getServerSideProps() {
  
      const response = await fetch(url);
      const med_schedules = await response.json();
      return {
          props: {
            med_schedules: med_schedules,
          },
      }
  }
  