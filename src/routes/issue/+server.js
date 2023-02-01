import apiUrl from "$lib/url/URL.js";
import {get} from 'svelte/store'
import {Token} from "$lib/store/token.js";

const url = apiUrl + '/issue';

export const GET = async (page,token) => {
    let reqUrl = url + '?siteName=' + 'warmOil'
    if (page) reqUrl += `&page=${page}`;
    return await fetch(reqUrl, {headers: {token}});
};
