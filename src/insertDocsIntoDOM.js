import $ from 'jquery'

export default docs => {
    // format a document in html wrapper
    const infoDiv = $('#tl_info')

    if (docs.length == 0) {
        infoDiv.append(' <h1>No hay noticias para mostrar</h1> ')
        return
    }

    docs.forEach(doc => infoDiv.append(setDocComponent(doc)))
}

function setDocComponent({ date, content, source, country, image_url, type }) {
    var docDiv = document.createElement('div')
    docDiv.setAttribute('class', 'tl_doc')

    var docInfo = document.createElement('div')
    docInfo.setAttribute('class', 'tl_doc-info')

    var doc_type = doc_types.find(doc_type => {
        if (doc_type.id === type) return doc_type
    })

    docInfo.style.backgroundColor = '#' + doc_type.color

    // image
    var docImage = new Image()
    docImage.src = image_url

    // date
    var docDate = document.createElement('span')
    docDate.innerHTML =
        '<span class="tl_doc-label">FECHA:</span><br /><span class="tl_doc-value tl_doc-date">' +
        date +
        '</span>'

    // content
    var docContent = document.createElement('p')
    docContent.innerHTML = content

    // footer
    var docFooter = document.createElement('div')
    docFooter.setAttribute('class', 'tl_doc-footer')

    // source
    if (source) {
        var docSource = document.createElement('a')
        docSource.setAttribute('href', source)
        docSource.setAttribute('target', '_blank')
        docSource.innerHTML = ' <button>fuente</button> '
        docFooter.appendChild(docSource)
    }

    // country
    if (country) {
        var docCountry = document.createElement('div')
        docCountry.innerHTML =
            ' <span class="tl_doc-label">PAIS:</span><br> <span class="tl_doc-value">' +
            country +
            '</span> '

        docFooter.appendChild(docCountry)
    }

    // type
    var docType = document.createElement('div')
    docType.innerHTML =
        ' <span class="tl_doc-label">CATEGORIA:</span><br> <span class="tl_doc-value">' +
        doc_type.type_name +
        '</span> '

    var push = document.createElement('div')
    push.setAttribute('class', 'push')

    // Join doc parts
    docFooter.appendChild(docType)
    docInfo.appendChild(docDate)
    docInfo.appendChild(docContent)
    docInfo.appendChild(push)
    docInfo.appendChild(docFooter)
    docDiv.appendChild(docImage)
    docDiv.appendChild(docInfo)

    return docDiv
}
