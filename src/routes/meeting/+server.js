import apiUrl from "$lib/url/URL.js";


const url = apiUrl + '/meeting'

export const GET = async (page, size = 5) => {
    let reqUrl = url + '?page=' + page
    return await fetch(reqUrl)
}

export const POST = async (meeting,token) =>{
    return await fetch(url,{
        method:"POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*",token},
        body:JSON.stringify(meeting)
    })
}
