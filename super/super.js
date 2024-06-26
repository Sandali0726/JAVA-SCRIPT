/* super = keyword used in class to call constructor or 
           access the properties and method of a parent (superclass)
           this = this object
           super = the parent*/
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${name} move at a speed of ${speed}mph`);
    }

    
}

class Rabbit extends Animal{
    
    constructor(name,age,runSpeed){
        super(name,age);
        // this.name = name;
        // this.age = age;
        this.runSpeed = runSpeed;
        super.move(this.runSpeed);

    }
    
    
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        // this.name = name;
        // this.age = age;
        this.swimSpeed = swimSpeed;

    }
    
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        // this.name = name;
        // this.age = age;
        this.flySpeed = flySpeed;

    }
   
}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,5);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);


