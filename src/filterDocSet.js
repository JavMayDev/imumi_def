const weekLimits = [0, 7, 14, 21, 31]

export default ({ header, docs }, date) => {
    // date : [ year, month, week ]
    // returns all docs that match in a date range,


    let matchedDocs = docs.filter(doc => {
        const docDate = doc.date.split('-')

        if (
            docDate[0] == date[0] && // same year
            docDate[1] == date[1] && // same month
            // same week
            docDate[2] > weekLimits[date[2]] &&
            docDate[2] <= weekLimits[date[2] + 1]
        )
            return doc
    })

    if (matchedDocs.length > 0) return { docs: matchedDocs, header }
}
