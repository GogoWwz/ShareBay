// private、protected、public 和 存取器
class Person {
    private sex: number
    protected age: number
    public name: string
    public constructor(name: string, sex: number, age: number) {
        this.name = name
        this.sex = sex
        this.age = age
    }

}

class Man extends Person {
    constructor(name: string, sex: number, age: number) {
        super(name, sex, age)
        console.log(`名字——${this.name}`)
        // console.log(`性别——${this.sex}`)
        console.log(`年龄——${this.age}`)
    }
}
let p1 = new Man('wu weizhen', 1, 20)

/** 
 * 抽象类
 * 1、不允许被实例化
 * 2、抽象类中的抽象方法必须在子类中实现
 * 
 * */ 

abstract class Job {
    public name
    public constructor(name: string) {
        this.name = name
    }
    public abstract sayName(): string
}

// let j = new Job('job')

class Teacher extends Job {
    public place: string
    
    public sayName() {
        return this.name
    }
}

let teacher: Teacher = new Teacher('wuweizhen')
console.log(teacher.sayName())