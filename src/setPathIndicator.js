import $ from 'jquery'

import { lineWidth } from './setTimelineData'

export default target => {
    var path = $('#pathIndicator')
    var cx = target.cx.baseVal.value
    var dPath =
        'M 0 0 L' +
        (cx - 25) +
        ' 0 L ' +
        cx +
        ' 30 L ' +
        (cx + 25) +
        ' 0 L ' +
        lineWidth +
        ' 0'

    path.attr('d', dPath)

    document.getElementById('pin').style.left = (cx - 25) + 'px'
}
