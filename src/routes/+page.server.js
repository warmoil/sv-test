import {GET} from "./user/+server.js";
import {get} from "svelte/store";
import {Token} from "../lib/store/token.js";

/** @type {import("./$types").Actions} */
export const load = async () => {
    console.log('-----------home load')
    const token = get(Token)
    if(! token) return {success: false}
    const result = await GET(1, token)
        .then(res => {
            console.log(res.status)
            return {success: res.ok}
        }).catch(e => {
            console.log(e)
        })
    console.log('결과:' + JSON.stringify(result))
    return result
}