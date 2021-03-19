//Callback Hell

// setTimeout(() => {
//     console.log("Executando callback 1...")
//     setTimeout(() => {
//         console.log("Executando callback 2...")
//         setTimeout(() => {
//             console.log("Executando callback 3...")
//             setTimeout(() => {
//                 console.log("Executando callback 4...")  
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("Executando Promise...")
            resolve()
        }, time);
    })
}

let promise = waitFor(3000)
    .then(() => waitFor())
    .then(waitFor)