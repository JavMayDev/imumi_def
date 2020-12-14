import $ from 'jquery'

export default docSets => {
    // format a document in html wrapper
    const infoDiv = $('#info')

    const image = document.createElement('img')
    image.setAttribute('crossorigin', 'anonymus')

    var empty = true
    docSets.forEach(docSet => {
        if (!docSet) return

        infoDiv.append(' <h2>' + docSet.header + '</h2> ')

        empty = false
        docSet.docs.forEach(doc => {

            if (
                doc.imageUrl &&
                // testUrl(doc.imageUrl) &&
                !image.getAttribute('src')
            )
                image.setAttribute('src', doc.imageUrl)

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

    if (image.getAttribute('src')) infoDiv.prepend(image)

    if (empty) infoDiv.append(' <h1>No hay noticias para mostrar</h1> ')
}

function testUrl(url) {
    return new Promise((resolve, _) => {
        fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then(({ status }) => {
            console.log('status on testUrl: ', status)
            return status === 200 ? resolve(true) : resolve(false)
        })
    })
}