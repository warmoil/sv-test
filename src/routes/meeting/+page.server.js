import apiUrl from "$lib/url/URL.js";
import {formDataToJson} from "$lib/utils/JsonUtil.js";


const url = apiUrl + '/meeting'

/** @type {import("./$types").Actions} */


export const actions = {
    default: async ({request}) => {
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj.meetingDateTime =obj.meetingDateTime.replace('T',' ')
        obj.closingDateTime =obj.closingDateTime.replace('T',' ')
        console.log(obj.meetingDateTime)
        console.log(obj.closingDateTime)
        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*"},
            body: JSON.stringify(obj)
        }).then(res => {
            if (!(res.status === 201 || res.status === 200)) {
                console.log('res.status',res.status)
                return {
                    message: "작성실패"
                }
            }
        }).catch(e => {
            return {
                error: e
            }
        })
    }
}