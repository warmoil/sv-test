import {redirect} from "@sveltejs/kit";

const url = import.meta.env.VITE_API_URL;

/** @type {import("./$types").LayoutServerLoad} */
export async function load({route, cookies}) {
  const token = cookies.get("token");
  let res = await fetch(url + "/my/info", {headers: {token}});

  if (res.ok) return { ...(await res.json()), token };
  if (route.id === "/login") return {};

  cookies.set("token", null, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    maxAge: 0
  });
  throw redirect(307, "/login");
}



