import apiUrl from "$lib/url/URL.js";

const url = apiUrl + "/user";

/** @type {import("./$types").Actions} */
export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const name = data.get("name");
    const nickName = data.get("nickname");

    return await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "*/*"},
      body: JSON.stringify({name, nickName})
    }).then(res => {
      if (res.status === 201 || res.status === 200) {
        return
      } else if (res.status === 409) {
        return {
          message: "이미 존재하는 닉네임입니다"
        };
      } else {
        return {
          message: "서버에러"
        };
      }
    }).catch(e => {
      return {
        error: e
      };
    });
  }
};

