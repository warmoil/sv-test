import {GET} from "./+server.js";
/** @type {import('./$types').PageLoad} */
export async function load({url}) {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getIssueList(page)
    if(page){
        return {
            page,size,resJson
        }
    }
}


async function getIssueList(page) {
    return await GET(page).then(res=>{
        if(!res.ok) throw new Error('이슈 불러오기 실패')
        return res.json()
    }).catch(e=>{
        console.log(e)
        throw e
    })
}