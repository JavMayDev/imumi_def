import { monthWidth } from './constants'
import timeLineData from './setTimelineData'

const timeLineWrapper = document.getElementById('timeLineWrapper')
const weekWidth = monthWidth / 5

var draggable = null
var lastWeek = null

document.getElementById('pin').onmousedown = () =>
    (draggable = document.getElementById('pin'))

document.onmousemove = ({ clientX }) => {
    if (draggable) {
        var left =
            timeLineWrapper.scrollLeft -
            75 +
            clientX -
            ((clientX + timeLineWrapper.scrollLeft) % weekWidth) +
            'px'

        draggable.style.left = left
        const week = left.split('p')[0] / weekWidth + 0.5

        // don't trigger the same thing if already done
        if (week === lastWeek) return
        lastWeek = week

        const monthIndex = Math.trunc(week / 5)
        const weekCircle = document.getElementById(
            timeLineData[monthIndex].monthName + ((week % 5) - 1)
        )
        if (weekCircle) weekCircle.dispatchEvent(new Event('click'))
    }
}

document.onmouseup = () => (draggable = null)
