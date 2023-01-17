<script>

    import MeetingTable from "./MeetingTable.svelte";
    import Pagination from "$lib/page/Pagination.svelte";
    import {onMount} from "svelte";
    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import("./$types").ActionData} */
    export let form;

    onMount(() => {
        if (form?.message) {
            alert(form.message);
            form = null;
        } else if (form?.error) {
            alert(form.error);
            form = null;
        }
    });
    function movePage(e) {
        window.location.href = "/meeting?page=" + e.detail.page;
    }
    let nowDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, -5);
</script>
<form action="/meeting" method="POST">
    장소:<input type="text" name="place" autofocus><br/>
    제목:<input type="text" name="title"><br/>
    내용:<textarea name='content' placeholder="내용을적으세요"></textarea><br/>
    총인원:<input type="number" name="maxMember"> <br/>
    모임시간:<input type="datetime-local" name="meetingDateTime" min={nowDate} value=now><br/>
    마감일:<input type="datetime-local" name="closingDateTime" min={nowDate}><br/>
    개최자:<input type="text" name="owner">
    <input type="hidden" name="siteName" value="warmOil">
    <input type="submit" value="보내기">
</form>


<MeetingTable meetingList={data.resJson.results}/>
<Pagination current={data.page} total={data.resJson.totalPage} on:go={movePage}/>