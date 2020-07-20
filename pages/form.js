import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/MedSchedule.module.scss'
import MedForm from '../components/MedForm'
import React, { useContext } from 'react'
import AppContext from '../components/AppContext'
import axios from 'axios'
import Router from 'next/router';
import Layout from '../components/Layout'

// const url = 'http://localhost:8000/api/v1/scheduler/'


export default function AddMedForm() {

    const { createSchedule } = useContext(AppContext);

    async function scheduleCreateHandler(schedule) {
        schedule['last'] = schedule['start'];
        // function to calculate the time interval to get the next dose
        function dateAdd(date, interval, units) {
            if (!(date instanceof Date))
                return undefined;
            var ret = new Date(date);
            var checkRollover = function () { if (ret.getDate() != date.getDate()) ret.setDate(0); };
            switch (String(interval).toLowerCase()) {
                case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
            }
            return ret;
        }
        schedule['next_dosage'] = dateAdd(schedule['last'], 'hour', schedule['hours']);
        // schedule['dosage_count']=100;

        // const response = await axios.post(url, schedule);
        // const savedSchedules = response.data;
        // const updatedMedSchedules = this.state.med_schedules.concat(savedSchedules);
        // this.setState({
        //     med_schedules: updatedMedSchedules,
        // });

        await createSchedule(schedule);

        Router.push('/schedule');

    }


    return (
        <>
            <div>
              <Layout />
                <Nav />
                <main className={style.medschedule}>
                    <h1>Add Medication to Schedule</h1>
                    <MedForm onscheduleCreate={scheduleCreateHandler} />
                </main>
                <Footer />
            </div>
        </>
    )
}

