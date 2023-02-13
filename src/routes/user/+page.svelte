<script>
    import {onMount} from "svelte";
    import Pagination from "$lib/page/Pagination.svelte";
    import UserTable from "./UserTable.svelte";

    /** @type {import("./$types").PageData} */
    export let data;

    /** @type {import("./$types").ActionData} */
    export let form;

    // onMount: alert 이 ssr 에서 동작하지 못하게 함
    onMount(() => {
        if (form?.message) {
            // alert(form.message);
            console.log(form.message)
            form = null;
        } else if (form?.error) {
            // alert(form.error);
            alert(form.error)
            form = null;
        }
    });

    let totalPage = data.resJson.totalPage;

    function movePage(e) {
        window.location.href = "/user?page=" + e.detail.page;
    }

    const namePattern = "\\[가-힣a-zA-Z0-9]{1,15}";
    const nickNamePattern = "\\[가-힣a-zA-Z0-9]{1,15}";
</script>

<form action="/user" method="POST">
    이름:<input type="text" name="name"
              pattern={namePattern} required>
    닉네임:<input type="text" name="nickname"
               pattern={nickNamePattern} required>

    <input type="submit" value="추가">
</form>
<br/>
<UserTable userList={data.resJson.results}/>
<Pagination current={data.page} total={totalPage} on:go={movePage}/>