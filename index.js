// Code your solutions in this file
function writeCards(array, name) {
    let cards = []
    for (let i = 0; i < array.length; i ++) {
    cards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return cards
}

function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
}