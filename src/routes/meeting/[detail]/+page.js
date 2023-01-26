/** @type {import('./$types').PageLoad} */
import {GET} from "./+server.js";

export const load = async ({params}) =>{
    const detail = await getDetail(params.detail)
    return {
        detail:detail
    }
}

const getDetail = async (idx) =>{
    return await GET(idx)
        .then(res=>res.json())
        .catch(e=>{
            console.log(e)
            throw e
        })
}