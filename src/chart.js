import Chart from 'chart.js'
import { data, dataLength, datasetsAmount, colors } from './datasets'

// distance between each point
const diffWidth = 100

var chartCanvas = document.getElementById('chartCanvas')
chartCanvas.setAttribute('width', dataLength * diffWidth)
chartCanvas.setAttribute('height', 500)
const chart = new Chart(chartCanvas.getContext('2d')).Line(data)

// append indicators to body
for (let i = 0; i < datasetsAmount; i++) {
    let indicator = document.createElement('div')
    indicator.setAttribute('class', 'indicator')
    indicator.setAttribute('id', 'i' + i)
    indicator.style.backgroundColor = colors[i]
    document.body.appendChild(indicator)
}

export { chart, diffWidth, chartCanvas }
