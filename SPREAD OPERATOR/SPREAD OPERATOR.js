//SPREAD OPERATOR = ...allows  an iterable such as an array or string to be expanded
//                  into seperate elements (unpacks the elements)
// let numbers = [1,2,3,4,5,6];
//let maximum = Math.max(numbers); // output = NaN
// let maximum = Math.max(...numbers); 
// console.log(maximum);

// let username = "Sandali Sathsarani"; 
// let letters = [...username]; //(18) ['S', 'a', 'n', 'd', 'a', 'l', 'i', ' ', 'S', 'a', 't', 'h', 's', 'a', 'r', 'a', 'n', 'i']
// console.log(letters);

// let username = "Sandali Sathsarani";
// let letters = [...username].join("-");//S-a-n-d-a-l-i- -S-a-t-h-s-a-r-a-n-i
// console.log(letters);

let fruits = ["apple","mango","banana"];
let vegetable = ["carrots","celery","potatoes"];
//let newfruits = [...fruits];//copy list
// let food = [...fruits,...vegetable];
let food = [...fruits,...vegetable,"eggs","milk"];
console.log(food); 