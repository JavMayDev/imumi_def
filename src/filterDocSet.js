export default ({ header, docs }, date) => {
    // date : [ year, month, week ]
    // returns all docs that match in a date range,

    let matchedDocs = []
    docs.filter(doc => {
        const docDate = doc.date.split('-')
        if (
            docDate[0] == date[0] && // same year
            docDate[1] == date[1] && // same month
            Math.trunc(docDate[2] / 7) == date[2] - 1 // on same week
        )
	    matchedDocs.push(doc)
    })

    if (matchedDocs.length > 0) return { docs: matchedDocs, header }
}
