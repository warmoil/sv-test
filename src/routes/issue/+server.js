import apiUrl from "$lib/url/URL.js";

const url = apiUrl + '/issue';


export const GET = async page => {
    let reqUrl = url;
    if (page) reqUrl += `?page=${page}`;
    return await fetch(reqUrl);
};

export const POST = async (issue) => {
    return await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "*/*"},
        body: JSON.stringify({issue})
    })
}