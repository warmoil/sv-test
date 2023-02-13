import {GET} from "./+server.js";
import apiUrl from "$lib/url/URL.js";
import {get} from "svelte/store";
import {Token} from "../../lib/store/token.js";


const appUrl = apiUrl + '/applicant'
/** @type {import("./$types").Actions} */
export const load = async ({url}) => {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const meetingIdx = url.searchParams.get('meetingIdx');
    const token = get(Token)
    console.log('meetingIdx::', meetingIdx)
    const resJson = await getApplicantList(meetingIdx, page,token)
    return {
        page, size, resJson, meetingIdx
    }
}

const getApplicantList = async (meetingIdx, page,token) => {
    return await GET(meetingIdx, page,token).then(res => {
        console.log(res.status)
        if (!res.ok) {
            return res.json().then(json => {
                return {message: json.message}
            })
        }
        return res.json()
    }).catch(e => {
        throw e
    })
}


export const actions = {
    // modifyStatus: async ({request, cookies}) => {
    default: async ({request}) => {
        const data = await request.formData();
        const idx = data.get("idx");
        const status = data.get("status");
        return await fetch(appUrl, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: get(Token)},
            body: JSON.stringify({idx, status})
        }).then(res => {
            if (res.status === 201 || res.status === 200) {
                return null
            } else {
                return res.json().then(json => {
                    return {message: json.message}
                })
            }
        }).catch(e => {
            return {
                error: e
            };
        });
    }
};