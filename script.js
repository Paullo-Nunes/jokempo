// Pegando o paragrafo de resultado
const result = document.querySelector('.result');

//pegando cada span
const pointer = document.querySelector('.pointer');
const alexa = document.querySelector('.alexa');

//Atribuindo valores aos spans

let pointerValue = 0;
let alexaValue = 0;

//usando o ENUM
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

// pegando cada elemento dos botões

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];

    const randomNumber = Math.floor(Math.random() * choices.length);

    console.log(randomNumber);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(" Escolha do humano: " + human + " Escolha da máquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        pointerValue++;
        pointer.innerHTML = pointerValue;
        result.innerHTML = "Você ganhou!";
    } else {
        alexaValue++;
        alexa.innerHTML = alexaValue;
        result.innerHTML = "Você perdeu!";
    }

}

// Regras do jogo:
// Pedra vence Tesoura
// Tesoura vence Papel
// Papel vence Pedra