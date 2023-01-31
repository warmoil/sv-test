import {GET} from "./+server.js";

/** @type {import('./$types').PageLoad} */
export const load = async ({url}) => {
    console.log('issue load')
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getIssueList(page)
    return {
        page,
        size,
        resJson
    }
}


async function getIssueList(page) {
    console.log('get issue list')
    return await GET(page).then(res => {
        if (!res.ok) throw new Error('이슈 불러오기 실패')
        return res.json()
    }).catch(e => {
        console.log(e)
    })
}