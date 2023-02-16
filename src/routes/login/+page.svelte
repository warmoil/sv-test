<script>
    import LoginText from "$lib/textInput/LoginText.svelte";
    import {enhance} from "$app/forms";
    let id, pw;
    let data
    const login = async () => {
        await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({email: id, password: pw})
        }).then(res => res.json())
        window.location = '/'
    }
</script>

로그인 페이지

{#if data?.email}
    {data.email} 님 안녕하세요
{:else}
<!--        <LoginText bind:id={id} bind:pw={pw}/>-->
<!--        <button on:click={login}>로그인</button>-->
    <form use:enhance action="/login?/login" method="post">
        <LoginText bind:id={id} bind:pw={pw}/>
        <input type="submit" value="로그인"/>
    </form>
{/if}

