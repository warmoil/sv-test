import {GET} from "./+server.js";
import {formDataToJson} from "$lib/utils/JsonUtil.js";
import apiUrl from "$lib/url/URL.js";


const url = apiUrl + '/applicant'
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
        if (!res.ok) throw new Error('신청상태 로딩실패')
        return res.json()
    }).catch(e => {
        throw e
    })
}


export const actions = {
    modifyStatus: async ({request, cookies}) => {
        const data = await request.formData();
        const idx = data.get("idx");
        const status = data.get("status");
        return await fetch(url, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: cookies.get('token')},
            body: JSON.stringify({idx, status})
        }).then(res => {
            if (res.status === 201 || res.status === 200) {
                return {message: '신청 상태를 변경하였습니다.'}
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