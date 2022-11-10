let tratta = prompt("Inserisci il la tratta");
let età = prompt("Inserisci la tua età");
let tariffa = 0.21;
let prezzo;


prezzo = tariffa * tratta;

if(età >= 4 && età < 18){

    prezzo / 20 * 100;

} else if(età > 65){

    prezzo /40 * 100;

}



console.log(
    `
        Log: "Il totale è: ${prezzo}&#8364; " 
    `
);

