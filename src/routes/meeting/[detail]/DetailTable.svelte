<script>
    export let detail
</script>

<table>
    <th>미팅번호</th>
    <th>제목</th>
    <th>내용</th>
    <th>장소</th>
    <th>총인원</th>
    <th>현인원</th>
    <th>모임날짜</th>
    <th>마감일</th>

    <th>개최자</th>
    <th>사이트이름</th>
    <tbody>
        <tr>
            <td>{detail.idx}</td>
            <td>{detail.title}</td>
            <td>{detail.content}</td>
            <td>{detail.place}</td>
            <td>{detail.maxMember}</td>
            <td>{detail.nowEntryNo}</td>
            <td>{detail.meetingDateTime}</td>
            <td>{detail.closingDateTime}</td>
            <td>{detail.owner}</td>
            <td>{detail.siteName}</td>
        </tr>
    </tbody>
</table>

<div>
    <a href='javascript:history.back()'> 뒤로 </a>
</div>

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
