import apiUrl from "$lib/url/URL.js";
import {GET} from "./+server.js";
import {get} from "svelte/store";
import {Token} from "../../lib/store/token.js";

const url = apiUrl + "/user";

/** @type {import("./$types").Actions} */
export const  load = async ({url}) => {
    const token = get(Token)
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;
    const resJson = await getUserList(page,token)
    return {
        page,
        size,
        resJson
    }
}

async function getUserList(page,token) {
    return await GET(page,token).then(res => {
        if (!res.ok) throw new Error('유저 불러오기 실패')
        return res.json()
    }).catch(e => {
        // alert('서버에러')
        console.log(e)
    })
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get("name");
        const nickName = data.get("nickname");

        return await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*"},
            body: JSON.stringify({name, nickName})
        }).then(res => {
            if (res.status === 201 || res.status === 200) {

            } else if (res.status === 409) {
                return {
                    message: "이미 존재하는 닉네임입니다"
                };
            } else {
                return {
                    message: "서버에러"
                };
            }
            return null
        }).catch(e => {
            return {
                error: e
            };
        });
    }
};

