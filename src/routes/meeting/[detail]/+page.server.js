import {GET} from "./+server.js";

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
    const detail = await getDetail(params.detail)
    console.log('detail page load')
    console.log('detaiL?:' + JSON.stringify(detail))
    if(detail) {
        return {detail}
    }
}

const getDetail = async (idx) => {
    return await GET(idx)
        .then(res => res.json())
        .catch(e => {
            console.log(e)
            throw e
        })
}