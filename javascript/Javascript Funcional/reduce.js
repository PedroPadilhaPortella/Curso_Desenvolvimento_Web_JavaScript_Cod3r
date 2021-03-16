const getScore = student => student.score

const sum = (total, el) => total += el

const average = (acc, el, i, array) => {
    if(i == array.length-1) return (acc + el) / array.length
    return acc + el
}

const numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers.reduce("soma dos numeros: " + sum, 0))
console.log(numbers.reduce("media dos numeros: " + average))

const students = [
    { name: "Jake", score: 6.4},
    { name: "Susan", score: 8.6},
    { name: "Emma", score: 9.4},
    { name: "Peter", score: 9.1}
]

console.log("Média da nota dos alunos: " + students.map(getScore).reduce(average).toFixed(2))