import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import style from '../../scss/MedSchedule.module.scss'
import Router from 'next/router';
import React, { useContext } from 'react'
import AppContext from '../../components/AppContext';


export default function ScheduleDetail() {

    const router = useRouter();

    const { schedules, deleteSchedule } = useContext(AppContext);

    async function deleteHandler() {
        await deleteSchedule(router.query.id);
        // router.push('/schedule');
    }


    const schedule = schedules.find(item => item.id == router.query.id)

    if (!schedule) {
        return null;
    }

    const n = new Date(schedule.next_dosage)
    const e = new Date(schedule.end)
    const s = new Date(schedule.start)

    return (
        <>
            <Nav />
            <main className={style.medschedule}>
                <h1>{schedule.user_id_medication}</h1>
                <ul>
                    <li>
                        Dose:  {schedule.dosage}
                    </li>
                    <li>
                        Frequency in hours: {schedule.hours}
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
                <button onClick={() => deleteHandler(schedule.id)}>Delete</button>
                <button onClick={() => Router.push('/update/[id]', `/update/${schedule.id}`)}>Change</button>

            </main>
            <Footer />
        </>
    )
}
