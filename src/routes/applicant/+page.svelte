<script>
    import Pagination from "$lib/page/Pagination.svelte";
    import ApplicantList from "./ApplicantList.svelte";
    /** @type {import("./$types").PageData} */
    export let data;
    function movePage(e) {
        window.location.href = "/applicant?page=" + e.detail.page+'&meetingIdx='+data.meetingIdx;
    }
</script>


<ApplicantList applicantList={data.resJson.results} />
<Pagination current={data.page} total={data.resJson.totalPage} on:go={movePage}/>