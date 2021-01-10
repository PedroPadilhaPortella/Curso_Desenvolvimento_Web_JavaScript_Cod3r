const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //executar migrações sempre que a aplicação executar
module.exports = knex