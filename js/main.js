// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
function numeroRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
var numeroBomba = numeroRandom(1, 100);
console.log(numeroBomba);

var myArrayBombe = [];
for (var i = 0; i < 16; i++) {
    numeroBomba[i] = myArrayBombe.push(numeroRandom(1,100));
    
}

console.log(myArrayBombe);


// I numeri non possono essere duplicati.
var controlloBombe = false;
for (var i = numeroBomba; i <myArrayBombe.length; i++) {
    if (numeroBomba == myArrayBombe[i]) {
        controlloBombe = false;
    }
}
if (controlloBombe != true) {

}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.