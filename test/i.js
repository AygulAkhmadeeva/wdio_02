//JS classes
class Animal {
    constructor(name) {             //by const create pole
        this.name = name;
    }

    move() {
        console.log('Move ' + this.name)
    }
}

class Fish extends Animal {   ///наследование 1 класса от другого
}

class MicroFish extends Fish {   ///наследование
}


const frog = new Animal('Crazy');
const goldFish = new MicroFish('Nemo');
console.log(goldFish.move());
