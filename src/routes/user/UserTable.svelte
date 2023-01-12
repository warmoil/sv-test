<script>
    export let userPromise;
</script>

<table>
    <th>idx</th>
    <th>name</th>
    <th>nickName</th>
    <tbody id="tBody">
    {#await userPromise}
    {:then userList}
        {#each userList as user}
            <tr>
                <td>{user.idx}</td>
                <td>{user.name}</td>
                <td>{user.nickName}</td>
            </tr>
        {/each}
    {:catch e}
        <p>{e}</p>
    {/await}
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
