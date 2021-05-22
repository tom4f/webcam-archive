import React, { Component } from 'react';

export default class SelectTime extends Component {
    
    selectClicked = event => {
        let { reactChange, day, hour, minute } = this.props;
        const selectName = event.target.name;
        if (selectName === 'selectDay')     day    = +event.target.value;
        if (selectName === 'selectHour')    hour   = +event.target.value;
        if (selectName === 'selectMinute')  minute = +event.target.value;
        reactChange({
            day,
            hour,
            minute
        });
    }

    render() {
        const { day, hour, minute } = this.props;

        let optionDay = [];
        for (let d = 1 + (new Date().getDate()); d<=31; d+=1){
            optionDay.push(<option key={d} value={d} >{d}</option>) };
        for (let d = 1; d <= new Date().getDate(); d+=1){
            optionDay.push(<option key={d} value={d} >{d}</option>) };

        let optionHour = [];
        for (let h = 7  ; h<23; h++){
            optionHour.push(<option key={h} value={h} >{h}  </option>) };

        let optionMinute = [];
        for (let m = 12; m<58; m+=15){
            optionMinute.push(<option key={m} value={m}>{m}</option>) };

        return (
            <span>
                Den:
                <select name="selectDay"   onChange={(e) => this.selectClicked(e)} value={day} >
                    {optionDay}
                </select>                
                / Čas: 
                <select name="selectHour"   onChange={(e) => this.selectClicked(e)} value={hour} >
                    {optionHour}
                </select>
                <b>:</b>
                <select name="selectMinute" onChange={(e) => this.selectClicked(e)} value={minute}>
                    {optionMinute}
                </select>
            </span>
        );
    }
}