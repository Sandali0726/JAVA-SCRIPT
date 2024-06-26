//Async/Await = Async = makes a function return a promise 
//              Await = makes an async function wait for a promise

//              Allows you write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

 function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dogwalked =true;
            if(dogwalked){
                resolve("You walk the dog 🐕"); 
            }
            else{
                reject("You didn't walk the dog 🐕")
            }
            
        },1500);
    });   
}

 function cleanKitchen(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const kitchenCleaned =true;
            if(kitchenCleaned){
                resolve("You clean the Kitchen 🧹");  
            }
            else{
                reject("You didn't clean the Kitchen 🧹")
            }
            
        },2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const trashTakeOut =false;
            if(trashTakeOut){
                resolve("You take out  the trash 🗑️"); 
            }
            else{
                reject("You didn't take out  the trash 🗑️")
            }
            
        },5000);
    });
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})                        //---BY USING ASYNC/AWAIT---
//          .then(value => {console.log(value); return takeOutTrash()})                        //---WE DON'T WANT TO CALL--- 
//          .then(value => {console.log(value);console.log("You finished all the chores!")})   //---THE FUNCTION THAT WAY---
//          .catch(error => console.error(error));

async function doChores(){
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
}
catch(error){
    console.error(error);
}
}
 doChores()
