import $ from 'jquery'

export default docSets => {
    // format a document in html wrapper
    var infoDiv = $('#info')

    var empty = true
    docSets.forEach(docSet => {
        if (!docSet) return
        empty = false

        console.log(docSet)

        infoDiv.append(' <h2>' + docSet.header + '</h2> ')

        docSet.docs.forEach(doc => {
            var docDiv = document.createElement('div')
            var docDate = document.createElement('h4')
            var docP = document.createElement('p')
            var docLink = document.createElement('a')

            docDate.textContent = doc.date
            docP.innerHTML = doc.content
            docLink.setAttribute('href', doc.link)
            docLink.setAttribute('target', '_blank')
            docLink.textContent = 'Fuente'

            // Join doc parts
            docDiv.appendChild(docDate)
            docDiv.appendChild(docP)
            docDiv.appendChild(docLink)

            // append to info div
            infoDiv.append(docDiv)
        })
    })

    if (empty) infoDiv.append(' <h1>No hay noticias para mostrar</h1> ')
}
