const schedule = require('node-schedule');

//utilizando a biblioteca node-schedule, que recebe uma string com o horário em que será executada determinada ação, podemos executar funções predeterminadas.
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log("Executando tarefa 1", new Date().getSeconds())
});

setTimeout(function() {
    tarefa1.cancel() // ira cancelar a execução da tarefa1 após 20 segundos de execução
    console.log('Tarefa 1 cancelada!')
}, 20000)
//outras funções de temporização nativas do javascript
//setImmediate
//setInterval

//podemos criar uma regras para a schedule, determinando dia, hora, minuto, segundo, ano, mes etc..
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 0
regra.second = 3

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log("Executando tarefa 2", new Date().getSeconds())
})