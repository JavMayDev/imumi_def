import { Chart } from 'chart.js'
// import canvas from './canvas'
import { data } from './datasets'

export const chart = new Chart(document.getElementById('chartCanvas'), {
    type: 'line',
    data: data,
})
