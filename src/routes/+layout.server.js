import {redirect} from "@sveltejs/kit";
import {Token} from "$lib/store/token.js";
import {get} from "svelte/store";
const url = import.meta.env.VITE_API_URL;
// export const ssr = false
/** @type {import("./$types").LayoutServerLoad} */
export async function load({route}) {
    // const token = await cookies.get("token");
    // let token = await cookies.get('token')
    const token = get(Token)
    console.log('lay token'+token)
    if(token) {
        let res = await fetch(url + "/my/info", {headers: {token}});
        if (res.ok) {
            const json = await res.json()
            console.log(JSON.stringify(json))
            return {...(json), token};
        }
    }
    console.log('no token')
    if (route.id === "/login") {
        console.log('route id login')
        return {};
    }
    console.log('throw')
    throw redirect(307, "/login");
}



