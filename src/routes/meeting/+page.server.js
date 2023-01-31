import apiUrl from "$lib/url/URL.js";
import {formDataToJson} from "$lib/utils/JsonUtil.js";
import {Token} from "../../lib/store/token.js";
import {get} from "svelte/store";


const url = apiUrl + '/meeting'
const token = get(Token)
/** @type {import("./$types").Actions} */


export const actions = {
    create: async ({request}) => {
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj.meetingDateTime = obj.meetingDateTime.replace('T', ' ')
        obj.closingDateTime = obj.closingDateTime.replace('T', ' ')
        console.log(obj.meetingDateTime)
        console.log(obj.closingDateTime)
        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token},
            body: JSON.stringify(obj)
        }).then(res => {
            if (!(res.status === 201 || res.status === 200)) {
                console.log('res.status', res.status)
                return {
                    message: "작성실패"
                }
            }
        }).catch(e => {
            return {
                error: e
            }
        })
    },
    applyMeeting: async ({request}) => {
        console.log('apply!')
        const data = await request.formData()
        const siteName = data.get('siteName')
        const meetingIdx = data.get('meetingIdx')
        const ret = await fetch(apiUrl + '/applicant', {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "*/*", token},
            body: JSON.stringify({siteName, meetingIdx})
        }).then(res => res.json())
        return ret
    }
}