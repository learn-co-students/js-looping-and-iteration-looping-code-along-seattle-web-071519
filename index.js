import { write } from "fs";

function writeCards(namesArray, event) {
    let final=[]
    for (let i=0; i < namesArray.length; i++) {
    final.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return final
};




let x= 4;

function countdown(x){
    let i=x;
    while (i>=0){
        console.log(i)
        i--;
    }
}




