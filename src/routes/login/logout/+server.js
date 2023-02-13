import {redirect} from "@sveltejs/kit";
import {Token} from "$lib/store/token.js";
import {Email} from "$lib/store/member.js";
const url = import.meta.env.VITE_API_URL;

/** @type {import('./$types').RequestHandler} */
export const POST = async () => {
    console.log('-----------------logout')
    // cookies.delete('token')
    Email.set('')
    Token.set('')
    throw redirect(307, '/')
};
