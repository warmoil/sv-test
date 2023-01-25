<script>
    import {showApplytPrompt} from "../applicant/Applicant.js";
    export let meetingList
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
            <td><a href="/meeting/{meeting.idx}" >{meeting.idx}</a></td>
            <td>{meeting.title}</td>
            <td>{meeting.place}</td>
            <td>{meeting.maxMember}</td>
            <td>{meeting.nowEntryNo}</td>
            <td>{meeting.meetingDateTime}</td>
            <td>{meeting.closingDateTime}</td>
            <td>{meeting.owner}</td>
            <td>{meeting.siteName}</td>
            <td><button on:click ={showApplytPrompt(meeting.idx,'warmOil')}>신청하기</button></td>
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
    table{
        width: 100%;
    }
</style>
