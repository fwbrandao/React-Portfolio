import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './jsClock.css';

class JsClock extends Component {

    static contextTypes = {
        router: PropTypes.object
      }

    constructor() {
        super()
        let d = new Date()
        this.state = {
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString(),
            hours: d.getHours(),
            minutes: d.getMinutes(),
            seconds: d.getSeconds()
        }
        this.countingSecond = this.countingSecond.bind(this)
    }

    countingSecond() {
        const secondsDegrees = ((this.state.seconds / 60) * 360) + 90;
        const secondHand = document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

        const minsDegrees = ((this.state.minutes / 60) * 360) + ((this.state.seconds / 60) * 6) + 90;
        const minsHand = document.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;

        const hourDegrees = ((this.state.hours / 12) * 360) + ((this.state.minutes / 60) * 30) + 90;
        const hourHand = document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;

        let d = new Date()
        this.setState({
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString(),
            hours: d.getHours(),
            minutes: d.getMinutes(),
            seconds: d.getSeconds()
        })
    }

    componentDidMount() {
        setInterval(this.countingSecond, 1000)
    }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (

            <div className="mainClock">
                <div className='goBack'>
                    <button className='btn btn-success' onClick={this.context.router.history.goBack}>Go Back</button>
                </div>
                <div>
                    <div className="fullMoment">
                        <h2>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.time}</h2>
                    </div>
                </div>
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand"></div>
                        <div className="hand min-hand"></div>
                        <div className="hand second-hand"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JsClock;