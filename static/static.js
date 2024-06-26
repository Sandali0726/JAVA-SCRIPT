/* static key word = that defines properties or methods that belong 
                    to a class itself rather than the object created
                    from that class (class owns anything Static, not the objects)*/

// class MathUtil{
//     static PI = 3.141598;

//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }
//     static Area(radius){
//         return this.PI*radius**2;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(14));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.Area(7));


class User{
    static userCount =0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users on`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();