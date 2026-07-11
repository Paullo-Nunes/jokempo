// Pegando o paragrafo de resultado
const result = document.querySelector('.result');

//pegando cada span
const pointer = document.querySelector('.pointer');
const alexa = document.querySelector('.alexa');

//Atribuindo valores aos spans

let pointerValue = 0;
let alexaValue = 0;

// pegando cada elemento dos botões

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * choices.length);

    console.log(randomNumber);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(" Escolha do humano: " + human + " Escolha da máquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === 'rock' && machine === 'scissors') || (human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper')) {
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