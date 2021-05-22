import React, { Component } from 'react';
import './css/main.css';
import './css/webcam_archive.css';
import Top                  from './components/Top';
import Bottom               from './components/Bottom';
import ShowWebCam           from './components/ShowWebCam';
import SelectTime           from './components/SelectTime';
import WebCamSlideShow      from './components/WebCamSlideShow';
import RangeSlider          from './components/RangeSlider';
import { imgPath }          from './components/apiPath.js'

export default class App extends Component {
    // MOUNTING : 1st live cycle method = constructor()
    constructor(props) {
        super(props);
        // initial states
        this.state = {
            day:      new Date().getDate(),
            hour:     7,
            minute:   12,
            slideId:  0,
            timer :   0,
            webAuthor :   'empty'
        };
    }

    // MOUNTING : 2nd live cycle method = read parents prop; use sparingly
    // UPDATING : 1st live cycle method - e.g. place to set state based  on props
    static getDerivedStateFromProps(props, state){
        return { webAuthor : 'Tomas ' + props.autor }
    }

    // UPDATING : 2nd live cycle method - false/true = React should continue with rendering or not
    shouldComponentUpdate(){
        return true;
    }  

    // Change page
    reactChange = (value) => {
        this.setState(value);
    }

    // MOUNTING : 3rd live cycle method = render() -> will be always called
    // UPDATING : 3rd live cycle method = render() -> will be always called
    render(){
        // descructing states, e.g. this.state.allEntrie -> allEntries
        const { day, hour, minute } = this.state;
        const path = () => `${('0' + day).slice(-2)}-${('0' + hour).slice(-2)}-${('0' + minute).slice(-2)}`;
        return (
            <div className="top_container">
                <Top/>
                <div className="center_webcam">
                    <div className="header"><b>Kamera - měsíční historie</b></div>
                    <RangeSlider state={ this.state } reactChange={this.reactChange} />
                    <div style={{ display: "inline-block" }}>
                        <SelectTime       day={day} hour={hour} minute={minute} reactChange={this.reactChange}/>
                        <WebCamSlideShow  state={ this.state } reactChange={this.reactChange} />
                    </div>
                    <ShowWebCam
                        webCamImgSrc  = { `${imgPath}/kamera/archive/ip_kamera_${path()}.jpg` }
                        webCamImgHref = { `${imgPath}/kamera/archive/ip_kamera_full_hd_${path()}.jpg` }
                    /> 
                    Build with React
                </div>
                <Bottom/>
            </div>
        ) // return end
    } // render end

    // UPDATING : 3rd live cycle method - access to props and state before update - componentDidUpdate() must be also present
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //console.log('prevState.day: ' + prevState.day);
        return null
    }

    // UPDATING : 4th live cycle method - called after component is updated in DOM
    componentDidUpdate() {
      //console.log('this.state.day: ' + this.state.day);
    }

    // MOUNTING : 4th live cycle method - called after component is rendered
    componentDidMount(){
        this.setState({
            day : new Date().getDate()
        });
    }

    // UNMOUNTING: only one live cycle method - called if component is removed from DOM - e.g. clearInterval(timer)
    // componentWillUnmount() {
    // }
}