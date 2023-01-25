import {GET} from "./+server.js";


export const  load = async ({url}) => {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getMeetingList(page)
    if(page){
        return {
            page,size,resJson
        }
    }
}


const getMeetingList = async (page) =>{
    return await GET(page).then(res=>{
        if(!res.ok) throw new Error('모임 로딩 실패')
        return res.json()
    }).catch(e=>{
        console.log(e)
        throw e
    })
}