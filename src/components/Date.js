import React, { Component } from 'react';


class DateContainer extends Component {
        state = { selectDate : null, month: null
        };
    

    componentDidMount() {
        this.setDate();
    }

    setDate = (newDate) => {
       const date = newDate || new Date();
       const monthNames = ['Jan', 'Feb', 'Mar', 'Apr']
       this.setState({
           selectDate:
           ("as of "+ monthNames[date.getMonth()]) + " " + (date.getDate() -1)
       });
    };
/*
    getNextDate = () => {
        const { selectDate } = this.state
        currentDay = new Date(selectDate).getDate()
        nextDay = currentDay + 1
        const nextDate = new Date(nextDay)

        this.setDate(nextDate)
    } */
    render() {
        return(
            <div>{this.state.selectDate}
            </div>
        );
    }
}

export default DateContainer;