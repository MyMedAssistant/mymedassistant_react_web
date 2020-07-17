import '../scss/style.scss'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import axios from 'axios'
import AppContext from '../components/AppContext';

const API_URL = 'http://localhost:8000/api/v1/'

export default class MyApp extends App {
    state = {
        user: null,
        access: null,
        refresh: null,
        schedules: [],
    };

    componentDidMount = () => {

        const user = localStorage.getItem('coolapp-user');
        const access = localStorage.getItem('coolapp-token');

        if (user && access) {
            this.setState({
                user,
                access,
            });
        } else {
            Router.push('/signin');
        }

    };

    signIn = async (username, password) => {


        const tokenInfo = await this.logIn(username, password);

        // If you want to store values in localStorage, here's how

        // localStorage.setItem('coolapp-user', username);
        // localStorage.setItem('coolapp-token', tokenInfo.access);


        this.setState(
            {
                user: username,
                access: tokenInfo.access,
                refresh: tokenInfo.refresh,
            });

        const schedules = await this.fetchSchedules();

        this.setState({
            schedules
        }, () => {
            Router.push('/schedule');
        })

    };

    signOut = () => {
        localStorage.removeItem('coolapp-user');
        localStorage.removeItem('coolapp-token');
        this.setState({
            user: null,
            access: null,
            refresh: null,
        });
        Router.push('/signin');
    };



    logIn = async (username, password) => {

        const response = await axios.post(API_URL + 'token/', { username, password });

        // TODO: handle bad credentials, unknown uses, etc.
        return response.data;

    };

    refresh = async (refreshToken) => {

        const url = API_URL + 'token/refresh/';

        const response = await axios.post(url, { refresh: refreshToken })

        console.log('refreshToken', response.data);

        this.setState({
            access: response.data.access
        })

        // Update localstorage as well if desired


        return response.data.access;
    };

    deleteSchedule = async (id) => {

        const accessToken = this.state.access;

        let url = API_URL + 'scheduler/' + id;

        let config = {
            headers: { 'Authorization': "Bearer " + accessToken }
        };

        await axios.delete(url, config);

        this.setState({
            schedules: this.state.schedules.filter(item => item.id !== id)
        })

    }

    createSchedule = async (schedule) => {

        const accessToken = this.state.access;

        let url = API_URL + 'scheduler/';

        let config = {
            headers: { 'Authorization': "Bearer " + accessToken }
        };

        const response = await axios.post(url, schedule, config);

        console.log(response.data);

        this.setState({
            schedules: this.state.schedules.concat(response.data)
        })
    }

    fetchSchedules = async () => {

        if (!this.state.user) {
            return []
        }

        const accessToken = this.state.access;

        let url = API_URL + 'scheduler/';

        let config = {
            headers: { 'Authorization': "Bearer " + accessToken }
        };

        let response = await axios.get(url, config);

        console.log('first try', response.status)

        if (response.status !== 200) {

            const refreshToken = this.state.refresh;

            accessToken = await this.refresh(refreshToken);

            config.headers.Authorization = "Bearer " + accessToken;

            response = await axios.get(url, config);

            console.log('try again with refreshed token', response.status)

            if (response.status == 200) {
                this.setState({ access: accessToken })
            } else {
                console.error('let user know that somethings broken')
            }
        }

        return response.data;
    }


    render() {
        const { Component, pageProps } = this.props;

        return (
            <AppContext.Provider value={{
                user: this.state.user,
                access: this.state.access,
                signIn: this.signIn,
                signOut: this.signOut,
                refresh: this.state.refresh,
                schedules: this.state.schedules,
                deleteSchedule: this.deleteSchedule,
                createSchedule: this.createSchedule,
            }}>
                <Component {...pageProps} />
            </AppContext.Provider>
        );
    }
}
