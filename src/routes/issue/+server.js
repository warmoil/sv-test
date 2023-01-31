import apiUrl from "$lib/url/URL.js";
import {get} from 'svelte/store'
import {Token} from "$lib/store/token.js";

const url = apiUrl + '/issue';
const token = get(Token)
export const GET = async (page) => {
    let reqUrl = url + '?siteName=' + 'warmOil'
    if (page) reqUrl += `&page=${page}`;
    console.log('issue url '+reqUrl)
    return await fetch(reqUrl, {headers: {token}});
};

export const POST = async (issue) => {
    console.log('post:token', get(Token))
    return await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body: JSON.stringify({issue})
    })
}