import {GET} from "./+server.js";

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
        console.log('?')
        if (!res.ok) throw new Error('모임 로딩 실패')
        return res.json()
    }).catch(e => {
        console.log(e)
        throw e
    })
}