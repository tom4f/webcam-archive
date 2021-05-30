import React, {Component} from 'react';
import Style from 'style-it';
import { sliderCss } from '../css/slider-css.js'

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

    render(){
        const {  state: { day, hour, minute } } = this.props;
        return Style.it( sliderCss(day, hour, minute),
            <div className="sliders-container" >
                <div className="slide-container">
                    <input
                        className="slider slider-day"
                        type="range"
                        name="day"
                        min="1"
                        max="31"
                        onChange={ (e) => this.ranger(e.target) }
                        value={ day }
                    />
                </div>
                <div className="slide-container">
                    <input
                        className="slider slider-hour"
                        type="range"
                        name="time"
                        min="12"
                        max={ 16 * 60 - 3 }
                        step="15"
                        onChange={ (e) => this.ranger(e.target) }
                        value={ Number(hour) * 60 - 7 * 60 + Number(minute) }
                    />
                </div>
            </div>
        )
    }
}