//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti.

let listaNumeri =[];
let somma = 0;

// Apro il ciclo 

for(let i = 0; i < 5; i++){
    let numberRequired = prompt('Inserisci il numero');
    listaNumeri.push(numberRequired);
    somma = somma + parseInt(numberRequired);
}
console.log(somma);