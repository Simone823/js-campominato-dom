// Recupero dal dom l'elemento select che contiene le opzioni
const selectElement = document.getElementById("select-difficulty");
// console.log(selectElement);

// Recupero dal dom il pulsante play
const playButton = document.querySelector(".play");
// console.log(playButton);

// Recupero dal dom il div container_main
const containerMain = document.querySelector(".container_main");
// console.log(containerMain);

// Recupero dal dom il contenitore div user-score
const userScoreHtml = document.querySelector(".user-score");
// console.log(userScoreHtml);

// Score utente
let score = 0;

// Array numeri bombe
let numeriBombs = [];

// Array contenente tutti i quadratini
let arraySquare = [];
console.log(arraySquare);



// Funzione start game
const startGame = () => {

    // Reset contenuto html del contenitore degli square e userScore
    containerMain.innerHTML = "";
    userScoreHtml.innerHTML = "";

    // Costante contenente il valore dell'opzione selezionata
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedOption);

    // Funzione per generare un numero random
    const randomBomb = (min, max) => {

        do {
            let numeriRandom = Math.floor(Math.random() * (max - min) + min);
            console.log(numeriRandom);

            if (numeriBombs.includes(numeriRandom) === false){
                numeriBombs.push(numeriRandom);
            }

        } while (numeriBombs.length < 16);


        // Ciclo for per generare numeri finche la lunghezza dell'array numeriBomb
        // for (let i = 0; i < 16; i++) {

        //     let numeriRandom = Math.floor(Math.random() * (max - min) + min);
        //     console.log(numeriRandom);

        //     if (!numeriBombs.includes(numeriRandom)){
        //         numeriBombs.push(numeriRandom);
        //     }

        // }

        return numeriBombs;
    }
    

    // Funzione che attiva la classe active al click di square
    function squareActive() {

        // Dichiaro una varibiale con il valore dell'elemento cliccato
        const squareClicked = this;
        console.log(squareClicked);

        // Se il numero all'interno di squareClicked è presente nel mio array di numeri random, aggiungo la classe isbomb
        if (numeriBombs.includes(parseInt(squareClicked.innerHTML))) {
            console.log("bomba");

            // Aggiungo la class isbomb
            squareClicked.classList.add("isbomb"); 

            // Richiamo la funzione gameOver
            gameOver(score);

        } else {
            // Aggiungo la classe active a square
            squareClicked.classList.add("active");
            
            // Incremento lo score
            score++;
            console.log(score);
        }

        // Una volta cliccato l'elemento, al secondo click non cambia nulla
        squareClicked.removeEventListener ("click", squareActive); 
    }

    // Funzione gameOver
    function gameOver(score){
        console.log(score);
        userScoreHtml.innerHTML = `Hai perso! Il tuo punteggio è di ${score} punti`;
    }



    // Switch livelli game
    switch (selectedOption) {

        case "----Seleziona un livello----":
            console.log("non valido");
            confirm("Seleziona un livello e gioca!");
            break;


        case "easy":
            // console.log("difficoltà easy");

            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 101; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square" + -i);
                square.style.width = `calc(100% / 10)`;

                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i quadratini all'interno del mio arraySquare
                arraySquare.push(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;

                // Al click di square aggiungo la funzione squareActive che imposta il colore blu
                square.addEventListener("click", squareActive);    
            }
            
            // Richiamo funzione bombeRandom con valore minimo 1 e massimo 100
            arryBombe = randomBomb(1, 100);
            console.log(arryBombe);

            break;


        case "hard":
            // console.log("difficoltà hard");

            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 82; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square" + -i);
                square.style.width = `calc(100% / 9)`;

                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;

                // Al click di square aggiungo la funzione squareActive che imposta il colore blu
                square.addEventListener("click", squareActive); 

            }

            // Richiamo funzione bombeRandom con valore minimo 1 e massimo 81
            arryBombe = randomBomb(1, 81);
            console.log(arryBombe);

            break;


        case "crazy":
            // console.log("difficoltà crazy");

            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 50; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square" + -i);
                square.style.width = `calc(100% / 7)`;


                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;

                // Al click di square aggiungo la funzione squareActive che imposta il colore blu
                square.addEventListener("click", squareActive); 
            }

            // Richiamo funzione bombeRandom con valore minimo 1 e massimo 49
            arryBombe = randomBomb(1, 49);
            console.log(arryBombe);

            break;
    }

    

}

// Al clic del pulsante play attivo la funzione start game
playButton.addEventListener("click", startGame);