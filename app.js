// Recupero dal dom l'elemento select che contiene le opzioni
const selectElement = document.getElementById("select-difficulty");
// console.log(selectElement);

// Recupero dal dom il pulsante play
const playButton = document.querySelector(".play");
// console.log(playButton);

// Recupero dal dom il div container_main
const containerMain = document.querySelector(".container_main");
// console.log(containerMain);


// Funzione start game
const startGame = () => {

    containerMain.innerHTML = "";

    // Costante contenente il valore dell'opzione selezionata
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedOption);
    
    let arry = [];

    // Funzione per generare un numero random
    const RandomBomb = (min, max) => {

        for (let i = 0; i < 16; i++) {

            let numeriRandom = Math.floor(Math.random() * (max - min) + min);
            console.log(numeriRandom);
            arry.push(numeriRandom);


        }

        return arry;
    }
    

    // Funzione che attiva la classe active al click di square
    function squareActive() {

        // Dichiaro una varibiale con il valore dell'elemento cliccato
        const squareClicked = this;
        console.log(squareClicked);

        // Aggiungo la classe active a square
        squareClicked.classList.add("active");

        // Una volta cliccato l'elemento, al secondo click non cambia nulla
        squareClicked.removeEventListener ("click", squareActive); 
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

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;

                // Al click di square aggiungo la funzione squareActive che imposta il colore blu
                square.addEventListener("click", squareActive); 
                
            }
            
            // Richiamo funzione bombeRandom con valore minimo 1 e massimo 100
            arryBombe = RandomBomb(1, 100);
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
            arryBombe = RandomBomb(1, 81);
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