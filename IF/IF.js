// let age=25;
// if(age>=18){
//     console.log("You are old enough to enter this statement");
// }
// else{
//     console.log("You are not old enough to enter this statement");
// }
// let time=9;
// if(time<12){
//     console.log("Good morning");
// }
// else{
//     console.log("Good Afternoon");
// }
// let isStudent=false;
// if(isStudent){
//     console.log("You are student");
// }
// else{
//     console.log("You are not student");
// }


// //Nested loop
// let age=25;
// let hasLicence=false;
// if(age>=16){
//     console.log("You areold enough to drive");
//     if(hasLicence){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You do not  have your license yet");
//     }
// }
// else{
//     console.log("You are must 16+ to have a license");
// }


//Else IF
const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("result");

let age;

mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age); 
    if(age>=18){
        result.textContent=`You are old enough to enter this site`;
    }
    else if(age===0){
        result.textContent=`You are a baby`;
    }
    else if(age<0){
        result.textContent=`You can't below 0`;
    }
    
    else{
        result.textContent=`You must be 18+ to enter this site`;
    }

}
