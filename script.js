let userScore = 0;
let compScore = 0;
let Rock = document.getElementById('rock');
let Scissors = document.getElementById('scissors');
let Paper = document.getElementById('paper');
let scoreBoard = document.querySelector('.score-board')
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let result = document.getElementById('result');
let gameOver = false;


function playGame() {
    rock.addEventListener('click', () => game('Rock'));
    paper.addEventListener('click', () => game('Paper'));
    scissors.addEventListener('click', () => game('Scissors'));
}
playGame();

const userChoice = userInput => {
    if (userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors') {
        return userChoice;
    }
};

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            win(userChoice, computerChoice);
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;

        case 'PaperPaper':
        case 'RockRock':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
};
game();

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = userChoice + ' beats ' + computerChoice + ' You win';
};

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result.innerHTML = userChoice + ' loses to ' + computerChoice + ' You Lose';
};

function draw(userChoice, computerChoice) {
    result.innerHTML = 'It\'s a draw' + ' you both pick ' + userChoice;
};

reset.addEventListener('click', function () {
    gameReset();
})

function gameReset() {
    userScore = 0;
    compScore = 0;

    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;

    gameOver = false;
};