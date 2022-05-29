// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

const numeroInserito = parseInt(prompt('Inserisci un numero'));
const arrayGenerati = [];

while (arrayGenerati.length < numeroInserito) {

    const nuovoArray = [];

    arrayGenerati.push(nuovoArray)

    // INSERISCO 10 NUMERI CASUALI ALL'INTERNO DI OGNI ARRAY GENERATO
    while(nuovoArray.length < 10){
        const numeroCasuale = Math.floor(Math.random()*100)+1;
        nuovoArray.push(numeroCasuale);
    }

console.log(nuovoArray)
}