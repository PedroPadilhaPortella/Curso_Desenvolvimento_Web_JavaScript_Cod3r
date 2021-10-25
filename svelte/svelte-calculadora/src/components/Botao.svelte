<script lang="ts">
    export let texto: any;
    export let triple: boolean = false
    export let double: boolean = false
    export let operacao: boolean = false
    export let destaque: boolean = false
    export let onClick: (valor: string) => void = () => {};
</script>

<button on:click={() => onClick(texto)} class="botao" class:triple class:double class:operacao class:destaque>
    {texto}
</button>

<style>
    .botao {
        flex-basis: 25%;
        font-size: 30px;
        margin: 0;
        border: 1px solid var(--cor-fundo);
    }

    .double {
        flex-basis: 50%;
    }

    .triple {
        flex-basis: 75%;
    }

    .operacao {
        background-color: #fa8231;
        color: #fff;
    }
    
    .destaque {
        background-color: blue;
        color: #fff;
    }
</style>