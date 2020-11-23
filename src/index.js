import './styles.scss'

import { diffWidth, chartCanvas } from './chart'
import { dataLength, data, datasetsAmount, colors } from './datasets'
import animate from 'velocity-animate'

// append indicators to body
for (let i = 0; i < datasetsAmount; i++) {
    let indicator = document.createElement('div')
    indicator.setAttribute('class', 'indicator')
    indicator.setAttribute('id', 'i' + i)
    indicator.style.backgroundColor = colors[i]
    document.body.appendChild(indicator)
}

var timeInterval = 1000

var i = 0
// var interval = setInterval(() => step(), timeInterval)

function step() {
    Velocity(
        chartCanvas,
        {
            right:
                i * diffWidth +
                ($(window).width() - $('#chartCanvas').width()) +
                'px',
        },
        {
            duration: timeInterval,
            easing: 'linear',
        }
    )
    for (let j = 0; j < datasetsAmount; j++) {
        var indicator = document.getElementById('i' + j)
        Velocity(
            indicator,
            { top: '-' + data.datasets[j].data[i + 10] * 50 + 'px' },
            { duration: timeInterval, easing: 'swing' }
        )
    }
    if (i == dataLength - 10) clearInterval(interval)
    else i++
}
