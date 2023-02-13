<script>
    import {Email} from "$lib/store/member.js";
    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;

    const logout = async () => {
        await fetch('/login/logout', {
            method: 'POST'
        }).then(res => res.json())
            .then(json => {
                window.location = '/'
            })
    }
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>
{#if data.result?.email}
    {data.result?.email} 님 안녕하세요.
<!--    {#if Email}-->
<!--    {Email} 님 안녕하세요.-->
<!--        <input type="submit" class="btn btn-link" value="로그아웃">-->
        <button class="btn btn-link" on:click={logout}>로그아웃</button>
{:else}
    <div>로그인 필요</div>
{/if}
<br>
<slot/>