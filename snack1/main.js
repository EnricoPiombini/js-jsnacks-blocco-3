//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Creo l'array vuoto

const listaNumeri = [];
let somma = 0;

// Faccio un ciclo while che continui fino a che la condizione risulti falsa

while (somma < 50) {
    let number = parseInt(prompt('Inserisci un numero'));
    listaNumeri.push(number);
    somma = somma + number

    // Verifico con una condizione che la somma dei numeri sia inferiore a 50
    if (somma > 50) {
        console.log('La somma è superiore a 50')
    }

}
