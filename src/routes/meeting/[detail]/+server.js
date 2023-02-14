import apiUrl from "$lib/url/URL.js";
import {get} from "svelte/store";
import {Token} from "../../../lib/store/token.js";


const url = apiUrl + '/meeting/'

export const GET = async idx => {
    console.log('idx',idx)
    return await fetch(url + idx,{
        headers: {"Content-Type": "application/json", "Accept": "*/*"}
    })
}