export default (weekCircle, monthSpanId) => {
    // fill gray all circles
    Array.from(document.getElementsByClassName('weekCircle')).forEach(circle =>
        circle.setAttribute('fill', '#555')
    )

    // fill _red selected circle
    weekCircle.setAttribute('fill', '#f55')

    Array.from(document.getElementsByClassName('monthSpan')).forEach(span =>
	span.style.color = '#000'
    )

    document.getElementById(monthSpanId).style.color = '#f55'
}
