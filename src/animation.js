import { diffWidth, chartCanvas } from './chart'
import { dataLength, data, datasetsAmount } from './datasets'

var timeInterval = 1000
var i = 0
var interval = null

const run = () => setInterval(() => step(1), timeInterval)
const stop = () => clearInterval(interval)

function step(x) {
    i += x

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
}

export { run, stop, step, interval }
