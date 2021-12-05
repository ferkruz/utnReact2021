import instance from "../Config/axios"

export function getAll(){
    return instance.get("sites/MLA/search?q=ipod&limit=6")
}

export function getAllPag(prod, index){
    
    console.log (`sites/MLA/search?q=${prod||"ipod"}&limit=6&offset=${index*6}`)    
    return instance.get(`sites/MLA/search?q=${prod||"ipod"}&limit=6&offset=${index*6}`) 
}

export function getAllSearch(prod){
    return instance.get(`sites/MLA/search?q=${prod}&limit=6`)
}

export function getById(id){
    return instance.get(`items/${id}`)
}
