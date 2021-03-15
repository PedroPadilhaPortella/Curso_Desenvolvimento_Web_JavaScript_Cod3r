const numbers = [1, 2, 3, 4, 5, 6]

//usando for
const double = []
for(let n of numbers) {
    double.push(n * 2)
}

//usando anonymous function
const triple = numbers.map(function (el) {
    return el * 3
})

//usando arrow function
const quadruple = numbers.map(number => number * 4)

console.log("Double: " +  double)
console.log("Triple: " +  triple)
console.log("Quadruple: " +  quadruple)

const students = [
    { name: "Jake", score: 6.4},
    { name: "Susan", score: 8.6},
    { name: "Emma", score: 9.4},
    { name: "Peter", score: 9.1}
]

const getScore = el => el.score

console.log("Notas Arredontadas pra cima: " + students.map(getScore).map(Math.ceil))
console.log("Notas Arredontadas pra baixo: " + students.map(getScore).map(Math.floor))

const score = (students.map((student) => student.score)
                .reduce((sum, score) => sum += score, 0) / students.length).toFixed(2);
console.log("Média da Turma: " + score)