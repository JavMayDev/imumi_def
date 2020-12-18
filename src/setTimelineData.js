import { monthNames } from './constants'
import filterDocSet from './filterDocSet'
import docSet1 from './mocks/byCountries'
import docSet2 from './mocks/header2'
import docSet3 from './mocks/header3'

const timeLineData = monthNames.map(
    month =>
        new Object({
            monthName: month,
            weeks: new Array(4).fill(null).map(_ => []),
        })
)

var docSets = [docSet2, docSet3]
docSet1.forEach(docSet => docSets.unshift(docSet))

// timeLineData.forEach((month, monthIndex) =>
//     month.weeks.forEach((week, weekIndex) =>
//         docSets.forEach(docSet =>
//             week.push(
//                 filterDocSet(docSet, [2020, monthIndex + 1, weekIndex])
//             )
//         )
//     )
// )

timeLineData.forEach((month, monthIndex) =>
    month.weeks.forEach((week, weekIndex) =>
        week.push(filterDocSet(docs, [2020, monthIndex + 1, weekIndex]))
    )
)

import $ from 'jquery'
$('#toggler').click(_ => console.log(timeLineData))

export default timeLineData
