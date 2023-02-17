<script>
    import DetailTable from "./DetailTable.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data)
</script>


<DetailTable detail={data.detail} />