import apiUrl from "$lib/url/URL.js";


const url = apiUrl + '/meeting/'

export const GET = async idx => {
    console.log('idx',idx)
    return await fetch(url + idx)
}