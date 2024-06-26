/* arrow functions = a concise way to write function expressions
                     good for simple functions that you are only once 
                     (parameters) => some code.*/

// const hello = () => console.log("Hello");
// hello();

// const hello = (name) => {console.log(`Hello ${name} `)
//                         console.log(`Read books`)};
// ;
// hello("sandali");

// const hello = (name,age) => {console.log(`Hello ${name} `)
//                         console.log(`you are ${age} years old`)};
// ;
// hello("sandali",22);

// setTimeout(hello,3000);

// function hello(){
//     console.log("Hello");
// }
// setTimeout(function(){
//     console.log("Hello");
// },3000);

//setTimeout( () => console.log("Hello"),3000);

const numbers = [1,2,3,4];
const square = numbers.map((element) =>Math.pow(element,2));
console.log(square);

