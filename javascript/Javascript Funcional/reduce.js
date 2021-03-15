const numbers = [1, 2, 3, 4, 5, 6]

const sum = (sum, n) => sum += n

console.log(numbers.reduce(sum, 0))



const students = [
    { name: "Jake", score: 6.4},
    { name: "Susan", score: 8.6},
    { name: "Emma", score: 9.4},
    { name: "Peter", score: 9.1}
]