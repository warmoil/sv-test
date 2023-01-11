<script>

    let title = ''
    let content = ''

</script>


<h1>이슈 게시판입니다</h1>
제목:<input type="text" bind:value={title}>
<br/>
내용:<textarea bind:value={content}></textarea>
<button>전송</button>