import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import React from 'react'
import axios from 'axios'
import MedItem from '../components/MedItem'
import MedForm from '../components/MedForm'

// const url = 'http://localhost:8000/api/v1/scheduler/';


export default function Med_List(){
  return(
    <div>
      <Nav />
      <main  className = {style.medschedule}>
      <h1>Medication Schedule</h1>
      </main>
      <Footer />
    </div>
  ) 
}


// ____________________________________________________


// class Schedule extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           med_schedules: props.med_schedules
//         }
//         this.scheduleCreateHandler = this.scheduleCreateHandler.bind(this);
//     };

//     async scheduleCreateHandler(schedule) {
//         // schedule['user']= 1;
//         // grocery['price']=100;
//         const response = await axios.post(url, schedule);
//         const savedSchedule = response.data;

//         const updatedGroceries = this.state.groceries.concat(savedSchedule);
//         console.log('updatedGroceries IS:', updatedGroceries)

//         this.setState({
//             groceries: updatedGroceries
//         })

//     }

// //     render() {
// //         return (
// //           <>
// //             <div className="container" className={style.medschedule}>
// //                 <Nav page="home"/>
// //                 <h1>Groceries List</h1>
// //                 <ul className={style.listitems}>
// //                     {this.state.groceries.map(grocery => <MedItem key={grocery.id} grocery={grocery}/>)}
// //                 </ul>
// //                 {/* <GroceryForm onGroceryCreate={this.groceryCreateHandler} /> */}

// //             </div>
// //             <Footer />
// //           </>
// //         )
// //     }
// // }


// // export default Home

// // // export async function getStaticProps() {
// export async function getServerSideProps() {

//     const response = await fetch(url);
//     const med_schedules = await response.json();
//     return {
//         props: {
//           med_schedules: med_schedules,
//         },
//     }
// }
