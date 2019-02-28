// 泛型错误示范
function createArray_wrong(length: number, value: any): Array<any> {
    let result = []
    for(let i = 0; i < length; i++) {
        // result[i] = value
    }
    return result
}

let cArr = createArray_wrong(10, 'value')
console.log(cArr)

// 泛型基本例子
function createArray<T>(length: number, value: T) {
    let result: Array<T> = []
    for(let i = 1; i < length; i++) {
        result[i] = value
    }
    return result
}
let dArr = createArray<string>(10, 'value')
console.log(dArr)

// 多个类型参数
function getChange<T, U>(str: T, num: U): string {
    return str.toString() + num.toString()
}
console.log(getChange<string, number>('wuweizhen', 123))

// 泛型约束
interface NumLimit {
    num: number
}
function getChange1<T, U extends NumLimit>(str: T, arg: U): string {
    return str.toString() + arg.num.toFixed(2)
}
console.log(getChange1('wuweizhen', { num: 123.123 }))