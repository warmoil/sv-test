import apiUrl from "../../lib/url/URL";

const url = apiUrl + "/issue";

/** @type {import("./$types").Actions} */

// form action 에 관한 메소드들
export const actions = {
    default: async ({request})=>{
        const formData = await request.formData()
        let obj = {}
        for (let key of formData.keys()) {
            console.log(key,formData.get(key))
            obj[key] = formData.get(key)
        }
        obj['isSecret'] = !!formData.get('isSecret')
        console.log('obj',obj)
        return await fetch(url , {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "*/*"},
            body:JSON.stringify(obj)
        }).then(res => {
            if (res.status === 201 || res.status === 200) {
            } else if (res.status === 409) {
                return {
                    message: "이미 이 이슈에 작성한 내용이 있습니다."
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
}