// ARRAY CHE CONTIENE I 5 NUMERI CASUALI
let numbers = [];

// GENERO 5 NUMERI CASUALI
for (let i = 0; i < 5; i++) {
    let generate_numbers = parseInt(Math.floor(Math.random() * 100 + 1));
    
    // CONDIZIONE CHE MI PERMETTE DI ESTARRE NUMERI TUTTI DIVERSI E NON UGUALI TRA LORO 
    if (!numbers.includes(generate_numbers)){
        numbers.push(generate_numbers);
    }

    document.getElementById("number").innerHTML = numbers;
    console.log(numbers);
}

// IMPOSTO IL TIMER DI 30 SECONDI
setTimeout(function(){
    document.getElementById("number").innerHTML = "Inserisci i numeri che hai appena visualizzato";
}, 30000)


// FUNZIONE IN CUI VADO A CREARE L'ARRAY PER I NUMERI INSERITI DALL'UTENTE
function numeriUtente(){
    // ARRAY DEI NUMERI INSERITI DALL'UTENTE
    let num_client = [];
    let num;

    while (num_client.length < 5) {
        num = parseInt(prompt("Inserisci il numero visualizzato"));

        // CONDIZIONE PER STABILIRE SE IL VALORE INSERITO INSERITO E' UN NUMERO
        if (!isNaN(num) && !num_client.includes(num)) {
            num_client.push(num);
        }
    }

    return num_client;
}

// DEFINISCO LA FUNZIONE PER FAR VERIFICARE I NUMERI CHE HO INDOVINATO
function checkNum(num_client, numbers) {
    let verifica = [];
    // CICLO ARRAY DEI NUMERI CASUALI
    for (let i = 0; i < num_client.length; i++) {
        // CONDIZIONE PER VERIFICARE SE I NUMERI INSERITI SONO PRESENTI TRA QUELLI ESTARTTI IN PRECEDENZA
        if (numbers.includes(num_client[i])) {
            verifica.push(num_client[i]);
        }
    }

    return verifica;
}


// FUNZIONE PER DETERMINAR EIL RISULTATO OTTENUTO
function result (array){
    let text;
    // VERIFICO LA LUNGHEZZA DELL'ARRAY DI NUMERI INDOVINATI ED IN BASE ALLA SUA LUNGHEZZA STAMPO UN RISULTATO DIVERSO
    if(array.length == 1){
        text = `Hai indovinato un numero: ${array}`
    }
    else{
        text = `Hai indovinato ${array.length} numeri: Ecco quali ${array}`
    }

    document.getElementById("result").innerHTML = text;
}

// SECONDO TIMER ALL'INTERNO DEL QUALE VERRANNO SVOLTE LE FUNZIONI DI PROMPT E CONTROLLO NUMERI CORRETTI CON RISULTATO
setTimeout(function(){
    
    // RECUPERO I DATI DELLA FUNZIONE CHE DETERMINA I NUMERI INSEIRITI DALL'UTENTE
    let num_client = numeriUtente();

    // RECUPERO I DATI DELLA FUNZIONE CHE VERIFICA I NUMERI CHE HO INDOVINATO
    let verifica = checkNum (num_client, numbers);

    // RECUPERO I DATI DELLA FUNZIONE CHE STAMPA IL RISULTATO DEI NUMERI INDOVINATI
    result(verifica);

}, 32000)
