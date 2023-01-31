<script>
    import {email} from "$lib/store/member.js";
    import {Token} from "$lib/store/token.js";

    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;
    email.set(data.result?.email);
    Token.set(data.token)

</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>
{#if data.result?.email}
    {data.result?.email} 님 안녕하세요.
    <form method="POST" action="login?/logout">
        <input type="submit" class="btn btn-link" value="로그아웃">
    </form>
{:else}
    <div>로그인 필요</div>
{/if}
<br>
<slot/>