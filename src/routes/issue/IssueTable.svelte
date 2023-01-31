<script>
    export let issueList
</script>

<table>
    <th>이슈번호</th>
    <th>닉네임</th>
    <th>제목</th>
    <th>내용</th>
    <tbody id="tBody">
    {#each issueList as issue}
        <tr>

                <td> {issue.idx}</td>

                <td> {issue.idx}</td>
                <td>{issue.owner}</td>
                <td>
                    {#if issue.isSecret}
                    <strong style="color:red">[비밀글]</strong>
                    {/if}
                    {issue.title}</td>
                <td>{issue.content}</td>
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
