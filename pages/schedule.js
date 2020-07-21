import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedItem from '../components/MedItem'
import React, { useContext } from 'react'
import AppContext from '../components/AppContext'
import Layout from '../components/Layout'

export default function Schedule() {

    const { schedules} = useContext(AppContext)


    return (
        <>
            <div>
                <Layout />
                <Nav />
                <main className={style.medschedule}>

                    <h1>Medication Schedule</h1>
                    <br></br>
                    <ul>
                        {schedules.map(schedule => <MedItem key={schedule.id} schedule={schedule} />)}
                    </ul>
                </main>
                <Footer />
            </div>
        </>
    )
}


