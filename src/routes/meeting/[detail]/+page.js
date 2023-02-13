/** @type {import('./$types').PageLoad} */
import {GET} from "./+server.js";
import {json} from "@sveltejs/kit";

export const load = async ({params}) => {
    const detail = await getDetail(params.detail)
    console.log('detaiL?:' + JSON.stringify(detail))
    return json({
        detail: detail
    })
}

const getDetail = async (idx) => {
    return await GET(idx)
        .then(res => res.json())
        .catch(e => {
            console.log(e)
            throw e
        })
}