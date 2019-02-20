type constList = 'name' | 'age' | 'sex'

let testFun: (x: number, y: constList) => string = (x, y) => {
    return `${x}——变量1，${y}——变量2`
}

let strx:string = testFun(1, 'name')
console.log(strx)