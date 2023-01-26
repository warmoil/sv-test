<script>
    import {onMount} from "svelte";
    import DetailTable from "./DetailTable.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

</script>


<DetailTable detail={data.detail} />