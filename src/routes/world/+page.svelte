<script>
    import apiUrl from "../../lib/url/URL.js";
    let loading = 'API 서버 통신 확인중'
    check()
    async function check() {
        await fetch(apiUrl + '/user')
            .then(res => {
                if (res.ok) loading = '통신 성공';
                else loading = '통신 실패';
            }).catch(e=>{
                loading = '통신 실패';
            })
    }
</script>
<svelte:head>
    <title>warmOil Home</title>
</svelte:head>

<h1>{loading}</h1>
<h1>체크용 world</h1>