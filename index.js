// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(array, event) {
    let newarr = []
    for(let i = 0; i < array.length; i++) {    
        newarr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newarr

}

function countdown(num){
    for(let i = 0; i < num + 1; i++){
        console.log(i)
    }
}
