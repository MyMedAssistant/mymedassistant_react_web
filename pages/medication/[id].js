import { useRouter } from 'next/router'
import axios from 'axios'
import Nav from '../../components/Nav'
import style from '../../scss/MedSchedule.module.scss'


export default function ScheduleDetail(props) {

    const url = `https://my-medication-assistant.herokuapp.com/api/v1/scheduler/`;

    const router = useRouter();

    async function deleteHandler() {

        const response = await axios.delete(url + props.schedule.id)

        router.push('/');
    }

    return (
        <>
        <Nav />
        <main className={style.medschedule}>
        <h1>{props.schedule.user_id_medication}</h1>
        <ul>
          <li>
            Dose:  {props.schedule.dosage}
          </li>
          <li>
            Frequency in hours: {props.schedule.hours}
          </li>
          <li>
            Start date: {props.schedule.start}
          </li>
          <li>
            Next dosage date and time: {props.schedule.next_dosage}
          </li>
          <li>
            End dosage date and time: {props.schedule.end}
          </li>
        </ul>
        <button onClick={() => deleteHandler(props.schedule.id)}>Delete</button>
        </main>
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