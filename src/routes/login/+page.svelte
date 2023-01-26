<script>
  import LoginText from "$lib/textInput/LoginText.svelte";
  import {email} from "$lib/store/member.js";
  import {onMount} from "svelte";

  let id, pw;
  let emailText;
  email.subscribe(x => emailText = x);

  /** @type {import("./$types").ActionData} */
  export let form;

  onMount(() => {
    if (form?.success === true) window.location = "/";
    else {
      console.log(form);
    }
  });
</script>

로그인 페이지

{#if emailText}
    {emailText} 님 안녕하세요
{:else}
    <form method="POST" action="?/login">
        <LoginText bind:id={id} bind:pw={pw}/>
        <input type="submit" value="login 하기">
    </form>
{/if}

