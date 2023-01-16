<script>
    export let issueList
    function  getSecret(idx){
        const pw = prompt('비밀번호를 입력해 주세요 ')
        fetch('http://211.42.156.79:8080/issue/'+idx,{
            method:'POST',
            body:pw
        }).then(res=>{
            if (res.status === 200) {
                return res.json()
            }else {
                alert('실패')
            }
        }).then(json=>{
            alert(`
                    idx:${json.idx}
                    owner:${json.owner}
                    title:${json.title}
                    content:${json.content}
                    createAt:${json.createAt}
                `
            )
        })
    }
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
            {#if issue.isSecret}
                <td><div  class="seceret" on:click={getSecret(issue.idx)}>{issue.idx}</div></td>
            {:else }
            <td> {issue.idx}</td>
        {/if}
            <td>{issue.owner}</td>
            <td>{issue.title}</td>
            <td>{issue.content}</td>
            <td>{issue.isSecret ? 'O' : 'X'}</td>
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
    .seceret{
        text-decoration-line: underline;
        color: red;
    }
</style>
