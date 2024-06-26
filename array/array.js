let fruits = ["apple","banana","orange"];
// fruits[3]="egg";
// fruits.push("mango");
//fruits.pop();

//console.log(fruits[2]);
// console.log(fruits[3]);

//fruits.unshift("mango"); // The unshift() method adds new elements to the beginning of an array.

// fruits.shift();
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length-1]);

// let numOfFruits = fruits.length; 
// let index = fruits.indexOf("apple");
// console.log(numOfFruits);
// console.log(index);

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

//fruits.sort();
fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}

