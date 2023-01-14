<script>
    import {GET} from "./+server.js";
    import Pagination from "../../lib/page/Pagination.svelte";

    GET()

    let currentPage = 0
    let totalPage = 0

    let owner = ''
    let password = ''
    let isSecret = false
    let title = ''
    let content = ''
    let siteName = 'warmOil'
    let target = 'issue'

    /** @type {import('./$types').PageData} */
    export let data;
    $:console.log(data);
</script>


<h1>이슈 게시판입니다</h1>
닉네임<input type="text" bind:value={owner}>
비밀번호<input type="password" bind:value={password}>
비밀글 <input type="checkbox" bind:checked={isSecret}>
<br/>
제목:<input type="text" bind:value={title}>
내용:<textarea bind:value={content}></textarea>
<button>전송</button>

<Pagination current={currentPage} total={totalPage}  />