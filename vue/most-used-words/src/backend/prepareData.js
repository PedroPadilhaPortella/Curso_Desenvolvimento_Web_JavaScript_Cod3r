module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))
            
            resolver(words)
        } catch(e) {
            reject(e)
        }
    })
}

// Filtra as linhas que não são nulas, numéricas ou com -->
function filterValidRow(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

// Remove caracteres ? ! . -
const removePunctuation = row => row.replace(/[,?!.-]/g, '')
// Remove tags do arquivo de legendas
const removeTags = row => row.replace(/(<[^>]+)>/ig,'').trim()
// Junta todas as palavras em uma única string
const mergeRows = (fullText, row) => `${fullText} ${row}`