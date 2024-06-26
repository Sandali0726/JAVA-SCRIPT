//variable scope = where a variable is recognized 
//                 and accessible (local vs global)

// function2();

// function function1(){
//     let x = 1;
//     console.log(x);
// }

// function function2(){
//     let x = 5;
//     console.log(x);
// }


// let x = 3;
// function1();
// function2();
// function function1(){
//     console.log(x);
// }

// function function2(){
//     console.log(x);
// }


let x = 3;
function1();
function2();
function function1(){
    let x = 5;
    console.log(x);
}

function function2(){
    let x = 8;
    console.log(x);
}

