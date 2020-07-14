// import { useRouter } from 'next/router'
// // import axios from 'axios'


// export default function GroceryDetail(props) {

//     const url = 'https://groceries-fun-api.herokuapp.com/';

//     const router = useRouter();

//     async function deleteHandler() {

//         const response = await axios.delete(url + props.grocery.id)

//         router.push('/');
//     }

//     return (
//         <>
//         <h1>I am a single grocery {props.grocery.name}</h1>
//         <button onClick={() => deleteHandler(props.grocery.id)}>Delete</button>
//         </>
//     )
// }

// export async function getServerSideProps(context) {
//     const response = await fetch(`https://groceries-fun-api.herokuapp.com/api/v1/groceries/${context.params.id}`);
//     const grocery = await response.json();
//     console.log('grocery',grocery)
//     return {
//         props: {
//             grocery
//         }
//     }
// }