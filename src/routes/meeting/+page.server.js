import apiUrl from "$lib/url/URL.js";
import {formDataToJson} from "$lib/utils/JsonUtil.js";


const url = apiUrl + '/meeting'
/** @type {import("./$types").Actions} */


export const actions = {
    create: async ({request, cookies}) => {
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj.meetingDateTime = obj.meetingDateTime.replace('T', ' ')
        obj.closingDateTime = obj.closingDateTime.replace('T', ' ')
        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: cookies.get('token')},
            body: JSON.stringify(obj)
        }).then(res => {
            if (!(res.status === 201 || res.status === 200)) {
                return res.json().then(json => {
                    return {message: json.message}
                })
            }
        }).catch(e => {
            return {
                message: e
            }
        })
    },
    applyMeeting: async ({request, cookies}) => {
        console.log('apply!')
        const data = await request.formData()
        const siteName = data.get('siteName')
        const meetingIdx = data.get('meetingIdx')
        return await fetch(apiUrl + '/applicant', {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: cookies.get('token')},
            body: JSON.stringify({siteName, meetingIdx})
        }).then(res => {
            if (!(res.status === 200 || res.status === 201)) {
                return res.json().then(json => {
                    return {message: json.message}
                })
            }
        }).catch(e => {
            console.log('e?', e)
            return {error: e}
        })
    }
}