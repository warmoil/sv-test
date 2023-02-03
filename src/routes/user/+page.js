import {GET} from "./+server.js";


/** @type {import('./$types').PageLoad} */
export const  load = async ({url}) => {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getUserList(page)
    return {
        page,
        size,
        resJson
    }
}

async function getUserList(page) {
    return await GET(page).then(res => {
        if (!res.ok) throw new Error('유저 불러오기 실패')
        return res.json()
    }).catch(e => {
        alert('서버에러')
        console.log(e)
    })
}

