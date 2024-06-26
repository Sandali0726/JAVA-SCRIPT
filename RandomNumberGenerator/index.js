// //RANDOM NUMBER GENERATOR
// let random= Math.random();
// console.log(random);
// let z= Math.floor(random*6);
// console.log(z);

const mybutton = document.getElementById("mybutton");
const lable1 = document.getElementById("mylable1");
const lable2 = document.getElementById("mylable2");
const lable3 = document.getElementById("mylable3");

const min=1;
const max=10;
let random1;
let random2;
let random3;

mybutton.onclick = function(){
    random1 = Math.floor(Math.random()*max)+min;
    random2 = Math.floor(Math.random()*max)+min;
    random3 = Math.floor(Math.random()*max)+min;

   lable1.textContent=random1;
   lable2.textContent=random2;
   lable3.textContent=random3;


}


