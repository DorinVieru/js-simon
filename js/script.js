// ARRAY CHE CONTIENE I 5 NUMERI CASUALI
let numbers = [];

// GENERO 5 NUMERI CASUALI
for (let i = 0; i < 5; i++) {
    let generate_numbers = parseInt(Math.floor(Math.random() * 100 + 1));

    numbers.push(generate_numbers);

    document.getElementById("number").innerHTML = numbers;
    console.log(numbers);
}

// IMPOSTO IL TIMER DI 30 SECONDI
setTimeout(function(){
    document.getElementById("number").innerHTML = "";
}, 30000)

// ARRAY DEI NUMERI INSERITI DALL'UTENTE
let num_client = [];

// PROMPT PER INSERIRE I 5 NUMERI CON CICLO WHILE E TIMER CHE DETERMINA L'INIZIO DELL'INSERIMENTO NEL PROMPT A 2 SECONDI DOPO LA FINE DEL TIMER DI VISUALIZZAZIONE DEI 5 NUMERI
setTimeout(function(){
    let num;
    
    while(num_client.length < 5){
        num = parseInt(prompt("Inserisci il numero visualizzato"));
        num_client.push(num);
        console.log(num);

        // CONDIZIONE PER STABILIRE SE IL NUMERO INSERITO E' CORRETTO
        if (num == numbers) {
            console.log(num + " è il numero corretto, complimenti!")
        }
        else {
            console.log(num + " non è il numero corretto.")
        }
    }

}, 32000)

