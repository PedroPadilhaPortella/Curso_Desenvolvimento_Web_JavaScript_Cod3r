//pattern middleware or chain of responsability

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid01'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid02'
    next()
}

const passo3 = (ctx) => {
    ctx.valor3 = 'mid03'
}

const exec = (ctx, ...middlewares) => {
    const execPassos = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPassos(indice + 1))
    }
    execPassos(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)