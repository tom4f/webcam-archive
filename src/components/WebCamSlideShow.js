import React, { useState } from 'react';

const WebCamSlideShow = ( { state: { day, hour, minute, timer}, reactChange } ) => {
    const [startButton, setStartButton] = useState(true)

    const startShow = () =>{

        const Presentation = () => {

            const add15minutes = () => { 
                if (minute < 45) return minute+=15
                minute = 12
                if (hour < 22)   return hour++
                hour = 7
                if (day < 31)    return day++
                day = 1
            }

            add15minutes()

            reactChange({
                day,
                hour,
                minute
            });
        };

        timer = setInterval(Presentation, 2000);
        reactChange({
            timer: timer
        })

        setStartButton( prev => !prev );
    };

    const stopShow = () =>{
        clearInterval(timer);
        setStartButton( prev => !prev );
    };

    return (
        <>
             { startButton
                ? <button id='startShow' onClick={ () => startShow() } >Spustit Slide Show </button>
                : <button id='stopShow'  onClick={ () => stopShow()  } >Zastavit Slide Show</button> }
        </>
    )
}

export default WebCamSlideShow;