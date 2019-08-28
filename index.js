// Code your solutions in this file
function writeCards(array, event){
    let array2 = []
    for (let i=0; i < array.length; i++){
        array2.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return array2
}

function countdown(number){
    while (number > 0){
        console.log(number);
        number-=1;
    }
    console.log(number);
}