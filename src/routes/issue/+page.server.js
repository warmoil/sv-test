import apiUrl from "../../lib/url/URL";
import {formDataToJson} from "$lib/utils/JsonUtil.js";
import {get} from "svelte/store";
import {Token} from "$lib/store/token.js";

const url = apiUrl + "/issue";

/** @type {import("./$types").Actions} */

// form action 에 관한 메소드들
export const actions = {
    default: async ({request})=>{
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj['isSecret'] = !!formData.get('isSecret')
        console.log('obj',obj)
        return await fetch(url , {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*",'token': get(Token)},
            body:JSON.stringify(obj)
        }).then(res => {
            if (res.status === 201 || res.status === 200) {
            } else if (res.status === 409) {
                return {
                    message: "이미 이 이슈에 작성한 내용이 있습니다."
                };
            } else {
                return {
                    message: "서버에러"
                };
            }
        }).catch(e => {
            return {
                error: e
            };
        });
    }
}