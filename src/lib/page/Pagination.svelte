<script>
    import {createEventDispatcher} from "svelte";

    export let current = 0;
    export let total = 0;

    const dispatch = createEventDispatcher();

    function btnClick(page) {
        dispatch("move", {page});
    }
</script>


<button on:click={()=>btnClick()}>처음으로</button>

{#each Array(total) as _,page}
    {#if page === current}
        <button disabled style="color: red">{page + 1}</button>
    {:else}
        <button on:click={()=>btnClick(page)}>{page + 1}</button>
    {/if}
{/each}

<button on:click={()=>btnClick(total+1)}>끝으로</button>
