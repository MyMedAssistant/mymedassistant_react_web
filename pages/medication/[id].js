import { useRouter } from 'next/router'
import axios from 'axios'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import style from '../../scss/MedSchedule.module.scss'
import Router from 'next/router';


export default function ScheduleDetail(props) {

    const url = `https://my-medication-assistant.herokuapp.com/api/v1/scheduler/`;

    const router = useRouter();

    async function deleteHandler() {
        const response = await axios.delete(url + props.schedule.id)
        router.push('/schedule');
    }
    
    console.log("what is in the props here", props);

    const n = new Date(props.schedule.next_dosage)
    const e = new Date(props.schedule.end)
    const s = new Date(props.schedule.start)

    return (
        <>
        <Nav />
        <main className={style.medschedule}>
        <h1>{props.schedule.user_id_medication}</h1>
        <ul>
          <li>
            Dose:  {props.schedule.dosage}
          </li>
          {/* <li>
            Inventory:  {props.schedule.dosage_count}
          </li> */}
          <li>
            Frequency in hours: {props.schedule.hours}
          </li>
          <li>
            Start date: {s.toLocaleString()}
          </li>
          <li>
            Next dosage date and time: {n.toLocaleString()}
          </li>
          <li>
            End dosage date and time: {e.toLocaleString()}
          </li>
        </ul>
        <button onClick={() => deleteHandler(props.schedule.id)}>Delete</button>
        <button onClick={() => Router.push('/update/[id]',`/update/${props.schedule.id}`)}>Change</button>

        </main>
        <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://my-medication-assistant.herokuapp.com/api/v1/scheduler/${context.params.id}`);
    const schedule = await response.json();
    return {
        props: {
            schedule
        }
    }
}