// this = reference to the object where THIS is used
//               (the object depends on the immediate context)
//                person.name = this.name

const person1 = {
    name: "sandali",
    favfoood: "icecream",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, //use THIS or person1 give same output
    eat: function(){console.log(`${this.name} is eating ${this.favfoood}` )}

}

const person2 = {
    name: "Gatheesh",
    favfoood: "chocolate",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, //use THIS or person1 give same output
    eat: function(){console.log(`${this.name} is eating ${this.favfoood}` )}

}

//THIS not work with error functions
person1.eat();
person2.eat();

//console.log(this);