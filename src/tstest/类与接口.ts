// 类实现接口
interface Eat {
    say()
}

interface Breath {
    breath()
} 


class People implements Eat, Breath {
    say() {
        console.log("人吃了")
    }
    breath() {
        console.log("人呼吸")
    }
}

class Animal implements Eat, Breath {
    say() {
        console.log("动物吃了")
    }
    breath() {
        console.log("动物呼吸")
    }
}

let p = new People()
let a = new Animal()

p.say(); p.breath();
a.say(); a.breath();


// 接口继承接口