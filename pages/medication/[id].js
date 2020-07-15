import { useRouter } from 'next/router'
import axios from 'axios'


export default function ScheduleDetail(props) {

    const url = 'https://my-medication-assistant.herokuapp.com/api/v1/scheduler/';

    const router = useRouter();

    async function deleteHandler() {

        const response = await axios.delete(url + props.schedule.id)

        router.push('/');
    }

    return (
        <>
        <h1>I am a single grocery {props.schedule.user_id_medication}</h1>
        <button onClick={() => deleteHandler(props.schedule.id)}>Delete</button>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://my-medication-assistant.herokuapp.com/api/v1/scheduler/${context.params.id}`);
    const schedule = await response.json();
    console.log('this is id page of the medication schedule',schedule)
    return {
        props: {
            schedule
        }
    }
}