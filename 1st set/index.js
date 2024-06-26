// //1 part
// console.log(`Hello`);
// console.log(`I like music`);

// window.alert(`This is an alert!`);
// // like notifications
// window.alert(`Read more books!`);
// document.getElementById("My id").textContent="Hello";
// document.getElementById("myP").textContent="I love music and live in countryside";

// // 2 part-variables
// // 1.declaration   let x;
// // 2.assigment x=100; or at once can do both
// let x;
// x=100;
// console.log(x);
// let y=120;
// let age=22;
// console.log(age);
// let gpa=3.55;
// console.log(`You have good gpa ${gpa} Wow!`);
// console.log(`Your are ${age} years old`);
// console.log(typeof age);

// //String 
// let firstname="Sandali";
// let email="san123@gmail.com";
// let online=true;
// console.log(typeof firstname);
// console.log(firstname);
// console.log(`your name is ${firstname}`);
// console.log(`your email is ${email}`);
// console.log(typeof online);
// console.log(`I'm ${online}`);
// let fullName="Sandali Jayawardhana";

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = email;
// document.getElementById("p3").textContent = online;
// let s=30;
// s=s+1;    // 31//like that we can do any operations like other languages.
// s+=3;//34
// s++;//35
// console.log(s);

// /*operator precedence
// 1.()
// 2.^
// 3.* / %
// 4.+  -  */
// let r= 1+2*3+4**2;
// console.log(r);

// //how to accept user input
// //1.easy way=window prompt
// //2..professional way=HTML text box

// // let username;
// // username=window.prompt("what's your username?");
// // console.log(username);
// let username;
// document.getElementById("my submit").onclick=function(){
//     username=document.getElementById("my text").value;
//     console.log(username);
//     document.getElementById("H1").textContent=`Hello ${username} welcome`;
// }


// //type conversion = change the datatype of a value to another (strings, numbers, booleans)
// let ages =window.prompt("How old are you?");
// //age+=1;
// //console.log(age, typeof age);

// ages=Number(ages);
// ages+=1;
// console.log(ages, typeof ages);

// // let x="pizza";
// // let y="pizza";
// // let z="pizza";
// // let x=0;
// // let y=0;
// // let z=0;
// // let x="";
// // let y="";
// // let z="";//output=false 'boolean' so we can use this to ensure wether the input is zero or not.
// let t;
// let f;
// let z;
// t=Number(t);
// f=String(f);
// z=Boolean(z);
// console.log(t, typeof t);
// console.log(f, typeof f);
// console.log(z, typeof z);

// //constant = a variable that can't be change
// const PI=3.14159;
// let radius;
// let circumstance;
// //PI=9.567;  TypeError: Assignment to constant variable
// radius=window.prompt('Enter the radius of the circle');
// radius=Number(radius);
// circumstance=2*PI*radius;
// console.log(circumstance);


const PI=3.14159;
let radius;
let circumstance;
//PI=45.67; button doesn't work
document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("g").value;
    radius=Number(radius);
    circumstance=2*PI*radius;
    console.log(circumstance);
    document.getElementById("v").textContent=circumstance;
}

