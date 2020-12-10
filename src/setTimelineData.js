import { monthNames } from './constants'
import filterDocSet from './filterDocSet'
import docSet1 from './mocks/byCountries'
import docSet2 from './mocks/header2'

const timeLineData = monthNames.map(
    month =>
        new Object({
            monthName: month,
            weeks: new Array(4).fill(null).map(_ => []),
        })
)

var docSets = [docSet2]
docSet1.forEach(docSet => docSets.push(docSet))

timeLineData.forEach((month, monthIndex) =>
    month.weeks.forEach((week, weekIndex) =>
        docSets.forEach(docSet =>
            week.push(
                filterDocSet(docSet, [2020, monthIndex + 1, weekIndex + 1])
            )
        )
    )
)

import $ from 'jquery'
$('#toggler').click(_ => console.log(timeLineData))

export default timeLineData
