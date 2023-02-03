<script>
    import {onMount} from "svelte";

    export let applicantList
    /** @type {import("./$types").ActionData} */
    export let form;

    // onMount: alert 이 ssr 에서 동작하지 못하게 함
    onMount(() => {
        if (form?.message) {
            alert(form.message);
            form = null;
        } else if (form?.error) {
            alert(form.error);
            form = null;
        }
    });
</script>


<table>
    <th>신청번호</th>
    <th>신청자사이트</th>
    <th>유저아이디</th>
    <th>상태</th>
    <th>수락/거부</th>
    <tbody>

    {#each applicantList as applicant}
        <tr>
            <td>{applicant.idx}</td>
            <td>{applicant.siteName}</td>
            <td>{applicant.userID}</td>
            <td>{applicant.status}</td>
            <td>
                <form action=""  method="POST">
<!--                <form action='/applicant?/modifyStatus' method="POST">-->
                    <input type="hidden" name="idx" value={applicant.idx}>
                {#if applicant.status === 'ACCEPT'}
                    <input type="hidden" name="status" value="REJECT">
                    <input type="submit" value="거절">
<!--                    <button on:click={modifyStatus(applicant.idx,'REJECT')}>거부</button>-->
                {:else }
                    <input type="hidden" name="status" value="ACCEPT">
                    <input type="submit" value="수락">
<!--                    <button on:click={modifyStatus(applicant.idx,'ACCEPT')}>수락</button>-->
                {/if}
                </form>
            </td>
        </tr>
    {/each}

    </tbody>
</table>

<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
    }

    table {
        width: 100%;
    }
</style>
