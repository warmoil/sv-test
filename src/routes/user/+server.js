import apiUrl from "$lib/url/URL.js";
import {get} from 'svelte/store'
import {Token} from "$lib/store/token.js";

const url = apiUrl + '/user';
const token = get(Token)
export const GET = async (page) => {
    let reqUrl = url;
    if (page) reqUrl += `?page=${page}`;

    return await fetch(reqUrl, {headers: {token}});
}
