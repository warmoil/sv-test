import apiUrl from "$lib/url/URL.js";


const url = apiUrl + '/applicant'

export const GET = async (meetingIdx,page, size = 5) => {
    let reqUrl = url + '?meetingIdx='+meetingIdx+'&'+'page='+ page
    return await fetch(reqUrl)
}

// export const POST = async (meeting) =>{
//     return await fetch(url,{
//         method:"POST",
//         headers: {"Content-Type": "application/json", "Accept": "*/*"},
//         body:JSON.stringify(meeting)
//     })
// }
