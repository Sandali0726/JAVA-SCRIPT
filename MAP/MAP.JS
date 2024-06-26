//.map = accepts a callback and apples that  function 
//       to each element of an arrays, then return a new array 
// const number = [1,2,3,4,5];
// const sqr = number.map(square);

// console.log(sqr);

// function square(element){
//     return Math.pow(element,2);
// }

const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
