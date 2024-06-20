import "server-only"


const dictionaries = {
    en:()=> import("./dictonaries/en.json").then((module)=>module.default),
    bn:()=>import("./dictonaries/bn.json").then((module)=>module.default)
}

export const getDictionary = async (locale)=> dictionaries[locale]()