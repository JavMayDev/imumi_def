import Chart from 'chart.js'
import { data, dataLength } from './datasets'

// distance between each point
const diffWidth = 100

var chartCanvas = document.getElementById('chartCanvas')
chartCanvas.setAttribute('width', dataLength * diffWidth)
chartCanvas.setAttribute('height', 500)
const chart = new Chart(chartCanvas.getContext('2d')).Line(data)


export { chart, diffWidth, chartCanvas }
