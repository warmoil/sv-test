import {redirect} from "@sveltejs/kit";

const url = import.meta.env.VITE_API_URL;

/** @type {import('./$types').RequestHandler} */
export const POST = async ({cookies}) => {
    console.log('-----------------logout')
    // cookies.delete('token')
    await cookies.set("token", null, {
        path: "/",
        httpOnly: false,
        sameSite: "strict",
        maxAge: 0
    });
    await cookies.set("email", null, {
        path: "/",
        httpOnly: false,
        sameSite: "strict",
        maxAge: 0
    });

    throw redirect(307, '/')
};
