// pegando cada elemento dos botões

const playHuman = (humanChoice) => {
    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * choices.length);

    console.log(randomNumber);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(" Escola do humano: " + human + " Escola da máquina: " + machine);

}