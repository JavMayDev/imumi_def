const data = { labels: [], datasets: [] }

const dataLength = 50
const datasetsAmount = 3


const colors = ['#f55', '#5f5', '#55f']

// set each dataset
for (var j = 0; j < datasetsAmount; j++)
    data.datasets.push({
        label: 'dataset' + j,
        data: [],

	// color settings
        fillColor: 'rgba(0,0,0,0)',
        strokeColor: colors[j],
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
    })

// fill datasets with random data
for (var i = 0; i < dataLength; i++) {
    data.labels.push(i)
    for (var j = 0; j < datasetsAmount; j++)
        data.datasets[j].data.push(Math.random() * 10)
}

export { data, dataLength, datasetsAmount, colors }
