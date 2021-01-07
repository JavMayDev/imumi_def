import { monthNames } from './constants'
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
console.log('max-min:', dateLimits)

const timeLineData = monthNames.map(
    month =>
        new Object({
            monthName: month,
            weeks: new Array(4).fill(null).map(_ => []),
        })
)

// const timeLineData = new Array()

// const minYear = dateLimits.min.get
// while(true) {
//     if()
// }


timeLineData.forEach((month, monthIndex) =>
    month.weeks.forEach((week, weekIndex) =>
        week.push(...filterDocSet(docs, [2020, monthIndex + 1, weekIndex]))
    )
)

import $ from 'jquery'
$('#toggler').click(_ => console.log(timeLineData))

export default timeLineData
