import {json} from '@sveltejs/kit';
import {Email} from "$lib/store/member.js";
import {Token} from "$lib/store/token.js";

const url = import.meta.env.VITE_API_URL;

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    console.log('-----------log in action')
    const data = await request.json()
    const email = data.email;
    const password = data.password;
    console.log(email + ';;:')
    const res = await fetch(url + "/sign-in", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    }).catch(e => {
        console.log('login res 에러 ')
        console.log(e);
    });

    if (res.status !== 200) {
        console.log(JSON.stringify(res));
        return {success: false, status: res.status};
    }

    const resJson = await res.json();
    Token.set(resJson.token)
    Email.set(email)
    console.log('login')
    console.log('json' + JSON.stringify(resJson))
    return json({token: resJson.token, email: email})
};
