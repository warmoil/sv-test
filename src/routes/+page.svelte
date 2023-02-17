<script>
    import {onMount} from "svelte";

    let loading = 'API 서버 통신 확인중'
    /** @type {import("./$types").PageData} */
    export let data;

    onMount(() => {
        if (data?.success) {
            console.log((JSON.stringify(data.result)))
            if (data.success) {
                loading = 'API 서버 통신 성공'
            } else {
                loading = 'API 서버 통신 실패'
            }
        }
    })

</script>
<svelte:head>
    <title>warmOil Home</title>
</svelte:head>

<h1>{loading}</h1>