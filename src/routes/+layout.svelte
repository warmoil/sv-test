<script>
    import {onMount} from "svelte";

    /** @type {import("./$types").PageData} */
    export let data;

    const logout = async () => {
        await fetch('/login/logout', {
            method: 'POST'
        }).then(res => res.json())
            .then(json => {
                window.location = '/'
            })
    }
    let p = 0;
    let visible = false;
    onMount(() => {
        visible = true;
        function next() {
            p += 0.1;
            const remaining = 1 - p;
            if (remaining > 0.15) setTimeout(next, 500 / remaining);
        }
        setTimeout(next, 250);
    });
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>
{#if data?.email}
    {data?.email} 님 안녕하세요.
<!--    {#if Email}-->
<!--    {Email} 님 안녕하세요.-->
<!--        <input type="submit" class="btn btn-link" value="로그아웃">-->
        <button class="btn btn-link" on:click={logout}>로그아웃</button>
{:else}
    <div>로그인 필요</div>
{/if}
<br>
<slot/>