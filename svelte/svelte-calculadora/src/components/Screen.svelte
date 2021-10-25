<script lang="ts">
    export let value: string;

    $: fontSize = value.length > 20 ? 'small' : `s-${value.length}`
</script>

<div class={`screen ${fontSize}`}>
    <span>{value}</span>
</div>

<style>
    .screen {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.37);
        color: white;
        font-size: 3rem;
        padding: 0 5px;
        margin: 2px 1px;
        overflow: hidden;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .s-10 { font-size: 2.85rem; }
    .s-11 { font-size: 2.7rem; }
    .s-12 { font-size: 2.55rem; }
    .s-13 { font-size: 2.4rem; }
    .s-14 { font-size: 2.25rem; }
    .s-15 { font-size: 2.1rem; }
    .s-16 { font-size: 1.95rem; }
    .s-17 { font-size: 1.8rem; }
    .s-18 { font-size: 1.65rem; }
    .s-19 { font-size: 1.5rem; }
    .s-20 { font-size: 1.35rem; }
    .small { font-size: 1.2rem; }
</style>