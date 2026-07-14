// Pegando o paragrafo de resultado
const result = document.querySelector('.result');

// pegando a imagem e fazendo a troca de src
const image = document.querySelector('.menu');
const close = document.querySelector('.close');

//mapeando o parágrafo das regras do jogo
const rules = document.querySelector('.regras');

let isMenuOpen = false;

rules.style.display = 'none';
close.style.display = 'none';

const showMenu = () => {
    rules.style.display = 'block';
    image.style.display = 'inline';
};

rules.addEventListener('click', showMenu);

const toggleMenu = () => {
    if (isMenuOpen) {
        rules.style.display = 'none';
        image.style.display = 'inline';
        close.style.display = 'none';
    } else {
        rules.style.display = 'block';
        image.style.display = 'none';
        close.style.display = 'inline';
    }

    isMenuOpen = !isMenuOpen;
};

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