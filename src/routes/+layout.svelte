<script>
  import {email} from "$lib/store/member.js";
  import {onMount} from "svelte";
  import {Token} from "$lib/store/token.js";

  /** @type {import("./$types").PageData} */
  export let data;
  email.set(data.result?.email);
  Token.set(data.token)
  console.log(JSON.parse(atob(data?.token.split('.')[1])));
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>
{#if data.result?.email}
    {data.result?.email} 님 안녕하세요.
    <div>로그인 완료</div>
{:else}
    <div>로그인 필요</div>
{/if}
<br>
<slot/>