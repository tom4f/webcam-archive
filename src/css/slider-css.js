
const svgOrig = (text) => `
    <svg viewBox='0 0 30 50' xmlns='http://www.w3.org/2000/svg'>
        <style>
            .heavy{
                font: bold 30px sans-serif;
            }
        </style>
        <text x='0' y='50' class='heavy' fill='yellow'>
            ${text}
        </text>
    </svg>
`

const svgEncoded = (text, fontSize=20) => `
    %3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E
        %3Cstyle%3E
            .heavy %7B
                font: bold ${fontSize}px sans-serif;
            %7D
        %3C/style%3E
        %3Ctext x='0' y='22' class='heavy' fill='black'%3E
            ${text}
        %3C/text%3E
    %3C/svg%3E
`

export const sliderCss = (day, hour, minute) => `

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
    width: 30px;
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
    width: 30px;
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
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  opacity: 0.7;
}


.slider-day::-webkit-slider-thumb {
    background-image: url("data:image/svg+xml, ${svgEncoded(day)} ");
}
.slider-day::-webkit-slider-thumb:hover {
    background-image: url("data:image/svg+xml, ${svgEncoded(day, 25)} ");
    opacity: 1;
}


.slider-day::-moz-range-thumb {
    background-image: url("data:image/svg+xml, ${svgEncoded(day)} ");
}
.slider-day::-moz-range-thumb:hover {
    background-image: url("data:image/svg+xml, ${svgEncoded(day, 25)} ");
    opacity: 1;
}


.slider-hour::-webkit-slider-thumb {
    background-image: url("data:image/svg+xml, ${svgEncoded(hour)} ");
}
.slider-hour::-webkit-slider-thumb:hover {
    background-image: url("data:image/svg+xml, ${svgEncoded(hour, 25)} ");
    opacity: 1;
}


.slider-hour::-moz-range-thumb {
    background-image: url("data:image/svg+xml, ${svgEncoded(hour)} ");
}
.slider-hour::-moz-range-thumb:hover {
    background-image: url("data:image/svg+xml, ${svgEncoded(hour, 25)} ");
    opacity: 1;
}     



`