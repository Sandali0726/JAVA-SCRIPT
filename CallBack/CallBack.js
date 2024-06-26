/*callback = a function that is passed as an argument to another function.
used to handle asynchronous operations.
1.reading a file 
2. network requests 
3.interacting with database
"Hey, when you are done, call this next."*/


sum(displayPage,1,2);

function sum(callback,x,y){
    let result=x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myh1").textContent = result;
}