
/* getting random choice for computer*/
const container = document.querySelector('#container');
const content = document.querySelector('#content');
function getComputerChoice(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)}
    let x = getRandomInt(3);
    if(x == 0){
        computerSelection = "rock"
    }else if(x == 1){
        computerSelection = "paper"
    }else{
        computerSelection = "scissors"
    };
    return computerSelection;
    
}
let playerSelection;



let pc = 0;
let user = 0;

/* Play function */
function playRound(playerSelection){

    computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        content.textContent = "Even. Try again";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            content.textContent = "You lose! Papaer bits rock";
            pc++;
        }else{
            content.textContent = "You win! Rock bits scissors";
            user++;
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            content.textContent = "You lose! Scissors beats paper";
            pc++;
        }else{
            content.textContent = "You win! Paper beats rock";
            user++;
        }
    }else{
        if(computerSelection === "rock"){
            content.textContent = "You lose! Rock beats scissors";
            pc++;
        }else{
            content.textContent = "You win! Scissors beats paper";
            user++;
        }

    }
    

    if (pc == 5 || user == 5) {
        if(pc > user){
            container.textContent = "You lose!";
        }else{
            container.textContent = "You win!";
        }
        pc = 0;
        user = 0;
        
    }else{
        container.textContent = "Score is PC " + pc + " : " + user + " You";
    }
    
    
}


function clickListener(event) {
    playerSelection = event.target.value;
    playRound(playerSelection);
}




const buttons = document.querySelectorAll('button');

buttons.forEach(
    function (b) {
        b.addEventListener('click', clickListener);
    }
);






/*function getUserInput(){
    while(true){
        let input = prompt("Enter rock, paper or scissors");
        if(input === null){
            break;
        }
        else{
            input = input.toLowerCase();
            if(input !== "rock" && input !== "paper" && input !== "scissors"){
                alert("Wrong! Enter rock, paper or scissors!")
            }else{
                return input;
            }

            
        }

    }
}



function game(){
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getUserInput();
        playRound(playerSelection, computerSelection);

    }
    if (user > pc) {
        alert("You win!!! Score " + user + " : " + pc);
    } else if (user < pc) {
        alert("You lose!!! Score " + pc + " : " + user);
    }else{
        alert ("Even! Score " + user + " : " + pc);
    }
    user = 0;
    pc = 0;
}

    
   


*/