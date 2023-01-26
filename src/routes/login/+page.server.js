const url = import.meta.env.VITE_API_URL;

/** @type {import("./$types").Actions} */
export const actions = {
  login: async ({cookies, request}) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    const res = await fetch(url + "/sign-in", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    }).catch(e => {
      console.log(e);
    });

    if (res.status !== 200) {
      console.log(res);
      return {success: false, status:res.status};
    }

    const json = await res.json();
    const {token} = json;
    cookies.set("token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30
    });

    return {success: true};
  },
};
