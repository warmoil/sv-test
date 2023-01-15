<script>
    export let issueList
</script>

<table>
    <th>이슈번호</th>
    <th>닉네임</th>
    <th>제목</th>
    <th>내용</th>
    <th>비밀글</th>
    <tbody id="tBody">
    {#each issueList as issue}
        <tr>
            <td>{issue.idx}</td>
            <td>{issue.owner}</td>
            <td>{issue.title}</td>
            <td>{issue.content}</td>
            <td>{issue.isSecret ? 'O':'X'}</td>
        </tr>
    {/each}
    </tbody>
</table>


<style>
    table {
        width: 50%;
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
    }
</style>
