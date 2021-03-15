const numbers = [1, 2, 3, 4, 5, 6]

const greaterThatZero = el => el > 0
const greaterThatTen = el => el > 10
const even = el => el % 2 == 0

console.log(numbers.filter(greaterThatZero))
console.log(numbers.filter(greaterThatTen))
console.log(numbers.filter(even))


const students = [
    { name: "Jake", score: 6.4},
    { name: "Susan", score: 8.6},
    { name: "Emma", score: 9.4},
    { name: "Peter", score: 9.1}
]

const mural = student => student.score >= 9

console.log(students.filter(mural))