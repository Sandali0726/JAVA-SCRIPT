//Promise = An object that manages asynchronous operations.
//          wrap a Promis Object around {asynchronous code}
//          "I promise to return a value"
//         PENDING -> RESOLVED or REJECTED
//         new Promise ((resolve, reject) => {asynchronous code})

//DO THIS CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dogwalked =false;
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

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value);console.log("You finished all the chores!")})
         .catch(error => console.error(error));

