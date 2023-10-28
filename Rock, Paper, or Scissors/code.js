console.log("Hi Player");


//choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
const getUserChoice = (userInput) => {

  // pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations
  userInput = userInput.toLowerCase(); //created function, variable, transform text,
  if (
    //user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    //if with value,else
    //console.log("checked if user's input is correct:" + userInput); //now we can run any code.
    return userInput;
  } else {
    console.log("Player check your imput.");
  }
};


//Test the function
//no need ad log when calling as the function has log. i.e console.log(getUserChoice('Paper'));
//getUserChoice('rock'); moving to down.












//the computer make a choice
const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3);
  //console.log("convert computers input into a value from this number " + result); //remove later
  if (randomNumber === 0) {
    //console.log("Computer input: rock");
    return  'rock';
  } else if (randomNumber === 1) {
   // console.log("Computer input: paper");
    return  'paper';
  } else if (randomNumber === 2) {
    //console.log("Computer input: scissors");
    return  'scissors';
  }
  return randomNumber;
  //console.log(randomNumber);
};
//Test the function
//console.log(getComputerChoice());
//getComputerChoice();
//console.log("User input: " + getUserChoice("rock"));










//time to determine a winner
const determineWinner = (userChoice , computerChoice ) => {
  //deal with the tie
  if (userChoice === computerChoice) {
    return "tie";
  }
//not a tie, determine the winner
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
};
// tested determin function and it works  console.log(determineWinner('rock', 'paper'));
//start the game and log the results
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();


// const determineWinner = (userChoice, computerChoice) =>{
// if(userChoice===computerChoice){
// return 'tie';}}
//   else if(
//   userChoice==='rock' && computerChoice === 1/'paper'){
//   console.log('computer win. with paper');} else if(userChoice==='paper' && computerChoice === 2/'scissors'){
//   console.log('computer win. with scissors '); }else if (userChoice==='scissors' && computerChoice === 0/'rock'){
//     console.log('computer win. with rock');}else if
// { console.log('USER WIN yayyyyyy. nice');}
// determineWinner();

//  let userChoice = ;
//   let computerChoice = ;
