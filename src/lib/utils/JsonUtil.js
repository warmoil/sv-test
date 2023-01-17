

export const formDataToJson = (formData) =>{
    let obj = {}
    for(let key of formData.keys()){
        obj[key] = formData.get(key)
    }
    return obj;
}