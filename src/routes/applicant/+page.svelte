<script>
    import Pagination from "$lib/page/Pagination.svelte";
    import ApplicantList from "./ApplicantList.svelte";
    import {onMount} from "svelte";
    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
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
        window.location.href = "/applicant?page=" + e.detail.page+'&meetingIdx='+data.meetingIdx;
    }
</script>


<ApplicantList applicantList={data.resJson.results} />
<Pagination current={data.page} total={data.resJson.totalPage} on:go={movePage}/>