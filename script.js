
/* getting random choice for computer*/
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
const PAPER = "paper"


let pc = 0;
let user = 0;

/* Play function */
function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        alert("Even. Try again")
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            alert("You lose! Papaer bits rock");
            pc++;
        }else{
            alert("You win! Rock bits scissors")
            user++;
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            alert("You lose! Scissors beats paper");
            pc++;
        }else{
            alert("You win! Paper beats rock")
            user++;
        }
    }else{
        if(computerSelection === "rock"){
            alert("You lose! Rock beats scissors");
            pc++;
        }else{
            alert("You win! Scissors beats paper")
            user++;
        }
    }
}

function getUserInput(x){
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
        let playerSelection = getUserInput(computerSelection);
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

    
   


