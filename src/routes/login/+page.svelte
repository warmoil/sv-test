<script>
    import LoginText from "$lib/textInput/LoginText.svelte";
    import {Email} from "$lib/store/member.js";

    let id, pw;
    /** @type {import("./$types").ActionData} */
    export let form;

    const login = async () => {
        const json = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({email: id, password: pw})
        }).then(res => res.json())
        window.location = '/'
    }
</script>

로그인 페이지

{#if $Email}
    {$Email} 님 안녕하세요
{:else}
    <LoginText bind:id={id} bind:pw={pw}/>
    <button on:click={login}>로그인</button>
{/if}

