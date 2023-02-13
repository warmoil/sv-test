import apiUrl from "$lib/url/URL.js";
import {get} from "svelte/store";
import {Token} from "../../lib/store/token.js";


const url = apiUrl + '/meeting'

export const GET = async (page, size = 5) => {
    let reqUrl = url + '?page=' + page
    return await fetch(reqUrl)
}

export const POST = async (meeting) =>{
    return await fetch(url,{
        method:"POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*",token:get(Token)},
        body:JSON.stringify(meeting)
    })
}
