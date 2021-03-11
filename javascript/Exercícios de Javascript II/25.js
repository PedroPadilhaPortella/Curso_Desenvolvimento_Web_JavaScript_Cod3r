function buscarPalavrasSemelhantes(search, words) {
    return words.filter(word => word.includes(search))
}

function buscarPalavrasSemelhantes(search, words) {
    let results = []
    for (const word of words) {
        if(word.includes(search)) {
            results.push(word);
        }
    }
    return results;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []