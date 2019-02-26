// 泛型错误示范
function createArray_wrong(length: number, value: any): Array<any> {
    let result = []
    for(let i = 0; i < length; i++) {
        result[i] = value
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

