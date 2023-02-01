import {redirect} from "@sveltejs/kit";

const url = import.meta.env.VITE_API_URL;

/** @type {import("./$types").LayoutServerLoad} */
export async function load({route, cookies}) {
  const token = cookies.get("token");
  const email = cookies.get('email')
  console.log('layoutEmail',email)
  console.log('layoutken',token)
  let res = await fetch(url + "/my/info", {headers: {token}});

  if (res.ok) {
    const json = await res.json()
    console.log(json)
    console.log('.'+JSON.stringify(json))
    return { ...( json), token };
  }
  if (route.id === "/login") return {};
  cookies.delete('token')
  cookies.delete('email')
  throw redirect(307, "/login");
}



