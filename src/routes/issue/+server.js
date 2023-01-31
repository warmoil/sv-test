import apiUrl from "$lib/url/URL.js";
import {get} from 'svelte/store'
import {Token} from "$lib/store/token.js";

const url = apiUrl + '/issue';


export const GET = async (page, siteName = 'warmOil') => {
    console.log('isuue GET')
    let reqUrl = url + '?siteName=' + siteName
    if (page) reqUrl += `&page=${page}`;
    const token = get(Token)
    return await fetch(reqUrl, {
        headers: {
            'token': token
        }
    });
};

export const POST = async (issue) => {
    console.log('post:token', get(Token))
    return await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body: JSON.stringify({issue})
    })
}