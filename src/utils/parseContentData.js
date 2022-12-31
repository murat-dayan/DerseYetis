export default function(data){
    return Object.keys(data).map(key=>{  //  object.keys>>datanın keylerini array yapısında döndürür
        return{
            id:key,
            ...data[key]
        }
    })      
}