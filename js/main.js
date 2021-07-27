
// sezione funzioni
// genera un numero random 
function numeroRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
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
// fine sezione funzioni

// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// creo un array con le bombe 
let myArrayBombe = [];
let numBombe = 16;
while (myArrayBombe.length < numBombe) {
    var numeroBomba = numeroRandom(1,100);

    if (existInArray(myArrayBombe, numeroBomba) == false) {
        myArrayBombe.push(numeroBomba);
    }  
}

console.log(myArrayBombe.sort());


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

let arrayNumGiocatore = [];
let numeroGiocatore = 0;
let bombaTrovata = false;
let possibilita = 100 - numBombe;
do {
    let numeroGiocatore = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    
    // verifica se il numero giocatore è uguale al numero bomba
    if (myArrayBombe.includes(numeroGiocatore)) {
        bombaTrovata = true;
    } else {
        // l'utente non può inserire due volte lo stesso numero
        if (existInArray(arrayNumGiocatore, numeroGiocatore) == false) {
            arrayNumGiocatore.push(numeroGiocatore);
        }  
    }
 // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.       
} while ((arrayNumGiocatore.length < possibilita) && (bombaTrovata == false)); 
// La partita termina quando il giocatore inserisce un numero “vietato”
if (bombaTrovata = true) {
    alert("bomba esplosa hai perso");
}
// o raggiunge il numero massimo possibile di numeri consentiti.
else if (possibilita = 100 - numBombe) {
    console.log("sei una bomba hai vinto");
}
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
alert(" Hai totalizzato punti: " + arrayNumGiocatore.length);

// fine sezione logica gioco 

// sezione funzioni per la grafica

function creaCampo(celle) {
    for (let i = 2; i <= celle; i++) {
        let cella = `
             <div data-cella = ${i} class="cella"></div>
        `;

        let templateCella = document.createElement('DIV');
        templateCella.classList.add("quadrato");
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);

    }
}

document.getElementById('campo').addEventListener('click',

    function (e) { //e = event
        console.log(e.target.dataset.cella);
        let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']");
        console.log(element[0]);
        element[0].classList.add("red");
    }
)

creaCampo(100);



 
