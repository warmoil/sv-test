import apiUrl from "$lib/url/URL.js";

const url = apiUrl + '/user';
export const GET = async (page) => {
    let reqUrl = url;
    if (page) {
        reqUrl += `?page=${page}`;
    }
    return await fetch(reqUrl);
}

export const POST = async (name, nickName) => {
    return await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body: JSON.stringify({name, nickName})
    });
}


