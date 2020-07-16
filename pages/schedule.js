import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedItem from '../components/MedItem'
import React from 'react'


const url = 'https://my-medication-assistant.herokuapp.com/api/v1/scheduler/';

function Schedule(props){ 
          return (
            <>
              <div>
                <Nav />
                  <main  className = {style.medschedule}>
                    <h1>Medication Schedule</h1>
                    <br></br>
                      <ul>
                      {props.med_schedules.map(schedule=><MedItem key={schedule.id} schedule={schedule}/>)}
                      </ul>                 
                  </main>
                <Footer />
              </div>
             </>
          )
  }
  
  export default Schedule
  
  export async function getServerSideProps() {
  
      const response = await fetch(url);
      const med_schedules = await response.json();
      return {
          props: {
            med_schedules: med_schedules,
          },
      }
  }
  