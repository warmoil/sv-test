import apiUrl from "../../lib/url/URL";
import {formDataToJson} from "$lib/utils/JsonUtil.js";
import {GET} from "./+server.js";

const url = apiUrl + "/issue";

/** @type {import("./$types").Actions} */

export const load = async ({url, cookies}) => {
    console.log('issue load')
    const token = await cookies.get('token')
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await GET(page, token)
        .then(res => {
            if (!res.ok) throw new Error('이슈 불러오기 실패')
            return res.json()
        }).catch(e => {
            console.log(e)
        })
    return {
        page,
        size,
        resJson
    }
}


// form action 에 관한 메소드들
export const actions = {
    default: async ({request, cookies}) => {
        const formData = await request.formData()
        let obj = formDataToJson(formData)
        obj['isSecret'] = !!formData.get('isSecret')
        console.log('obj', obj)
        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*", 'token': cookies.get('token')},
            body: JSON.stringify(obj)
        }).then(res => {
            if (res.status === 201 || res.status === 200) {
                return {message: '글작성 성공'}
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