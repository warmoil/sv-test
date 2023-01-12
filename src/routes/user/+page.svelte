<script>
    import Pagination from "$lib/page/Pagination.svelte";
    import {GET, POST} from "./+server.js";
    import UserTable from "./UserTable.svelte";
    import {onMount} from "svelte";


    let userPromise = getUserList()
    let name = ''
    let nickName = ''
    let currentPage = 0
    let totalPage = 0
    let loadingTxt = '로딩중입니다.'

    let nameInput
    let nicknameInput
    onMount(() => nameInput.focus())

    async function getUserList(page) {
        await GET(page).then(res => {
            if (!res.ok) throw new Error('유저 불러오기 실패')
            return res.json()
        }).then(json => {
            currentPage = json.currentPage
            totalPage = json.totalPage
            loadingTxt = '총 ' + json.totalCount + '명'
            return userPromise = json.results
        }).catch(e => {
            alert('서버에러')
            console.log(e)
        })
    }

    async function createUser() {
        await POST(name, nickName)
            .then(res => {
                if (res.status === 201 || res.status === 200) {
                    nameInput.focus()
                    userPromise = getUserList(currentPage)
                    name = ''
                    nickName = ''
                } else if (res.status === 409) {
                    alert('이미 존재하는 닉네임입니다')
                    nicknameInput.focus()
                } else {
                    alert('서버에러')
                }
            }).catch(e => {
                console.log(e)
            })
    }

    function movePage(e) {
        userPromise = getUserList(e.detail.page)
    }

    const enterPress = e => {
        if (e.key === 'Enter') createUser()
    }
</script>


<h2>{loadingTxt}</h2>

<svelte:body on:keydown={enterPress}/>

이름:<input bind:this={nameInput} type="text" bind:value={name}>
닉네임:<input bind:this={nicknameInput} type="text" bind:value={nickName}>

<button on:click={createUser}>
    추가
</button>
<br/>
<UserTable userPromise={userPromise}/>
<Pagination current={currentPage} total={totalPage} on:go={movePage}/>