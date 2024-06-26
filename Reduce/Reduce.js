//.reduce() = reduce the elements of an array
//            to a single value

// const prices = [5,30,10,25,15,20];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator,element){
//     return accumulator+element;
// }

// function sum(previous,next){
//     return previous+next;
// }

const grades = [95,30,10,25,15,20];
const Maximum = grades.reduce(getMax);
console.log(Maximum);

function getMax(accumulator,element){
        return Math.max(accumulator,element);}
