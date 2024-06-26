//rest parameters = (...rest) allow a function work with a variable 
//                  number of arguments by bundling them into an array

//                  spread  = expand an array seperate elements
//                  rest = bundles seperates elements into an array.
//                        = opposite of spread

// const food1 = "pizza";
// const food2 = "hotdog";
// const food3 = "hamburger";
// const food4 = "sushi";

// function openfridge(...foods){
    //console.log(foods);
    // console.log(...foods);
// }

// openfridge(food1,food2,food3,food4);

function sum(...numbers){  // parameter size is unlimited
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    //return result;
    return result/numbers.length;
}
console.log(sum(1,2,3,4));

