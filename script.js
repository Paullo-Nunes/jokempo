// pegando cada elemento dos botões

const playHuman = (humanChoice) => {
    console.log(humanChoice);
    console.log(playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * choices.length);

    console.log(randomNumber);

    return choices[randomNumber];
}
