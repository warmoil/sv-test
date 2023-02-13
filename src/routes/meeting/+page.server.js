import apiUrl from "$lib/url/URL.js";
import {formDataToJson} from "$lib/utils/JsonUtil.js";
import {GET} from "./+server.js";
import {redirect} from "@sveltejs/kit";
import {get} from "svelte/store";
import {Token} from "../../lib/store/token.js";
import {Email} from "../../lib/store/member.js";

const url = apiUrl + '/meeting'
/** @type {import("./$types").Actions} */

export const  load = async ({url}) => {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getMeetingList(page)
    if(page){
        return {
            page,size,resJson,email:get(Email)
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
export const actions = {
    create: async ({request,}) => {
        console.log('?')
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj.meetingDateTime = obj.meetingDateTime.replace('T', ' ')
        obj.closingDateTime = obj.closingDateTime.replace('T', ' ')
        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: get(Token)},
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
    applyMeeting: async ({request,url}) => {
        console.log('apply!')
        console.log(url)
        const data = await request.formData()
        const siteName = data.get('siteName')
        const meetingIdx = data.get('meetingIdx')
        console.log('모를레이요')
        return await fetch(apiUrl + '/applicant', {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "*/*", token: get(Token)},
            body: JSON.stringify({siteName, meetingIdx})
        }).then(res => {
            if (!(res.status === 200 || res.status === 201)) {
                return res.json().then(json => {
                    return {message: json.message}
                })
            }
            return {message:'해당 모임에 신청하였습니다.'}
        }).catch(e => {
            console.log('e?', e)
            return {error: e}
        })
    },
    management: async ({request}) =>{
        const data = await request.formData()
        throw redirect(307, "/applicant?meetingIdx="+data.get('meetingIdx'));
    }
}