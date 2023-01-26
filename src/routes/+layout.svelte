<script>
  import {email} from "$lib/store/member.js";
  import {onMount} from "svelte";

  /** @type {import("./$types").PageData} */
  export let data;
  onMount(() => {
    console.log(data);
  })
  email.set(data.result?.email);
</script>

{#if data.result?.email}
    {data.result?.email} 님 안녕하세요.
    <div>로그인 완료</div>
{:else}
    <div>로그인 필요</div>
{/if}
<br>
<slot/>