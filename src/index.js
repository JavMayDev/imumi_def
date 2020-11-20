import './styles.scss'

import { diffWidth, chartCanvas } from './chart'
import { dataLength } from './datasets'
// import Velocity from 'velocity-animate'

let timeInterval = 17000

for (let i = 0; i < dataLength - 20; i++) {
    console.log('right progress:', i * diffWidth + 'px')
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
