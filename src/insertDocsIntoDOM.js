import $ from 'jquery'

export default docSets => {
    // format a document in html wrapper
    const infoDiv = $('#info')

    var empty = true
    docSets.forEach(docSet => {
        if (!docSet) return

        infoDiv.append(' <h2>' + docSet.header + '</h2> ')

        empty = false
        docSet.docs.forEach((doc, docIndex) => {
            var docDiv = document.createElement('div')
            var docInfo = document.createElement('div')
            var docDate = document.createElement('h4')
            var docP = document.createElement('p')
            var docLink = document.createElement('a')
            var docImage = new Image()

            docDiv.setAttribute('class', 'doc')
            docInfo.setAttribute('class', 'doc-info')
            docDate.textContent = doc.date
            docP.innerHTML = doc.content
            docLink.setAttribute('href', doc.link)
            docLink.setAttribute('target', '_blank')
            docLink.innerHTML = ' <button>fuente</button> '
            docImage.src = 'https://picsum.photos/200/200/?random=' + docIndex

            console.log('docImage src: ', docImage.src)

            // Join doc parts
            docInfo.appendChild(docDate)
            docInfo.appendChild(docP)
            docInfo.appendChild(docLink)
            docDiv.appendChild(docImage)
            docDiv.appendChild(docInfo)

            // append to info div
            infoDiv.append(docDiv)
        })
    })

    if (empty) infoDiv.append(' <h1>No hay noticias para mostrar</h1> ')
    else $('#week-img').attr('src')
}
