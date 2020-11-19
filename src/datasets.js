const data = { labels: [], datasets: [] }

const dataLength = 20
const datasetsAmount = 3

// set each dataset
for (var j = 0; j < datasetsAmount; j++)
    data.datasets.push({
        label: 'dataset' + j,
        data: [],
    })

// fill datasets with random data
for (var i = 0; i < dataLength; i++) {
    data.labels.push(i)
    for (var j = 0; j < datasetsAmount; j++)
        data.datasets[j].data.push(Math.random() * 10)
}

export { data }
