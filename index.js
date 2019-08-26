// Code your solutions in this file

function writeCards(array) {
    let cards = [];
    array.forEach(function(e){
        cards.push(`Thank you, ${e}, for the wonderful surprise gift!`);
    });
    return cards;
}

function countdown(num) {
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}