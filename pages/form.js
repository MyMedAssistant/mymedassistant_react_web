import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedForm from '../components/MedForm'


export default function AddMedtoForm(){
  return(
    <div>
      <Nav />
      <main  className = {style.medschedule}>
      <h1>Add Medication to Schedule</h1>
      <MedForm />
      {/* <MedForm onMedCreate={this.medCreateHandler} /> */}
      </main>
      <Footer />
    </div>
  ) 
}