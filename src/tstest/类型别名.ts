type Name = string
type NameFun = () => string
type NameOrNameFun = Name | NameFun

function getName(arg: NameOrNameFun): Name {
    return typeof arg === 'string' ? arg : arg()
}

let str1:string = getName("wuweizhen")

let str2: Name = getName(() => "da shuaige")

console.log(str1, str2)