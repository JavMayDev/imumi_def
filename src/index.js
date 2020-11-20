import './styles.scss'

import { diffWidth, chartCanvas } from './chart'
import { dataLength, data, datasetsAmount } from './datasets'
// import Velocity from 'velocity-animate'

for (let i = 0; i < datasetsAmount; i++) {
    let indicator = document.createElement('div')
    indicator.setAttribute('class', 'indicator')
    document.body.appendChild(indicator)
}

let timeInterval = 17000

function runAnimation() {
    for (let i = 0; i < dataLength - 20; i++) {
        console.log('data: ', data.datasets[0].data[i + 10])
        Velocity(
            chartCanvas,
            {
                right: i * diffWidth + 'px',
            },
            {
                duration: timeInterval,
                easing: 'linear',
            }
        )
    }
}

// runAnimation()
