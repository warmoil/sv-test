import {GET} from "./user/+server.js";
// export const ssr = false
/** @type {import("./$types").Actions} */
export const load = async ({locals}) => {
    console.log('-----------home load')
    const token = locals?.token
    if(!token) return {success: false}
    console.log(token)
    const result = await GET(1, token)
        .then(res => {
            console.log(res.status)
            return {success: res.ok}
        }).catch(e => {
            console.log(e)
        })
    console.log('결과:' + JSON.stringify(result))
    return {email:locals?.email}
}