// import {json} from '@sveltejs/kit';
//
// const url = import.meta.env.VITE_API_URL;
//
// /** @type {import('./$types').RequestHandler} */
// export async function POST({request,cookies}) {
//     console.log('-----------log in action')
//     const data = await request.json()
//     const email = data.email;
//     const password = data.password;
//     console.log('login email:'+email)
//     const res = await fetch(url + "/sign-in", {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({email, password})
//     }).catch(e => {
//         console.log('login res 에러 ')
//         console.log(e);
//     });
//
//     if (res.status !== 200) {
//         console.log(JSON.stringify(res));
//         return {success: false, status: res.status};
//     }
//
//
//     const resJson = await res.json();
//     await cookies.set("token", resJson.token, {
//             path: "/",
//             httpOnly: false,
//             sameSite: "strict",
//             maxAge: 60 * 60 * 24 * 30
//         });
//     await cookies.set("email", email, {
//             path: "/",
//             httpOnly: false,
//             sameSite: "strict",
//             maxAge: 60 * 60 * 24 * 30
//         });
//
//
//     return json({token: resJson.token, email: email})
// };
