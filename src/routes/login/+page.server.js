import {redirect} from "@sveltejs/kit";

const url = import.meta.env.VITE_API_URL;

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (locals.token) throw redirect(307, '/');
}

/** @type {import("./$types").Actions} */
export const actions = {
    login: async ({cookies, request}) => {
        console.log('-----------log in action')
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        const res = await fetch(url + "/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        }).catch(e => {
            console.log(e);
        });

        if (res.status !== 200) {
            console.log(res);
            return {success: false, status: res.status};
        }

        const json = await res.json();
        console.log('log in json' + JSON.stringify(json))
        const {token} = json;
        console.log('log in token'+token)
        cookies.set('token', token, {path: '/'});
        cookies.set('email', email, {path: '/'});
        throw redirect(307, '/')
    },

    logout: async ({cookies, request}) => {
        console.log('-----------------logout')
        await cookies.delete('token')
        // request.cookies
        // const token = cookies.get('token')
        // cookies.set("token", token, {
        //     path: "/",
        //     httpOnly: true,
        //     sameSite: "strict",
        //     maxAge: 0
        // });
        throw redirect(307, '/')
    },
};
