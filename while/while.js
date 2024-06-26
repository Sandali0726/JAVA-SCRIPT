// let username=;
// while(username==="" || username===null){
//     username = window.prompt("Enter name");
// }

// console.log(`Hello ${username}`);

//-----------------DO -WHILE--------------------
// let username;
// do{
//     username = window.prompt("Enter name");
// }while(username==="" || username===null)
//     console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter name");
    password = window.prompt("Enter password");

    if(username=="myusername" && password === "mypassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid! Try again");
    }

}