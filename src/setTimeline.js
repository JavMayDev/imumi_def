import $ from 'jquery'

import setPathIndicator from './setPathIndicator'
import { monthNames, monthWidth, svgLineHeight, lineWidth } from './constants'
import timeLineData from './setTimelineData'
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

    monthNames.forEach((month, i) => {
        const rect = $(
            document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        )
        rect.attr('x', monthWidth * i)
        rect.attr('height', svgLineHeight)
        rect.attr('width', 2)

        svgLine.append(rect)

        const span = document.createElement('span')
        span.classList.add('monthSpan')
        span.setAttribute('id', 'monthSpan-' + i)
        span.style.position = 'absolute'
        span.style.transform = 'translateX(' + (i * monthWidth - 7) + 'px)'
        span.appendChild(
            document.createTextNode(month.substring(0, 3).toUpperCase())
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
            circle.attr('id', month + j)

            circle.click(({ target }) => {
                infoDiv.empty()
                setPathIndicator(target)
                focusDate(target, 'monthSpan-' + i)
                insertDocsIntoDOM(timeLineData[i].weeks[j])
            })

	    console.log( 'on click event: ', circle.click )

            svgLine.append(circle)
        }
    })
})
