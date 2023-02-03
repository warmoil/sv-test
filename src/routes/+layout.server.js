import {redirect} from "@sveltejs/kit";

const url = import.meta.env.VITE_API_URL;

/** @type {import("./$types").LayoutServerLoad} */
export async function load({route, cookies}) {
  const token = cookies.get("token");
  const email = cookies.get('email')
  let res = await fetch(url + "/my/info", {headers: {token}});

  if (res.ok) {
    const json = await res.json()
    return { ...( json), token };
  }
  if (route.id === "/login") return {};
  cookies.delete('token')
  cookies.delete('email')
  throw redirect(307, "/login");
}



