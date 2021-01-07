import { monthNames } from './constants'
import filterDocSet from './filterDocSet'

// function getDateLimits (docs) {
//     // returns the max and min dates
//     let max, min

// }

const timeLineData = monthNames.map(
    month =>
        new Object({
            monthName: month,
            weeks: new Array(4).fill(null).map(_ => []),
        })
)

timeLineData.forEach((month, monthIndex) =>
    month.weeks.forEach((week, weekIndex) =>
        week.push(...filterDocSet(docs, [2020, monthIndex + 1, weekIndex]))
    )
)

import $ from 'jquery'
$('#toggler').click(_ => console.log(timeLineData))

export default timeLineData
