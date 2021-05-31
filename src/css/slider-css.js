
const svgEncoded = (sliderText) => {
    
    const svgOrig = `
        <svg viewBox='0 0 50 30' xmlns='http://www.w3.org/2000/svg'>
            <style>
                .heavy{
                    font: bold 17px sans-serif;
                    dominant-baseline:central;
                    text-anchor:middle;
                }
            </style>
            <text x='50%' y='50%' class='heavy' fill='black'>
                ${sliderText}
            </text>
        </svg>
    `

    const replaceLogic = {
        '<' : '%3C',
        '>' : '%3E',
        '{' : '%7B',
        '}' : '%7D'
    }

    return svgOrig.replace( /[<>{}]/g, oneString => replaceLogic[oneString] )

} 

export const sliderCss = (day, hour, minute) => {

    const dayOfMonthToday = new Date().getDate()
    const monthToday = 1 + new Date().getMonth()

    day = +day <= dayOfMonthToday ? `${day}.${monthToday}.` : `${day}.${monthToday - 1}.`

    return `
        .sliders-container{
            margin: 10px 0;
        }

        .slide-container{
            width: 100%;
            margin: auto;
            padding: 10px 10px 0 10px;
        }

        .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 20px;
            border-radius: 5px;
            background: grey;
            outline: none;
            opacity: 0.7;
            -webkit-transition: .2s;
            transition: opacity .2s;
        }

        .slider:hover {
            opacity: 1;
            cursor: cell;
        }

        /* Special styling for WebKit/Blink */
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 50px;
            height: 30px;
            border: 0;
            border-radius: 3px;
            background: #ffffff;
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            opacity: 0.7;
        }

        /* All the same stuff for Firefox */
        .slider::-moz-range-thumb {
            width: 50px;
            height: 30px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: 0;
            border-radius: 3px;
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
            opacity: 0.7;
        }

        /* All the same stuff for IE */
        input[type=range]::-ms-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 50px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
        opacity: 0.7;
        }


        .slider-day::-webkit-slider-thumb {
            background-image: url("data:image/svg+xml, ${svgEncoded(day)} ");
        }
        .slider-day::-webkit-slider-thumb:hover {
            opacity: 1;
        }


        .slider-day::-moz-range-thumb {
            background-image: url("data:image/svg+xml, ${svgEncoded(day)} ");
        }
        .slider-day::-moz-range-thumb:hover {
            opacity: 1;
        }



        .slider-hour::-webkit-slider-thumb {
            background-image: url("data:image/svg+xml, ${svgEncoded( hour + ':' + minute )} ");
        }
        .slider-hour::-webkit-slider-thumb:hover {
            opacity: 1;
        }

        .slider-hour::-moz-range-thumb {
            background-image: url("data:image/svg+xml, ${svgEncoded( hour + ':' + minute )} ");
        }
        .slider-hour::-moz-range-thumb:hover {
            opacity: 1;
        }     
        `
}