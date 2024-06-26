const min=1;
const max= 100;
const answer = Math.floor(Math.random()*(max-min+1));

let attempt=0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess anum between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter the valid number");
    }
    else if(guess < min || guess>max){
        window.alert("Please enter the valid number");
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("low! try again");
        }
        else if(guess>answer){
            window.alert("High! try again");
        }
        else{
            window.alert("correct");
            running = false;
        }
    }
    
}