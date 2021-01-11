import $ from 'jquery'
import setPathIndicator from './setPathIndicator'
import { monthWidth, svgLineHeight } from './constants'
import { timeLineData, lineWidth } from './setTimelineData'
import insertDocsIntoDOM from './insertDocsIntoDOM'
import focusDate from './focusDate'

$(document).ready(() => {
    // get static elements
    const monthTags = $('#monthTags')
    const svgLine = $('#svgLine')
    const svgIndicator = $('#svgIndicator')
    const infoDiv = $('#tl_info')

    svgLine.attr('height', svgLineHeight)
    svgLine.attr('width', lineWidth)
    svgIndicator.attr('width', lineWidth)

    timeLineData.forEach((month, i) => {
        const rect = $(
            document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        )
        rect.attr('x', monthWidth * i)
        rect.attr('height', svgLineHeight)
        rect.attr('width', 2)

        svgLine.append(rect)

        const span = document.createElement('span')
        span.classList.add('monthSpan')
        span.setAttribute('id', month.year + i)
        span.style.position = 'absolute'
        span.style.transform = 'translateX(' + (i * monthWidth - 7) + 'px)'
        span.appendChild(
            document.createTextNode(
                month.year.toString().substring(2, 4) +
                    '/' +
                    month.monthName.substring(0, 3).toUpperCase()
            )
        )

        monthTags.append(span)

        for (let j = 0; j < 4; j++) {
            const circle = $(
                document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            )

            // set week cricle
            circle.attr('cx', i * monthWidth + (j + 1) * 50)
            circle.attr('cy', svgLineHeight / 2)
            circle.attr('r', 6)
            circle.attr('fill', '#aaa')
            circle.attr('class', 'tl_weekCircle')
            circle.attr('id', month.year + month.monthName + j)

            circle.click(({ target }) => {
                infoDiv.empty()
                setPathIndicator(target)
                focusDate(target, month.year + i)
                insertDocsIntoDOM(timeLineData[i].weeks[j])
            })

            svgLine.append(circle)
        }
    })
})
