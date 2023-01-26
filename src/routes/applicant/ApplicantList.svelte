<script>
    import {modifyStatus} from "./Applicant.js";

    export let applicantList
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
                {#if applicant.status === 'ACCEPT'}
                    <button on:click={modifyStatus(applicant.idx,'REJECT')}>거부</button>
                {:else }
                    <button on:click={modifyStatus(applicant.idx,'ACCEPT')}>수락</button>
                {/if}
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
