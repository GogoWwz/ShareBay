// 为函数定义类型，冒号后面number为返回值类型
function add(x: number, y: number): number {
    return x + y
}
console.log(add(1, 2))
// ---------------------------
let add1 = (x: number, y: number): number => {
    return x + y
}
console.log(add1(1, 2))

// 可选参数（必须在必选参数后面）
function speak(firstName:string, lastName?: string): string {
    return firstName + lastName
}
console.log(speak('wu', 'weizhen'))

// 默认值
function speak1(f: string, l = 'weizhen'): string {
    return f + l
}
console.log(speak1('wu', undefined))

// 剩余参数
function speak2(f: string, ...restStr: string[]): string {
    return f + restStr.join(' ')
}
console.log('wu', 'weizhen', 'shi', 'shuai', 'ge')

// this
let obj = {
    name: 'wu weizhen',
    speak: function() {
        return () => {
            return this.name
        }
    }
}
let ss = obj.speak()
console.log(ss())

interface Funs {
    name: string
}

interface Man {
    name: string,   
    speak(this: Man): () => Funs
}

let man: Man = {
    name: 'wuweizhen',
    speak: function(this: Man) {
        return () => {
            return { name: this.name }
        }
    }
}

let sp = man.speak()
console.log(sp().name)

