import apiUrl from "$lib/url/URL.js";

const url = apiUrl + '/user';
export const GET = async (page,token) => {
    let reqUrl = url;
    if (page) reqUrl += `?page=${page}`;
    console.log('/user token::'+token)
    return await fetch(reqUrl, {
            method: 'GET',
            headers: {token}
        }
    );
}
