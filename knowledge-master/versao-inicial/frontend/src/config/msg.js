import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.Toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação Realizada com Sucesso!' : payload.msg,
    { type: 'success' , icon: 'check' }
)

Vue.Toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops... Erro Inesperado.' : payload.msg,
    { type: 'error' , icon: 'times' }
)