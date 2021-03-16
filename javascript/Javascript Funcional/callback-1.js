function exec(fn, a, b) {
    console.log(fn(a, b))
    return fn(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

exec(somar, 56, 38)
exec(subtrair, 182, 27)


//setInterval
// const cb = () => console.log("Executing....")

setInterval(() => {
    console.log("Executing...")
}, 1000);