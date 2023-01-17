<script>
    import {createEventDispatcher} from "svelte";
    import {rangeByNumAndStep} from "../utils/RangeUtil.js";

    export let current = 'hello world';
    export let total = 0;
    const dispatch = createEventDispatcher();

    function btnClick(page = 1) {
        dispatch("go", {page});
    }

    // 서버에서는
</script>

<button on:click={()=>btnClick()}>처음으로</button>
{#each rangeByNumAndStep(total) as page}
    {#if page.toString() === (current).toString()}
        <button disabled style="color: red">{page}</button>
    {:else}
        <button on:click={()=>btnClick(page)}>{page}</button>
    {/if}
{/each}

<button on:click={()=>btnClick(total)}>끝으로</button>
