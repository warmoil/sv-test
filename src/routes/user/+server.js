import apiUrl from "$lib/url/URL.js";
import { get } from 'svelte/store'
import {Token} from "$lib/store/token.js";

const url = apiUrl + '/user';
export const GET = async (page) => {
    let reqUrl = url;
    if (page) reqUrl += `?page=${page}`;
    const token=get(Token)
    return await fetch(reqUrl, {headers:{token}});
}
