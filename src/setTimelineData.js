import { monthNames, monthWidth } from './constants'
import filterDocSet from './filterDocSet'

function getDateLimits(docs) {
    let min = null,
        max = null

    // console.log( 'docs:', docs )
    docs.forEach(({ date }) => {
        let docDate = new Date(date + 'T00:00:00')
        if (!min || docDate < min) min = docDate
        if (!max || docDate > max) max = docDate
    })

    return { min, max }
}

var dateLimits = getDateLimits(docs)
const timeLineData = new Array()
const dateIndex = new Date(dateLimits.min)
dateIndex.setDate(1)

while (dateIndex <= dateLimits.max) {
    timeLineData.push(
        new Object({
            year: dateIndex.getFullYear(),
            monthName: monthNames[dateIndex.getMonth()],
            monthNum: dateIndex.getMonth(),
            weeks: new Array(4).fill(null).map(_ => []),
        })
    )
    dateIndex.setMonth(dateIndex.getMonth() + 1)
}

timeLineData.forEach(month =>
    month.weeks.forEach((week, weekIndex) =>
        week.push(
            ...filterDocSet(docs, [month.year, month.monthNum + 1, weekIndex])
        )
    )
)

// import $ from 'jquery'
// $('#toggler').click(_ => console.log(timeLineData))

const lineWidth = timeLineData.length * monthWidth
export { timeLineData, lineWidth }
