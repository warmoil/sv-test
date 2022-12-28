async function getList(page) {
    let url = baseUrl
    if (page) {
        url += `?page=${page}`
    }
    await fetch(url).then(res => res.json())
        .then(json => {
            const data = json
            tBody.innerHTML = ''
            data.results.forEach(j => {
                tBody.innerHTML += `
                            <tr>
                            <td>${j.idx}</td>
                            <td>${j.name}</td>
                            <td>${j.nickName}</td>
                            </tr>
                        `;
            });
            totalUserCountDiv.innerHTML = '총 '+data.totalCount +'명'
            currentPage.value = data.currentPage + 1
            pageDiv.innerHTML = ``;
            lastPage = data.totalPage
            const totalPage = data.totalPage
            if (totalPage > 1) {
                for (let i = 1; i <= totalPage; i++) {
                    pageDiv.innerHTML += `
                            <button ${i === Number(currentPage.value) ? 'disabled style="color: red"' : ''}  onclick="getList(${i})">${i}</button>
                        `
                }
            }
        })
}

function createUser() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name-text').value,
            nickName: document.getElementById('nick-text').value,
        })
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            console.log(res)
            getList()
        } else if (res.status === 409) {
            throw new Error('이미 존재하는 아이디');
        } else {
            console.log(res)
            throw new Error('알수없는 에러')
        }
    })
        .catch(e => {
            alert(e)
        })
}