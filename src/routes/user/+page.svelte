<script>
    import Pagination from "$lib/page/Pagination.svelte";
    import {GET, POST} from "./+server.js";
    import UserTable from "./UserTable.svelte";
    import {tick} from "svelte";


    let userList = getUserList()
    let name = ''
    let nickName = ''
    let nameBind
    let currentPage = 0
    let totalPage = 0
    let loadingTxt = '로딩중입니다.'

    async function getUserList(page) {
        tick().then(() => nameBind.focus())
        await GET(page).then(res => {
            if (!res.ok) throw new Error('유저 불러오기 실패')
            return res.json()
        }).then(json => {
            currentPage = json.currentPage
            totalPage = json.totalPage
            loadingTxt = '총 ' + json.totalCount + '명'
            return userList = json.results
        }).catch(e => {
            alert('서버에러')
            console.log(e)
        })
    }

    async function createUser() {
        await POST(name, nickName)
            .then(res => {
                if (res.status === 409) {
                    alert('이미 존재하는 닉네임입니다')
                    return
                } else if (!res.ok) {
                    console.log(res.status)
                    alert('추가 실패')
                    return
                }
                userList = getUserList(currentPage)
                name = ''
                nickName = ''
            })
    }

    const enterPress = e => {
        if (e.key === 'Enter') createUser()
    }
</script>


<h2>{loadingTxt}</h2>

<svelte:body on:keydown={enterPress}/>

이름:<input type="text" bind:value={name} bind:this={nameBind}>
닉네임:<input type="text" bind:value={nickName}>

<button on:click={createUser}>
    추가
</button>
<br/>
<UserTable userPromise={userList}/>
<Pagination current={currentPage} total={totalPage}/>