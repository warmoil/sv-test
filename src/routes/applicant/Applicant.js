import apiUrl from "$lib/url/URL.js";


export const showApplytPrompt = async (meetingIdx, siteName = 'warmOil') => {
    const userID = prompt("userID를 입력하세요")
    return await fetch(apiUrl + '/applicant', {
        method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body: JSON.stringify({siteName,userID,meetingIdx})
    }).then(res => {
        console.log(res.status)
        if(res.status===201) alert('신청 성공 ')
        else if(res.status === 409) alert('이미 신청하였습니다')
    })
        .catch(e => {
            console.log('에러',e)
            alert('신청 실패 ')
        })
}

export const modifyStatus = async (idx,selectStatus) =>{
    return fetch(apiUrl+'/applicant',{
        method:'PATCH',
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body:JSON.stringify({idx:idx,status:selectStatus})
    }).then(res=>{
        if(res.status === 200){
            alert('완료되었습니다')
            window.location.reload()
        }else{
            console.log(res.status)
            alert(res.message)
        }
    }).catch(e=>{
        console.log(e)
        alert('에러가 발생했습니다')
    })
}