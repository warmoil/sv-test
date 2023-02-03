import {GET} from "./+server.js";
import apiUrl from "$lib/url/URL.js";
import {redirect} from "@sveltejs/kit";


const appUrl = apiUrl + '/applicant'
/** @type {import("./$types").Actions} */
export const load = async ({url}) => {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const meetingIdx = url.searchParams.get('meetingIdx');
    console.log('meetingIdx', meetingIdx)
    const resJson = await getApplicantList(meetingIdx, page)
    return {
        page, size, resJson, meetingIdx
    }
}

const getApplicantList = async (meetingIdx, page) => {
    return await GET(meetingIdx, page).then(res => {
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
    default: async ({request, cookies}) => {
        const data = await request.formData();
        const idx = data.get("idx");
        const status = data.get("status");
        return await fetch(appUrl, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: cookies.get('token')},
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