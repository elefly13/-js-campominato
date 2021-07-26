// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
function numeroRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}


var myArrayBombe = [];
while (myArrayBombe.length < 16) {
    var numeroBomba = numeroRandom(1,100);

    if (existInArray(myArrayBombe, numeroBomba) == false) {
        myArrayBombe.push(numeroBomba);
    }  
}
// I numeri non possono essere duplicati.
function existInArray (array, item) {
    for (i = 0; i < array.length; i++) {
        if (item == array[i]) {
            return true;
        }

    }
    return false
}


console.log(myArrayBombe.sort());




// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeroGiocatore = parseInt(prompt("Inserisci un numero tra 1 e 100"));
console.log(numeroGiocatore);

// var arrayNumGiocatore = [];






// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.