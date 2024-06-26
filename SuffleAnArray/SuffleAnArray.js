//Fisher-Yates algorithm

const cards = [1,'A',3,'h',5,6,7,'p'];
shuffle(cards);
//cards.sort(() => Math.random() - 0.5);

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const random =Math.floor(Math.random() * (i+1));
        [array[i],array[random]] = [array[random],array[i]];
    }

}
shuffle(cards);
console.log(cards);