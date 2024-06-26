// let day=2;
// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;

//     case 3:
//         console.log("It is Wednesday");
//         break;
//     default:
//         console.log('${day} is not a day');

// }

let testScore = 42;
let grade;
switch(true){
    case testScore>=90:
        grade='A';
        break;
    case testScore>=80:
        grade='B';
        break;
    case testScore>=70:
        grade='C';
        break;
    default:
        grade="F";

}
console.log(grade);