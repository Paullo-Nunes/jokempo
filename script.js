// Pegando o paragrafo de resultado
const result = document.querySelector('.result');

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
        result.innerHTML = "Você ganhou!";
    } else {
        result.innerHTML = "Você perdeu!";
    }

}

// Regras do jogo:
// Pedra vence Tesoura
// Tesoura vence Papel
// Papel vence Pedra