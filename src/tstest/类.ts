class Person {
    private sex: number
    public name: string
    public constructor(name: string, sex: number) {
        this.name = name
        this.sex = sex
    }
}

class Man extends Person {
    constructor(name: string) {
        super(name, 1)
    }
}

let p1 = new Person('wu weizhen', 1)
console.log(`p1的名字——${p1.name}`)