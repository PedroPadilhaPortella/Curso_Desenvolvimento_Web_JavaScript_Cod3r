const hasParams = (param) => {
  return process.argv.indexOf(param) !== -1
}

//node process_params.js --prod
if (hasParams('--prod')) {
  console.log("Rodando em ambiente de produção!")
}
// node process_params.js --dev 
else if (hasParams('--dev')) {
  console.log("Rodando em ambiente de desenvolvimento!")
}
// node process_params.js --hk
else if (hasParams('--hk')) {
  console.log("Rodando em ambiente de homologação!")
}
// node process_params.js
else {
  console.log("Rodando em ambiente local!")
}