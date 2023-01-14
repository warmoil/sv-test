<script>
  import Pagination from "$lib/page/Pagination.svelte";
  import {POST} from "./+server.js";
  import UserTable from "./UserTable.svelte";
  import {onMount} from "svelte";

  /** @type {import("./$types").PageData} */
  export let data;


  let name = "";
  let nickName = "";
  let totalPage = πdata.resJson.totalPage;

  let nameInput;
  let nicknameInput;
  onMount(() => nameInput.focus());


  async function createUser() {
    await POST(name, nickName)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          window.location.reload();
        } else if (res.status === 409) {
          alert("이미 존재하는 닉네임입니다");
          nicknameInput.focus();
        } else {
          alert("서버에러");
        }
      }).catch(e => {
        console.log(e);
      });
  }

  function movePage(e) {
    console.log(".로그내놔", e);
    window.location.href = "/user?page=" + e.detail.page;
  }

  const enterPress = e => {
    if (e.key === "Enter") createUser();
  };
</script>


<svelte:body on:keydown={enterPress}/>

이름:<input bind:this={nameInput} type="text" bind:value={name}>
닉네임:<input bind:this={nicknameInput} type="text" bind:value={nickName}>

<button on:click={createUser}>
    추가
</button>
<br/>
<UserTable userList={data.resJson.results}/>
<Pagination current={data.page} total={totalPage} on:go={movePage}/>