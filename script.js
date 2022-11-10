let tratta = prompt("Inserisci il la tratta");
let età = prompt("Inserisci la tua età");
let tariffa = 0.21;
let prezzo;
let sconto;
let totale;

prezzo = tariffa * tratta;

if(età >= 4 && età < 18){

   sconto = prezzo / 100 * 20;
   totale = prezzo - sconto;

} else if(età > 65){

    sconto = prezzo / 100 * 40;
    totale = prezzo - sconto;

} else {

    totale = prezzo;

}

totale = totale.toFixed(2);


console.log(
    `
        Log: "Il totale è: ${totale}€" 
    `
);

