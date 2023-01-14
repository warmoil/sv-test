import {GET} from "./+server.js";
/** @type {import('./$types').PageLoad} */
export function load({url}) {
    const page = url.searchParams.get('page') || 1;
    const size = url.searchParams.get('size') || 5;

    if(page){
        return {
            page,size
        }
    }

}