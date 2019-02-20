// boolean
let bool: boolean = false

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let str: string = 'asdf'

// array
let arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1, 2, 3]

// tuple
let tupleArr: [string, number ]
tupleArr = ['12', 12]

// enum
enum Color { Red, Green = 4, Blue }
let c: Color = Color.Green // 4
let colorName: string = Color[5] // blue

// any
let notSure: any;
notSure = 123
notSure = '123'
notSure = false

// void
let unusable: void = undefined

// undefined,null

// 类型断言
let someValue: any = "this is  haha"
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length