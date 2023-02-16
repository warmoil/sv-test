import {redirect} from "@sveltejs/kit";

/** @type {import("./$types").LayoutServerLoad} */
export async function load({locals, route}) {
    console.log('layout: server:locals')
    console.log(JSON.stringify(locals?.email))
    console.log(JSON.stringify(locals?.token))
    if (!locals?.token && route.id !== '/login') {
        console.log('redirectt')
        throw redirect(307, '/login')
    }
    return {
        token: locals?.token,
        email: locals?.email
    };
}


// export async function load({route}) {
//     // const token = await cookies.get("token");
//     // let token = await cookies.get('token')
//     console.log('lay token'+token)
//     if(token) {
//         let res = await fetch(url + "/my/info", {headers: {token}});
//         if (res.ok) {
//             const json = await res.json()
//             console.log(JSON.stringify(json))
//             return {...(json), token};
//         }
//     }
//     console.log('no token')
//     if (route.id === "/login") {
//         console.log('route id login')
//         return {};
//     }
//     console.log('throw')
//     throw redirect(307, "/login");
// }
//


