<script lang="ts">
import CalculadoraModel from "../models/CalculadoraModel";
import Botao from "./Botao.svelte";
import Row from "./Row.svelte";
import Screen from "./Screen.svelte";

let calc = new CalculadoraModel();

const numeroDigitado = num => calc = calc.numeroDigitado(num);
const pontoDigitado = () => calc = calc.pontoDigitado();
const limpar = () => calc = calc.limparTela();
const operacaoDigitada = op => calc = calc.operacaoDigitada(op);
const calcular = () => calc = calc.calcular();

</script>

<div class="calculadora">
    <Screen value={calc.valor}/>
    <Row>
        <Botao destaque triple texto="AC" onClick={limpar}/>
        <Botao operacao texto="/" onClick={operacaoDigitada} />
    </Row>
    <Row>
        <Botao texto="7" onClick={numeroDigitado} />    
        <Botao texto="8" onClick={numeroDigitado} />
        <Botao texto="9" onClick={numeroDigitado} />
        <Botao operacao texto="*" onClick={operacaoDigitada} />
    </Row>
    <Row>
        <Botao texto="6" onClick={numeroDigitado} />    
        <Botao texto="5" onClick={numeroDigitado} />
        <Botao texto="4" onClick={numeroDigitado} />
        <Botao operacao texto="+" onClick={operacaoDigitada} />
    </Row>
    <Row>
        <Botao texto="3" onClick={numeroDigitado} />    
        <Botao texto="2" onClick={numeroDigitado} />
        <Botao texto="1" onClick={numeroDigitado} />
        <Botao operacao texto="-" onClick={operacaoDigitada} />
    </Row>
    <Row>
        <Botao double texto="0" onClick={numeroDigitado} />    
        <Botao texto=","  onClick={pontoDigitado} />
        <Botao destaque texto="=" onClick={calcular} />
    </Row>
</div>

<style>
    .calculadora {
        height: 440px;
        width: 300px;
        display: flex;
        flex-direction: column;
        background-color: var(--cor-fundo);
        padding: 2px;
        border-radius: 4px;
    }
</style>