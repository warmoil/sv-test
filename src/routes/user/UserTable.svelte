<script>
    export let userList;
</script>

<table>
    <th>idx</th>
    <th>name</th>
    <th>nickName</th>
    <tbody id="tBody">

        {#each userList as user}
            <tr>
                <td>{user.idx}</td>
                <td>{user.name}</td>
                <td>{user.nickName}</td>
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