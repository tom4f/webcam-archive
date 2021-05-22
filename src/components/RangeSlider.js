import React, {Component} from 'react';

export default class RangeSlider extends Component {

    ranger = ( { name: sliderName, value: sliderValue} ) => {
        if (sliderName === 'day') {
            this.props.reactChange({
                day: +sliderValue,
            })
        }

        if (sliderName === 'time') {
            const hourSelected   = 7 + Math.floor(sliderValue / 60);
            const minuteSelected = sliderValue  - 60 * Math.floor(sliderValue / 60) ;
            this.props.reactChange({
                hour :   hourSelected,
                minute : minuteSelected
            })
        }
    }

    rangerStyle = {
        display: 'block',
        width : '90%',
        maxWidth : '640px',
        margin: '1rem auto',
    }

    render(){
        const {  state: { day, hour, minute } } = this.props;
        return(
            <span>
                <input
                    style={this.rangerStyle}
                    type="range"
                    name="day"
                    min="1"
                    max="31"
                    onChange={ (e) => this.ranger(e.target) }
                    value={ day }
                />
                <input
                    style={this.rangerStyle}
                    type="range"
                    name="time"
                    min="12"
                    max={ 16 * 60 - 3 }
                    step="15"
                    onChange={ (e) => this.ranger(e.target) }
                    value={ Number(hour) * 60 - 7 * 60 + Number(minute) }
                />
            </span>
        )
    }
}