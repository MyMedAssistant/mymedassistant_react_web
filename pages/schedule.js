import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import React from 'react'
import axios from 'axios'
import MedItem from '../components/MedItem'
import MedForm from '../components/MedForm'

// const url = '';


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


// const url = 'https://groceries-fun-api.herokuapp.com/api/v1/groceries/';

// class Home extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             groceries: props.groceries
//         }
//         this.groceryCreateHandler = this.groceryCreateHandler.bind(this);
//     };

//     async groceryCreateHandler(grocery) {
//         grocery['user']= 1;
//         // grocery['price']=100;
//         const response = await axios.post(url, grocery);
//         const savedGrocery = response.data;

//         const updatedGroceries = this.state.groceries.concat(savedGrocery);
//         console.log('updatedGroceries IS:', updatedGroceries)

//         this.setState({
//             groceries: updatedGroceries
//         })

//     }

//     render() {
//         return (
//           <>
//             <div className="container" className={style.medschedule}>
//                 <Nav page="home"/>
//                 <h1>Groceries List</h1>
//                 <ul className={style.listitems}>
//                     {this.state.groceries.map(grocery => <MedItem key={grocery.id} grocery={grocery}/>)}
//                 </ul>
//                 {/* <GroceryForm onGroceryCreate={this.groceryCreateHandler} /> */}

//             </div>
//             <Footer />
//           </>
//         )
//     }
// }


// export default Home

// // export async function getStaticProps() {
// export async function getServerSideProps() {

//     const response = await fetch(url);
//     const groceries = await response.json();
//     return {
//         props: {
//             groceries: groceries,
//         },
//     }
// }
