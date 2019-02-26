// 类实现接口
interface Eat {
    eDone()
}

interface Breath {
    bDone()
} 


class People implements Eat, Breath {
    eDone() {
        console.log("人吃了")
    }
    bDone() {
        console.log("人呼吸")
    }
}

class Animal implements Eat, Breath {
    eDone() {
        console.log("动物吃了")
    }
    bDone() {
        console.log("动物呼吸")
    }
}

let p = new People()
let a = new Animal()

p.eDone(); p.bDone();
a.eDone(); a.bDone();


// 接口继承接口
interface EatLot extends Eat {
    eLDone()
    eDone()  
}

