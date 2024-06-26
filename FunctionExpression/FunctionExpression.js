/* function declaration = define a reusable block of code
                          that performs a specific task.

function expression = a way to define function as 
                      value or variables*/

// const numbers = [1,2,3,4,5,6];
// const square = numbers.map(function(element){
//     return Math.pow(element,2);
// });

// console.log(square);


const hello = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("GoodBye");
},5000);

