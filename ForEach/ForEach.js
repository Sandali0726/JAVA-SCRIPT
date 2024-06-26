/* forEach() = method used to iterate over the elements
               of an array and apply a specified function (callback)
               to each element.

                array.forEach(callback)*/

let number = [1,2,3,4,5];
number.forEach(double);
number.forEach(display);


function display(element){
    console.log(element);
}

function double(element,index,array){
    array[index]=element*2;
}