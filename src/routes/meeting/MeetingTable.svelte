<script>
    import {formDataToJson} from "../../lib/utils/JsonUtil.js";

    export let meetingList
    export let email
    /** @type {import("./$types").PageData} */
    export let data;
    /** @type {import("./$types").ActionData} */
    export let form;

    const handleSubmit = async e => {
        const res = await fetch('?/applyMeeting', {
            method: e.target.method,
            body: JSON.stringify(formDataToJson(new FormData(e.target)))
        });
    }
</script>

<table>
    <th>미팅번호</th>
    <th>제목</th>
    <th>장소</th>
    <th>총인원</th>
    <th>현인원</th>
    <th>모임날짜</th>
    <th>마감일</th>
    <th>개최자</th>
    <th>사이트이름</th>
    <th>신청하기</th>
    <tbody>
    {#each meetingList as meeting}
        <tr>
            <td><a href="/meeting/{meeting.idx}">{meeting.idx}</a></td>
            <td>{meeting.title}</td>
            <td>{meeting.place}</td>
            <td>{meeting.maxMember}</td>
            <td>{meeting.nowEntryNo}</td>
            <td>{meeting.meetingDateTime}</td>
            <td>{meeting.closingDateTime}</td>
            <td>{meeting.owner}</td>
            <td>{meeting.siteName}</td>
            <td>
                {#if meeting.owner === email}
                    <!--                    <button on:click ={applyMeeting(meeting.idx,'warmOil')}>신청하기</button></td>-->
                    <!--                    <td><a href={'/applicant?meetingIdx='+meeting.idx}>목록관리</a> </td>-->
                    <form method="POST" action="?/management">
                        <input type="hidden" name="meetingIdx" value={meeting.idx}>
                        <input type="submit" value="관리하기">
                    </form>
                {:else }
                    <!--                    <form on:submit|preventDefault={handleSubmit} method="POST" action="?/applyMeeting">-->
                    <form method="POST" action="?/applyMeeting">
                        <input type="hidden" name="siteName" value="warmOil">
                        <input type="hidden" name="meetingIdx" value={meeting.idx}>
                        <input type="submit" value="신청하기">
                    </form>
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
