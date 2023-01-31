<script>
    import Pagination from "../../lib/page/Pagination.svelte";
    import IssueTable from "./IssueTable.svelte";
    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import("./$types").ActionData} */
    export let form;

    let siteName = 'warmOil'
    let target = 'issue'

    let totalPage = data.resJson.totalPage
    function movePage(e) {
        window.location.href = "/issue?page=" + e.detail.page;
    }

    const validPattern = "\\[가-힣a-zA-Z0-9]{1,15}";
</script>


<h1>이슈 게시판입니다</h1>
<form action="/issue" method="post">
    제목:<input type="text" name='title'><br/>
    내용:<textarea name='content'></textarea><br/>
    비밀글 <input type="checkbox" name='isSecret' >
    <input type="hidden" name="siteName" value={siteName}>
    <input type="hidden" name="target" value={target}>
    <input type="submit" value="추가">
</form>


<IssueTable issueList={data.resJson.results}/>
<Pagination current={data.page} total={totalPage} on:go={movePage} />